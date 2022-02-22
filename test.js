const functions = require('./functions');
const Calculator = require('./calculator');
const calculator = new Calculator();
const testValue = 'odin';
const a = 2;
const b = 2;
//! check string length
test("length of 'bavon' is 5", () => { 
	expect(functions.stringLength('bavon')).toBe(5);
});
 
//! test range
test(`The length of ${testValue} is between 1 and 10`, () => {
	expect(functions.stringLength(testValue)).toBeLessThan(10) && expect(functions.stringLength(testValue)).toBeGreaterThan(1);
});

//! test reverse functionality
test(`The reverse for ${testValue} is nido`, () => {
	expect(functions.reverseString(testValue)).toMatch(/nido/);
});

//! test addition
describe('add', () => { 
	test(`${a} + ${b} = 4`, () => {
		expect(calculator.add(a, b)).toBe(4);
	});
});

//!test subsraction

describe('subtract', () => {
	test(`${a} - ${b} = 0`, () => {
		expect(calculator.subtract(a, b)).toBe(0);
	});
});

//!test divide

describe('divide', () => {
	test(`${a} / ${b} = 1`, () => {
		expect(calculator.divide(a, b)).toBe(1);
	});
});

//! test multiply
describe('multiply', () => {
	test(`${a} * ${b} = 4 `, () => {
		expect(calculator.multiply(a, b)).toBe(4);
	});
});

describe('capitalize', () => {
	test(`Capitalized ${testValue} = Odin `, () => {
		expect(functions.capitalize(testValue)).toMatch(/Odin/);
	});
});