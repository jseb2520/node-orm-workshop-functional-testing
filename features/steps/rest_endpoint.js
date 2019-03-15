let request = require('request');
const {
	Given,
	When,
	Then
} = require('cucumber');
const assert = require('assert');

let country;

When('i request information of Colombia', function(callback) {
	request('https://restcountries.eu/rest/v2/name/colombia', (err, response, body) => {
		if (err) {
			callback(err);
		} else {
			country = JSON.parse(body);
			callback();
		}
	});
});

Then('i get data in JSON format', function(callback) {
	callback();
	console.log(country);
	return country;
})