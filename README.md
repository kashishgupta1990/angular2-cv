# Angular2 CV Site
This project is an easy and fast way to create your Curriculum Vitae (CV) single page website. 

## Demo Link
http://kashishgupta.in/

## Where do I have to update my CV content?
Just go to following path: `/src/app/services` and update the content in `SharedService.ts` file. 

## Build Information
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.
- ng build --prod --env=prod

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Deployment Steps
- `SSH` your destination server
- Copy the content present in `dist/` folder and past it into any static directory server like `NGINX` or `APACHE`.

## Open Source
- I am encourage the people to `Fork` this project and more sections to enhance the theme.

## Future Plan
- Have to add angular2 routing to add more pages.
- Add more sections 
- Create database to store / add the CV data.
- Create Admin panel to do CRUD operation on CV.
