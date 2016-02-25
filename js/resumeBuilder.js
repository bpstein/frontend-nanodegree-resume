var bio = {
	"name": "Ben Stein",
	"role": "Web Developer",
	"contacts": {
		"email": "bpstein@mail.com",
		"github": "bumstain",
		"twitter": "@bumstain",
		"location": "London, United Kingdom"
	},
	"picture": "images/fry.jpg",
	"welcomeMessage": "I'm currently working on freelance web development projects.",
	"skills": ["JavaScript", "Ruby", "Ionic", "Front-end Development"]
};

var education = {
  "schools": [{
    "name": "University of Queensland",
    "location": "Brisbane, Australia",
    "degree": "Bachelor of Commerce, Bachelor of Laws",
    "dates": "2001-2010",
    "url": "http://www.uq.edu.au",
    "major": "Accounting, Finance, Commercial Law"
  	}, {
		"name": "Institute of Chartered Accountants",
    "location": "Sydney, Australia",
    "degree": "Graduate Diploma, Chartered Accounting",
    "dates": "2005-2008",
    "url": "http://www.icaa.org.au",
    "major": "Accounting"
  }],
  "onlineCourses": [{
    "title": "Front End Web Development",
    "school": "Udacity",
    "dates": 2016,
    "url": "http://www.udacity.com"
  	}, {
  	"title": "Introduction to Ruby",
  	"school": "Launch School",
  	"dates": 2015,
  	"url": "http://www.launchschool.com"
  }]
};

var work = {
	"jobs": [
		{
			"employer": "Octopus Investments",
			"title": "Specialist Finance Consultant",
			"location": "London, United Kingdom",
			"datesWorked": "July 2015 - February 2016",
			"description": "."
		},
		{
			"employer": "Office of Rail and Road",
			"title": "Senior Analyst",
			"location": "London, United Kingdom",
			"datesWorked": "March 2015 - June 2015",
			"description": "."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "jQuery Street Fighter",
			"datesWorked": "December 2014 - January 2015",
			"description": "Created an interactive jQuery site inspired by Street Fighter",
			"images": [""],
			"url": ""
		},
		{
			"title": "Online Portfolio",
			"datesWorked": "December 2015",
			"description": "Created an online portfolio of work",
			"images": [""],
			"url": "/"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedContactInfo = [];
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedbioPic);
$("#topContacts").append(formattedContactInfo);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedSkills);
$("#main").append(work["position"]);
$("#main").append(education.name);

