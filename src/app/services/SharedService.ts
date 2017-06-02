export class SharedService {
  name: string = 'Kashish Gupta';
  description: string = 'Full Stack JavaScript Developer - NodeJs, AngularJs and MongoDB';
  profileImageLink: string = 'https://avatars0.githubusercontent.com/u/4521362?v=3&s=460';

  headerButton = {
    text: 'Visit Blog',
    link: 'http://blog.kashishgupta.in/'
  };

  socialLinks = {
    twitter: 'https://twitter.com/kashishgupta11',
    googlePlus: 'https://plus.google.com/u/0/102221766050127505521',
    linkedIn: 'https://in.linkedin.com/in/kashish-gupta-35314171',
    github: 'https://github.com/kashishgupta1990'
  };
  about = {
    emailId: 'kashishguptatech@gmail.com',
    place: 'New Delhi, India',
    websiteLink: 'http://kashishgupta.in/',
    blogLink: 'http://blog.kashishgupta.in',
    paragraph1: "I'm Kashish Gupta javascript developer. I passionately work on javascript based framework and technology to craft the thought into reality, I always eager to learn and solve the problems and provide the solution out of it. I build responsive, and user-friendly websites. My current weapons of choice are AngularJs, NodeJs and MongoDB. Being both framework architect and engineer, I help clients bring their ideas into reality with highly maintainable code base.",
    paragraph2: "Website is not the only thing in this world to interact, so I love to see things happen without human interaction. I worked on IoT and provide home and business solution. We follow good practices and industrial standard to build fine product. Contact me today and I would love to hear about your business"
  };
  latestProjects = {
    specialProject: {
      title: 'Hapi-Api Boilerplate',
      metaTitle: 'Its a boilerplate which helps to Kick Start any Node.js project in no time.',
      description: "This Boilerplate is ready to use pack having very exciting feature of HapiJs and MongooseJs. This Boilerplate having some of common plugin which can be used as per required. This Boilerplate will give you a quick start to your Node Application Server with HapiJs. We are Hapi to release this exciting version to build your Node app on Hapi-Api-Boilerplate. It's by default gives you the ToDoApplication API's. It will help you to understand and build your own API's.",
      imageLink: 'assets/images/projects/hapi-api.png',
      projectLink: 'https://github.com/kashishgupta1990/hapi-api'
    },
    projects: [
      {
        title: 'Makaan.com & Proptiger.com',
        description: 'The marketplace model based web application which provide the buy, sell and rent property online market for users. ',
        imageLink: 'assets/images/projects/makaan.png',
        projectLink: 'https://www.makaan.com/'
      },
      {
        title: 'AmericanSwan.com ( Online Shopping Site )',
        description: 'The e-Commerce web application which provide the online clothing market for users.',
        imageLink: 'assets/images/projects/americanswan.jpg',
        projectLink: 'https://www.google.co.in/search?q=site:americanswan.com&biw=1280&bih=659&source=lnms&sa=X&ved=0ahUKEwjhyuDxsPjQAhVLt48KHY4lA1cQ_AUIBSgA&dpr=1'
      },
      {
        title: 'Multi-tenant e-commerce website',
        description: 'Platform Purple provides online shop for the users who want to sell their music online. The shops are customized in nature. Shop owner can have the options to select the variety of themes. All the themes are build on Single Page Application.',
        imageLink: 'assets/images/projects/platformpurple.png',
        projectLink: 'http://platformpurple.com/'
      },
      {
        title: 'INDIGENOUS Website for Small and Large business',
        description: 'This project involved multiple website for fully integrated business management platform for independent service professionals and small business. It allows to create sub-domain dynamically for individual business.',
        imageLink: 'assets/images/projects/indigenous.png',
        projectLink: 'https://indigenous.io/index'
      }
    ]
  };
  otherProjects = [
    {
      title: 'YouTube Downloader “yTube”',
      description: 'This applications stream the youtube videos to yTube domain. Build this application just to learn NodeJs streams and do practical out of it.',
      projectLink: 'https://github.com/kashishgupta1990/ytube',
      isOpenSource: true,
      linkText: 'View on GitHub'
    },
    {
      title: 'NodeJs Boilerplate “hapi-api”',
      description: "This Boilerplate will give you a quick start to your Node Application Server with HapiJs. It's by default gives you the ToDoApplication API's. It will help you to understand and build your own API's.",
      projectLink: 'https://github.com/kashishgupta1990/hapi-api',
      isOpenSource: true,
      linkText: 'View on GitHub'
    },
    {
      title: 'TinyPNG Compress “shrink-pic”',
      description: "It's Command line tool which compress the .png and .jpg images. It uses https://tinypng.com/ API to compress your images.",
      projectLink: 'https://www.npmjs.com/package/shrink-pic',
      isOpenSource: true,
      linkText: 'View on NPM'
    },
    {
      title: 'Curriculum Vitae Angular2 “angular2-cv”',
      description: 'This project is an easy and fast way to create your Curriculum Vitae (CV) single page website. ',
      projectLink: 'https://github.com/kashishgupta1990/angular2-cv',
      isOpenSource: true,
      linkText: 'View on GitHub'
    },
    {
      title: 'GMail integration “gmail-node”',
      description: "It's makes Gmail integration easy using Node.js",
      projectLink: 'https://www.npmjs.com/package/gmail-node',
      isOpenSource: true,
      linkText: 'View on NPM'
    },
    {
      title: 'Live Site “screenshot-tool”',
      description: "Its is automate tool which is use to take screenshot of live website and offline desktop html files.",
      projectLink: 'https://github.com/kashishgupta1990/screenshot-tool',
      isOpenSource: true,
      linkText: 'View on GitHub'
    }
  ];
  workExperience = [
    {
      title: 'Makaan.com | PropTiger.com - ',
      place: 'Headquarters Gurgaon',
      year: '(Dec 2015 - Present)',
      description: 'My role in these projects are to build and manage the Front-End ( AngularJs application ) and the Middle Layer ( NodeJS application ) architecture of the application. We play with some of the third party services newrelic, google map api services etc.',
      projectLink: 'https://www.makaan.com/'
    },
    {
      title: 'To The New Digital -',
      place: 'Noida, India',
      year: '(June 2014 - Nov 2015)',
      description: 'Built and experience the projects on MEAN stack, and had a great experience on other of Javascript libraries.',
      projectLink: 'http://www.tothenew.com/'
    },
    {
      title: 'AVIS e Solutions (Pvt.) Ltd -',
      place: 'Noida, India',
      year: '(Jan 2014 - March 2014)',
      description: 'My role is to build the product for schools called Institute Management System(IMS). In this we have used ASP.NET with entity framework',
      projectLink: 'http://avissol.com/'
    }
  ];
  skill = {
    description: 'Played varied roles from developer to Architect in various projects. Hands on with designing and implementing modules and applications. I worked on IoT and provide home and business solution and follow good practices as per industrial standard to build fine product.',
    viewMoreLink: '',
    list: [
      {
        title: 'Object Oriented Javascript',
        metaTitle: 'Object Oriented Javascript',
        level: 'Expert',
        levelBar: '100%'
      },
      {
        title: 'AngularJs Framework',
        metaTitle: 'You can use the tooltip to add more info...',
        level: 'Expert',
        levelBar: '90%'
      },
      {
        title: 'NodeJs Framework',
        metaTitle: 'NodeJs Framework',
        level: 'Expert',
        levelBar: '90%'
      },
      {
        title: 'HTML / CSS',
        metaTitle: 'HTML / CSS',
        level: 'Intermediate',
        levelBar: '70%'
      },
      {
        title: 'MongoDB',
        metaTitle: 'MongoDB (No Sql database)',
        level: 'Intermediate',
        levelBar: '70%'
      },
      {
        title: 'SQl Language',
        metaTitle: 'SQl Language',
        level: 'Intermediate',
        levelBar: '70%'
      },
      {
        title: 'Git - Version Control',
        metaTitle: 'Git - Version Control',
        level: 'Expert',
        levelBar: '100%'
      }
    ]
  };
  educationQualification = [
    {
      course: 'Master of Computer Application',
      university: 'GGSIP University',
      year: '(2011-2014)'
    },
    {
      course: 'Bachelor of Computer Application',
      university: 'GGSIP University',
      year: '(2008-2011)'
    }
  ];
  knownLanguage = [
    {
      language: 'Hindi',
      level: 'Native Speaker',
      rate: 5
    },
    {
      language: 'English',
      level: 'Professional',
      rate: 5
    }
  ];
}
