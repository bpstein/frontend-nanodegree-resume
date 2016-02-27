// DECLARE BIO OBJECT
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

// DECLARE EDUCATION OBJECT
var education = {
  "schools": [{
    "name": "University of Queensland",
    "location": "Brisbane, Australia",
    "degree": "Bachelor of Commerce",
    "dates": "2001-2004",
    "url": "http://www.uq.edu.au",
    "major": "Accounting & Finance"
  	}, {
  	"name": "University of Queensland",
    "location": "Brisbane, Australia",
    "degree": "Bachelor of Laws",
    "dates": "2005-2010",
    "url": "http://www.uq.edu.au",
    "major": "Commercial Law"
  	},{
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

// DECLARE WORK EXPERIENCE OBJECT
var work = {
	"jobs": [
		{
			"employer": "Octopus Investments",
			"title": "Specialist Finance Consultant",
			"location": "London, United Kingdom",
			"datesWorked": "July 2015 - February 2016",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magnam eos, minima natus similique doloribus ex! Facilis nisi eveniet modi odit delectus, eligendi facere ipsa provident, cupiditate, illum error laborum!"
		},
		{
			"employer": "Office of Rail and Road",
			"title": "Senior Analyst",
			"location": "London, United Kingdom",
			"datesWorked": "April 2015 - June 2015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum aut explicabo facere soluta, tempore, fugit placeat excepturi labore debitis quos voluptatum amet natus laborum dicta esse ab recusandae architecto reiciendis."
		},
		{
			"employer": "Peabody",
			"title": "Business Analyst",
			"location": "London, United Kingdom",
			"datesWorked": "May 2014 - April 2015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis, dolorem sed nam neque, aliquid dignissimos obcaecati minima magnam totam voluptas. Accusantium, eaque unde sit sunt mollitia esse blanditiis vitae?"
		}, 
		{
			"employer": "KPMG Corporate Finance",
			"title": "Vice President",
			"location": "Austin, TX, United States",
			"datesWorked": "August 2012 - March 2014",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque, adipisci suscipit libero. Explicabo ab harum suscipit, sint dicta totam, sunt corrupti maxime recusandae quo modi similique eos placeat obcaecati."
		}, 
		{
			"employer": "KPMG",
			"title": "Executive, Real Estate Advisory Services",
			"location": "Brisbane, Australia",
			"datesWorked": "January 2009 - August 2012",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ducimus commodi omnis a quaerat quas aperiam maiores vero expedita qui doloremque, rerum ullam fugit veniam in esse magni, fugiat eligendi."
		}
	]
};

// DECLARE PROJECTS OBJECT
var projects = {
	"projects": [
		{
			"title": "jQuery Street Fighter",
			"datesWorked": "December 2014 - January 2015",
			"description": "Created an interactive jQuery site inspired by Street Fighter",
			"images": ["images/streetfighter.png"],
			"url": "http://www.bumstain.github.io/jquery-streetfighter"
		},
		{
			"title": "Tic Tac Toe",
			"datesWorked": "December 2015",
			"description": "Created a simple tic tac toe game",
			"images": ["images/tictactoe.png"],
			"url": ""
		}
	]
};

// APPEND BIO DETAILS TO HEADER
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
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
$("#main").append(work["position"]);
$("#main").append(education.name);

// APPEND SKILLS TO THE HEADER
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};

// APPEND WORK DETAILS TO THE RESUME
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	  var formattedEmployerTitle = formattedEmployer + formattedTitle;
	  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	  var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
	  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	  $(".work-entry:last")
	  	.append(formattedEmployerTitle)
	  	.append(formattedLocation)
	  	.append(formattedDate)
	  	.append(formattedDescription); 
	};
}

work.display();

// APPEND PROJECT DETAILS TO THE RESUME
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart); // append Projects section
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].datesWorked);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last") // append elements to each project entry
			.append(formattedTitle)
			.append(formattedDates)
			.append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();


// APPEND EDUCATION DETAILS TO THE RESUME


// INTERNATIONALIZE BUTTON FUNCTIONALITY
function inName(name) {
	name = bio.name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

// APPEND MAP TO THE RESUME
$("#mapDiv").append(googleMap);

// Capture the user's click locations
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

