// - Create a new class called EmailList. The constructor function should take in one parameter, "name", and return an instance which contains the following:
// - name, the name of the mailing list, such as "BSSA Students" or "BSSA Teachers".
// - list, an array of all the emails in that list. Note that initially, the array will be empty.

function emaillist (name) {
	this.name = name 
	this.list = []
}

var box = new emaillist ("students")
var teachers = new emaillist ("teachers")

// Add a function to the EmailList's prototype. This function should be called "addEmail", and it should take one parameter, an email address and add it to the "list" property of the instance.

emaillist.prototype.addEmail = function (email) {
	this.list.push(email)
	console.log("Ik heb een email toegevoegd aan de lijst" + " " + this.name) //Extra toevoeging, ignore!
}

emaillist.prototype.sendEmailToAll = function (text) {
	console.log("Email content:" + " " + text)
	console.log("Sending email to:" + " " + this.list)
}

box.addEmail("email@email.com");
box.addEmail("email@hotmail.com");
teachers.addEmail("teacher@hotmail.com");
console.log(box)
console.log(teachers)

box.sendEmailToAll("This is the email content")
teachers.sendEmailToAll("Content for teachers")
// Add another function to the EmailList's prototype, called "sendEmailToAll". This function should take in one parameter: the text of the email, and then "send an email to each address". Since that lecture will be sometime in week 6, for now, simply print out the following:

// "Email content:"
// <list the text of the email to be sent>

// "Sending email to:"
// <list all email addresses>
