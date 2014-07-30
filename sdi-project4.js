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





























