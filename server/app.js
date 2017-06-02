'use strict';

const Hapi = require('hapi');
const fs = require('fs');

var CONFIG = require('./config/environment.json');
const NODE_ENV = process.env.NODE_ENV || 'development';
global.CONFIG = CONFIG[NODE_ENV];

console.log('Server running on ', NODE_ENV);
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    port: global.CONFIG.server.port,
    routes: {
        cors: global.CONFIG.server.allowCrossDomain
    }
});

// Registering Inert Plugin to server static directory.
server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }
});

// Register logging plugin
server.register({
    register: require('good'),
    options: {
        ops: {
            interval: 1000
        },
        reporters: {
            myConsoleReporter: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{log: '*', response: '*'}]
            }, {
                module: 'good-console'
            }, 'stdout'],
            myFileReporter: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{ops: '*'}]
            }, {
                module: 'good-squeeze',
                name: 'SafeJson'
            }, {
                module: 'good-file',
                args: ['./test/fixtures/awesome_log']
            }],
            myHTTPReporter: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{error: '*'}]
            }, {
                module: 'good-http',
                args: ['http://prod.logs:3000', {
                    wreck: {
                        headers: {'x-api-key': 12345}
                    }
                }]
            }]
        }
    },
}, (err) => {
    if (err) {
        return console.error(err);
    }
});

// Serving Static Content
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: CONFIG[NODE_ENV].server.staticFolder
        }
    }
});

// API Routes binder.
function applyRouteConfig(dirPath) {
    var dirName = dirPath;
    var data = fs.readdirSync(dirName);
    data.forEach(function (dta) {
        var path = dirName + '/' + dta;
        if (fs.lstatSync(path).isDirectory()) {
            applyRouteConfig(path);
        } else if (dta.match(/.route./)) {
            server.route(require(path));
        }
    });
}
applyRouteConfig(__dirname + '/api');

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
