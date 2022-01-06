import { Profile } from './_Classes/profile';

export const PROFILE: Profile = {
  name: 'Rodolfo GomeSilva',
  title: 'Software Developer',
  location: 'Manaus, Amazons, Brazil',
  email: 'rodolfo.diego.gomes@gmail.com',
  projects: [
    {
      name: 'My Portfolio',
      owner: 'Rodolfo Silva',
      icon: ['fab' , 'angular'],
      url: 'http://rodolfogomesilva.s3-website.us-east-2.amazonaws.com/',
      image: 'assets/images/my-website-1.png',
      images: ['assets/images/my-website-1.png', 'assets/images/my-website-2.png'],
      private: false,
      startdate: new Date(2021, 6, 1),
      current: true,
      skills: [
        { name: 'Angular', group: 'Front End' },
        { name: 'Bootstrap', group: 'Front End' },
        { name: 'HTML', group: 'Front End' },
        { name: 'CSS', group: 'Front End' },
        { name: 'JavaScript', group: 'Front End' },
        { name: 'TypeScript', group: 'Front End' },
        { name: 'AWS S3', group: 'Hosting' }
      ],
      info: '<p>This is my porfolio page. You are looking at it right now.</p>' +
      '<p>The page was created from <a href=\https://github.com/rodolfodiegosilva/myportfolio\'>myportfolio</a>.</p>'
    },
    {
      name: 'NerdNurse',
      owner: 'NerdNurse',
      icon: ['fab' , 'angular'],
      url: 'https://questionario.nerdnurse.app/home',
      image: 'assets/images/nerdnurse-1.png',
      images: ['assets/images/nerdnurse-1.png', 'assets/images/nerdnurse-2.png', 'assets/images/nerdnurse-3.png', 'assets/images/nerdnurse-4.png'],
      private: false,
      startdate: new Date(2020, 12, 1),
      enddate: new Date(2021, 8, 1),
      current: false,
      skills: [
        { name: 'Angular', group: 'Front End' },
        { name: 'Bootstrap', group: 'Front End' },
        { name: 'HTML', group: 'Front End' },
        { name: 'CSS', group: 'Front End' },
        { name: 'JavaScript', group: 'Front End' },
        { name: 'TypeScript', group: 'Front End' },
        { name: 'Laravel', group: 'Back End' },
        { name: 'PHP', group: 'Back End' },
        { name: 'MySQL', group: 'DataBase' },
        { name: 'Hostinger', group: 'Hosting' }
      ],
      info: '<p>This is a Website focused on solving public tenders in the field of nursing.</p>'
    },
    {
      name: 'MySquare',
      owner: 'MySquare',
      icon: ['fab' , 'angular'],
      url: 'https://mysquare.com.br/main/home',
      image: 'assets/images/mysquare-1.png',
      images: ['assets/images/mysquare-1.png', 'assets/images/mysquare-2.png', 'assets/images/mysquare-3.png'],
      private: false,
      startdate: new Date(2020, 5, 1),
      enddate: new Date(2021, 5, 1),
      current: false,
      skills: [
        { name: 'Angular', group: 'Front End' },
        { name: 'Bootstrap', group: 'Front End' },
        { name: 'HTML', group: 'Front End' },
        { name: 'CSS', group: 'Front End' },
        { name: 'JQuery', group: 'Front End' },
        { name: 'JavaScript', group: 'Front End' },
        { name: 'TypeScript', group: 'Front End' },
        { name: 'Laravel', group: 'Back End' },
        { name: 'PHP', group: 'Back End' },
        { name: 'MySQL', group: 'DataBase' },
        { name: 'HostGator', group: 'Hosting' }
      ],
      info: '<p>This is a Website focused on bidding for services and products.</p>'
    },

  ],
  roles: [
    /*{
      title: 'Web Software Developer',
      company: 'ABC Solutions',
      location: 'Anytown, Your County, United Kingdom',
      url: '',
      startdate: new Date(2018, 2, 1),
      current: true,
      positions: [
        {
          title: 'Web Software Developer',
          company: 'Halo Service Solutions',
          startdate: new Date(2019, 8, 1),
          current: true
        },
        {
          title: 'Junior Developer',
          company: 'Halo Service Solutions',
          startdate: new Date(2018, 2, 1),
          enddate: new Date(2019, 8, 1),
          current: false
        },
      ],
      info: '<p>I was employed as a Junior Developer and am now a Web Software Developer. I have worked on building several websites for a range of customers throughout my time at ABC.</p>' +
      'Role duties;' +
        '<ul>' +
          '<li>Helping with web design</li>' +
          '<li>Liasing with customers</li>' +
          '<li>Creating websites to customer specification</li>' +
          '<li>Training junior developers</li>' +
        '</ul>',
      projects: [
        {
          name: 'Project 1',
          owner: 'ABC Solutions',
          role: 'ABC Solutions',
          private: true,
          startdate: new Date(2019, 6, 1),
          enddate: new Date(2019, 8, 1),
          current: false,
          skills: [
            { name: 'HTML', group: 'Front End' },
            { name: 'CSS', group: 'Front End' },
            { name: 'Javascript', group: 'Front End' },
            { name: 'Wordpress', group: 'Front End' },
            { name: 'PHP', group: 'Back End' },
          ],
          info: '<p>This is an example of a project.</p>' +
          '<p>Details about this project will show here.</p>' +
          '<p>You can also show multiple images of the project above.</p>'
        },
        {
          name: 'Project 2',
          owner: 'ABC Solutions',
          role: 'ABC Solutions',
          private: true,
          startdate: new Date(2019, 6, 1),
          enddate: new Date(2019, 8, 1),
          current: false,
          skills: [
            { name: 'HTML', group: 'Front End' },
            { name: 'CSS', group: 'Front End' },
            { name: 'Javascript', group: 'Front End' },
            { name: 'Wordpress', group: 'Front End' },
            { name: 'PHP', group: 'Back End' },
          ],
          info: '<p>This is an example of a project.</p>' +
          '<p>Details about this project will show here.</p>' +
          '<p>You can also show multiple images of the project above.</p>'
        }
      ]
    },*/
    {
      title: 'Junior Software Developer.',
      company: 'SIDIA Institute of Science and Technology',
      location: 'Manaus, Amazons, Brazil',
      url: 'https://www.sidia.com/',
      startdate: new Date(2021, 10, 1),
      current: true,
      positions: [
        {
          title: 'Junior Software Developer',
          company: 'SIDIA Institute of Science and Technology',
          startdate: new Date(2021, 10, 1),
          current: true
        }
      ],
      info: '<p>I was employed as a Junior Software Developer for web application and API REST development.' +
      'Role duties;' +
        '<ul>' +
          '<li>Project architecture in Angular (JavaScript and TypeScript)</li>' +
          '<li>Web design with HTML5, SASS and CSS3</li>' +
          '<li>Rest API with Node (JavaScript and TypeScript).</li>' +
          '<li>Rest API with SpringBoot (Java).</li>' +
          '<li>Non-relational database with MongoDB</li>' +
          '<li>Git versioning with GitHub</li>' +
          '<li>Agile Management with Jira and Confluence.</li>' +
        '</ul>',
    },
    {
      title: 'Full Stack Developer Jr.',
      company: 'Grupo MM - Mercadomóveis',
      location: 'Manaus, Amazons, Brazil',
      url: 'https://www.grupomercadomoveis.com.br/',
      startdate: new Date(2021, 7, 1),
      enddate: new Date(2021, 10, 1),
      current: false,
      positions: [
        {
          title: 'Full Stack Developer Jr.',
          company: 'Grupo MM - Mercadomóveis',
          startdate: new Date(2021, 7, 1),
          enddate: new Date(2021, 10, 1),
          current: false,
        }
      ],
      info: '<p>I was employed as Full Stack Developer Jr for web application and API REST development.' +
      'Role duties;' +
        '<ul>' +
          '<li>Project architecture in Angular (JavaScript and TypeScript)/li>' +
          '<li>Project architecture in Laravel</li>' +
          '<li>Web design with HTML5, SASS and CSS3</li>' +
          '<li>Rest API with Node (JavaScript and TypeScript)</li>' +
          '<li>Relational database with PostgreSQL.</li>' +
          '<li>Git versioning with GitHub</li>' +
          '<li>Agile Management with Jira and Confluence.</li>' +
        '</ul>',
    },
    {
      title: 'Full Stack Developer Jr.',
      company: 'Silva Ramos Systems',
      location: 'Manaus, Amazons, Brazil',
      url: 'https://nerdnurse.app/',
      startdate: new Date(2021, 1, 1),
      enddate: new Date(2021, 10, 1),
      current: false,
      positions: [
        {
          title: 'Full Stack Developer Jr.',
          company: 'Silva Ramos Systems',
          startdate: new Date(2021, 1, 1),
          enddate: new Date(2021, 10, 1),
          current: false,
        }
      ],
      info: '<p>I was employed as a Junior Software Developer for web applicationand API REST development.' +
      'Role duties;' +
        '<ul>' +
          '<li>Project architecture in Angular (JavaScript and TypeScript)/li>' +
          '<li>Project architecture in Laravel</li>' +
          '<li>Web design with HTML5, SASS and CSS3</li>' +
          '<li>Rest API with Node (JavaScript and TypeScript).</li>' +
          '<li>Relational database with MySQL.</li>' +
          '<li>Git versioning with BITbucket</li>' +
          '<li>Agile Management with Jira and Confluence.</li>' +
        '</ul>',
    },
    {
      title: 'Full Stack Developer Jr.',
      company: 'Instituto Xavier services in I.T.',
      location: 'Manaus, Amazons, Brazil',
      url: 'https://mysquare.com.br/main/home',
      startdate: new Date(2020, 11, 1),
      enddate: new Date(2021, 5, 1),
      current: false,
      positions: [
        {
          title: 'Full Stack Developer Jr.',
          company: 'Instituto Xavier services in I.T.',
          startdate: new Date(2020, 11, 1),
          enddate: new Date(2021, 5, 1),
          current: false,
        }
      ],
      info: '<p>I was employed as a Junior Software Developer for web applicationand API REST development.' +
      'Role duties;' +
        '<ul>' +
          '<li>Project architecture in Angular (JavaScript and TypeScript)/li>' +
          '<li>Project architecture in Laravel</li>' +
          '<li>Web design with HTML5, SASS and CSS3</li>' +
          '<li>Rest API with Node (JavaScript and TypeScript).</li>' +
          '<li>Relational database with MySQL.</li>' +
          '<li>Git versioning with GitLab</li>' +
          '<li>Agile Management with Jira and Confluence.</li>' +
        '</ul>',
    },
  ],
  qualifications: [
    {
      name: 'Bachelor of Computer Engineering',
      location: 'Foundation Center for Analysis, Research and Technological Innovation',
      grade: 'First Class Honours',
      startdate: new Date (2012, 6, 1),
      enddate: new Date (2019, 7, 1),
      current: false,
      icon: ['fas' , 'graduation-cap'],
      info: '<p>Course focused on training professionals capable of operating in an expanding local technology market, which requires integrated knowledge of electronic and computer engineering. ' +
              'For this, the course aims to train professionals able to specify, design, develop, maintain and manage computer systems (hardware and software) applied to the local context.</p>'
    },
    {
      name: 'Technical high school',
      location: 'National Service for Industrial Learning',
      grade: 'Information Technology',
      startdate: new Date (2008, 1, 1),
      enddate: new Date (2011, 12, 1),
      icon: ['fas' , 'book-open'],
      info: '<p>Technical high school with a focus on information technology:</br>' +
      ' Provide technical support through preventive and corrective maintenance on computer equipment;</br>' +
      ' Assess the need for hardware or network component replacements, as well as installing and configuring drives, core software, applications and utilities;</br>' +
      ' Develop systems for the mobile, desktop and web platform using object-oriented languages and technologies on the market;</br>' +
      ' Use tools and development environments to streamline and streamline the process of generating source code and associated documentation.;</br>' +
      '</p>'
    },
  ],
  skills: [
    { name: 'Web Design', group: 'Key Skills', level: 75 },
    { name: 'Problem Solving', group: 'Key Skills', level: 80 },
    { name: 'Team Work', group: 'Key Skills', level: 90 },
    { name: 'Angular', group: 'Technologies', level: 80 },
    { name: 'JQuery', group: 'Technologies', level: 60 },
    { name: 'PHP', group: 'Technologies', level: 70 },
    { name: 'HTML', group: 'Technologies', level: 90 },
    { name: 'CSS', group: 'Technologies', level: 90 },
    { name: 'JavaScript', group: 'Technologies', level: 80 },
    { name: 'Bootstrap', group: 'Technologies', level: 80 },
    { name: 'MySQL', group: 'Technologies', level: 80 },
    { name: 'Git', group: 'Technologies', level: 80 },
  ],
  linkedin: 'eng-rodolfo-diego',
  facebook: 'rodolfo.diego.gomes',
  twitter: 'DiegoSeven_mcfc',
  instagram: 'yourusernamegoeshere',
  github: 'rodolfodiegosilva',
  stackoverflow: 'rodolfo-diego',
  mailto: 'rodolfo.diego.gomes@gmail.com?subject=Contact Request',
  about: '<p>Hi, I\'m Rodolfo Silva.</p>' +
  '<p>I am passionate about software development.</p>' +
  '<p>I live in the city of Manaus, a humble city in Brazil.</p>' +
  '<p>Thank you so much for visiting my website.</p>'
};
