const stringLength = (str) => str.length;
const reverseString = (str) => str.split('').reverse().join('');
const capitalize = (str) => str[0].toUpperCase() + str.substr(1, str.length);
module.exports = {
	stringLength,
	reverseString,
	capitalize
}