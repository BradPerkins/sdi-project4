// Bradley Perkins
// Project 4
// SDI 1407
// 07-29-2014

/*
// Does String follow a 123-456-7890 pattern like a phone number?

var phoneNumber = function(number) {
	var newNum = number;
	var originalNumber = "123-456-7890";
	if (number.charAt(3) === "-" && number.charAt(7) === "-" && number.length === originalNumber.length) {
		return (newNum + " is a real phone number");
	}
	else {
		return ( newNum + " is not a real phone number");
	}
};


console.log(phoneNumber("222-222-222"));

*/


// Does a string follow an aaa@bbb.ccc pattern like an email address?

// index of @ has to be before . 

/*
var emailPattern = function(email) {
	var newEmail = email;
	if (email.indexOf("@") > 0 && email.indexOf("@") < email.indexOf(".") && email.indexOf(".") > email.indexOf("@")){
		return (newEmail + " is in the right email format");
	}
	else {
		return ( newEmail + " is not in the right email format");
	}
};

console.log(emailPattern("bperkins99@fullsail.edu"));


// Is the string a URL? (Does it start with http: or https:)
var checkUrl = function(webPage){
	var addBar = webPage;
	if (addBar.match("http:") || addBar.match("https:")) {
		return ("This is a proper URL.");
	}
	else {
		return ("This is not a proper URL");
	}
};

console.log(checkUrl("https://github.com/BradPerkins/sdi-project4"));

*/







//needs finished still

/*
// Title-case a string(split into words, then uppercase the first letter of each word)
// toUpperCase each word after " " using .split
// upper case 0 index of each word in a string.
// for loop

var capFirst = function(string) {
	var cap = string;
	var wordSplit = cap.split(" ");
	for (var i = 0; i < wordSplit.length; i++) {
		wordSplit[i]
	};


};

console.log(capFirst("each of the first letters in each word here should get capitalized"));






//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
var decimal = function(money){
	var dollars = money;
	return (dollars.toFixed(2));

};
console.log(decimal(2.1));
*/

// Convert string to a number.
var stringToNumber = function(convertMe) {
	var numWord = convertMe;
	return (parseFloat(numWord));

};
console.log(stringToNumber("1407"));





























