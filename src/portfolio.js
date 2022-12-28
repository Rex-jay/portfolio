const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'James Momoh',
  role: 'Software Engineer',
  description:
    'Proactive and goal-driven Software Engineer. Proficient in building Restful APIs with NodeJs, translation of business logic from idea to implementation, and Building solutions from conceptualization to deployment. Have worked with Agile methodologies and am proficient in delivering tasks following best practices.',
  resume: 'https://drive.google.com/file/d/17PRnXryq3E0-CogLUWnMcFnpmnCqC8AA/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/james-momoh',
    github: 'https://github.com/rex-jay',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Diagon Studio',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Nodejs', 'TypeScript', 'MongoDB', 'Express'],
    sourceCode: 'https://github.com/',
    livePreview: 'https://diagon.io',
  },
  {
    name: 'Assessified',
    description:
      'A platform for assessment where developers/ or anyone can take a live algorithms test and students can take exams.',
    stack: ['Express', 'TypeScript', 'Nodejs', 'EJS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com/Rex-jay/assessified.git',
  },
  {
    name: 'ScoreCard',
    description:
      'Scorecard is a web application that allows students track their weekly performance records for future reference.',
    stack: ['React', 'NodeJs', 'TypeScript', 'Express'],
    sourceCode: 'https://github.com/',
    livePreview: 'https://astonishing-souffle-b0fb04.netlify.app/home',
  },
  {
    name: 'Sunrise Mgt System',
    description:
      'A School management system that helps teachers, administrators, and support staff streamline their daily duties.',
    stack: ['Javascript', 'Express', 'Nodejs', 'MongoDB'],
    sourceCode: 'https://github.com/',
    livePreview: 'https://mgtsunrise.herokuapp.com/',
  },
  {
    name: 'JateFoods',
    description:
      'An ecommerce platform where local agricultural products is sold. Connects buyers and sellers.',
    stack: ['React', 'NodeJs', 'JavaScript', 'Express'],
    sourceCode: 'https://github.com/',
    livePreview: 'https://jatefoods.com',
  },
  {
    name: 'Everest Bookstore',
    description:
      'A web app that serves as library where authors can upload all their books and users can view and read book.',
    stack: ['Javascript', 'Express', 'Nodejs', 'MongoDB'],
    sourceCode: 'https://github.com/Rex-jay/everestbooks.git',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'NodeJS',
  'Express',
  'React',
  'SQL',
  'MongoDB',
  'TypeORM',
  'GraphQL',
  'Docker',
  'Git',
  'Jest',
  'Microservices',
  'JIRA',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'momoh.james2020@gmail.com',
}

export { header, about, projects, skills, contact }
