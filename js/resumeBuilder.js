/*
Build bio, education, project, and work objects
*/

var bio = {
  name: 'Meagan',
  role: 'freelance full stack developer',
  contacts: {
    mobile: '760-555-1212',
    email: 'meagan.cooney@gmail.com',
    github: 'meaganc',
    twitter: 'none',
    location: 'San Diego, CA'
  },
  welcomeMessage: 'Welcome to my Home on the Internet',
  skills: ['JavaScript', 'Ruby', 'HTML/CSS', 'UX', 'Testing'],
  biopic: "https://meaganc.github.io/assets/portfolio/me.jpg",
};

bio.display = function(){
  var formattedHeader = HTMLheaderName.replace("%data%", this.name);
  var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", this.role);
  $('#header').prepend(formattedHeader, formattedHTMLheaderRole);

  var formattedHTMLmobile = HTMLmobile.replace("%data%", this.contacts.mobile);
  var formattedHTMLemail = HTMLemail.replace("%data%", this.contacts.email);
  var formattedHTMLgithub = HTMLgithub.replace("%data%", this.contacts.github);
  var formattedHTMLlocation = HTMLlocation.replace("%data%", this.contacts.location);
  $('#topContacts').append(formattedHTMLmobile, formattedHTMLemail, formattedHTMLgithub, formattedHTMLlocation);
  $('#footerContacts').append(formattedHTMLmobile, formattedHTMLemail, formattedHTMLgithub, formattedHTMLlocation);

  var formattedHTMLbioPic = HTMLbioPic.replace("%data%", this.biopic);
  var formatedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
  $('#header').append(formattedHTMLbioPic, formatedHTMLwelcomeMsg, HTMLskillsStart);

  var formattedHTMLskills;

  this.skills.forEach(function(skill) {
    formattedHTMLskills = HTMLskills.replace("%data%", skill);
    $('#skills').append(formattedHTMLskills);
  });
};

var education = {
  schools: [{
      name: 'UC Berkeley',
      location: 'Berkeley, CA',
      degree: 'BA',
      majors: ['History'],
      dates: '2007-2009',
      url: 'history.berkeley.edu'
    },
    {
      name: 'Palomar College',
      location: 'San Marcos, CA',
      degree: 'None',
      majors: ['Computer Science', 'GIS'],
      dates: '2010-2011',
      url: 'palomar.edu'
    }
  ],
  onlineCourses: [{
    title: 'Front end Nanodegree',
    school: 'Udacity',
    dates: '2016-current',
    url: 'udacity.com'
  }]
};

education.display = function(){
  this.schools.forEach(function(school) {
    var formatedHTMLschoolName = HTMLschoolName.replace("%data%", school.name);
    var formatedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formatedHTMLschoolDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", school.location);

    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').append(formatedHTMLschoolName, formatedHTMLschoolDates, formattedHTMLschoolLocation);
    $('.education-entry:last a').append(formatedHTMLschoolDegree); //make sure the a tag is closed properly

    if (school.majors.length >= 1) {
      var formattedHTMLschoolMajor;
      school.majors.forEach(function(major) {
        formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", major);
        $('.education-entry:last').append(formattedHTMLschoolMajor);
      });
    }
  });

  $('#education').append(HTMLonlineClasses);

  this.onlineCourses.forEach(function(course) {
    var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
    var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
    var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", course.dates);
    var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", course.url);

    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').append(formattedHTMLonlineTitle, formattedHTMLonlineDates, formattedHTMLonlineURL);
    $('.education-entry:last a:first').append(formattedHTMLonlineSchool); //make sure the a tag is closed properly
  });
};

var work = {
  jobs: [{
      employer: 'ANONANON',
      title: 'Software engineer',
      location: 'Los Angeles, CA',
      dates: '2015-2016',
      description: 'Lorem Ipsum'
    },
    {
      employer: 'Fun Fun TV',
      title: 'Software engineer',
      location: 'Los Angeles, CA',
      dates: '2013-2015',
      description: 'description'
    }
  ]
};

work.display = function(){
  this.jobs.forEach(function(job) {
    var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedHTMLworkDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", job.description);

    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').prepend(formattedHTMLworkEmployer, formattedHTMLworkDates, formattedHTMLworkLocation, formattedHTMLworkDescription);
    $('.work-entry:last a:first').append(formattedHTMLworkTitle); //make sure the a tag is closed properly
  });
};

var projects = {
  projects: [{
    title: 'Backpacking in New Zealand',
    dates: '2016-2016',
    description: 'From Auckland to Queenstown',
    images: ['images/mtcook.png', 'images/waiheke.png']
  }]
};

projects.display = function(){
  this.projects.forEach(function(project) {
    $('#projects').append(HTMLprojectStart);
    var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.description);

    if (project.images.length > 1) {
      var formattedHTMLprojectImage;
      project.images.forEach(function(image) {
        formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", image);
        $('.project-entry:last').prepend(formattedHTMLprojectImage);
      });
    }
    $('.project-entry:last').prepend(formattedHTMLprojectTitle, formattedHTMLprojectDates, formattedHTMLprojectDescription);
  });
};

bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);
