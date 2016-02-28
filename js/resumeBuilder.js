// APPEND BIO DETAILS TO HEADER
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header")
	.prepend(formattedRole)
	.prepend(formattedName)
	.append(formattedbioPic)
	.append(formattedWelcomeMsg);

// APPEND CONTACTS TO HEADER AND FOOTER
var formattedContactInfo = [];
	// Push contact information into Contact Info array
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

// APPEND SKILLS TO HEADER 
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
};

// APPEND WORK DETAILS TO THE RESUME BODY
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	  var formattedEmployerTitle = formattedEmployer + formattedTitle;
	  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	  var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
	  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	  $(".work-entry:last") // append details to each work entry
	  	.append(formattedEmployerTitle)
	  	.append(formattedLocation)
	  	.append(formattedDate)
	  	.append(formattedDescription); 
	};
}

work.display();

// APPEND PROJECT DETAILS TO THE RESUME BODY
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart); // append Projects section
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].datesWorked);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last") // append details to each project entry
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

// APPEND EDUCATION DETAILS TO THE RESUME BODY
education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for (i in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			$(".education-entry:last")
				.append(formattedSchoolName + formattedSchoolDegree)
				.append(formattedSchoolDates)
				.append(formattedSchoolLocation)
				.append(formattedSchoolMajor);
		}
	}
}

education.display();

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

