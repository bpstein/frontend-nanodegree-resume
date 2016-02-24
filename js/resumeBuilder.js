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


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

