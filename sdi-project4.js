// Bradley Perkins
// Project 4
// SDI 1407
// 07-29-2014


// Does String follow a 123-456-7890 pattern like a phone number?

var phoneNumber = function(number) {
	var newNum = number;
	var originalNumber = "123-456-7890";
	if (number.charAt(3) === "-" && number.charAt(7) === "-" && number.length === originalNumber.length) {
		return true;
	}
	else {
		return false;
	}
};
console.log(phoneNumber("222-222-222"));


// Does a string follow an aaa@bbb.ccc pattern like an email address?
// index of @ has to be before . 

var emailPattern = function(email) {
	var newEmail = email;
	if (email.indexOf("@") > 0 && email.indexOf("@") < email.indexOf(".") && email.indexOf(".") > email.indexOf("@")){
		return true;
	}
	else {
		return false;
	}
};
console.log(emailPattern("bperkins99@fullsail.edu"));


// Is the string a URL? (Does it start with http: or https:)
var checkUrl = function(webPage){
	var addBar = webPage;
	if (addBar.match("http:") || addBar.match("https:")) {
		return true;
	}
	else {
		return false;
	}
};
console.log(checkUrl("https://github.com/BradPerkins/sdi-project4"));


//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
var decimal = function(pi, dec){
	var piNum = pi;
	var decLoc = dec;
	return (piNum.toFixed(decLoc));

};
console.log(decimal(3.14159, 3));


// Convert string to a number.
var stringToNumber = function(convertMe) {
	var numWord = convertMe;
	return (parseFloat(numWord));

};
console.log(stringToNumber("1407"));


// Find the smallest value in an array that is greater than a givin number.
//var SmallestNum = function(num){































