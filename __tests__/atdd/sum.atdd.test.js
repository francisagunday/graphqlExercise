/**
 * Author: Francis John Agunday
 * This defines the tests for adding two numbers and checking the results using ATDD
 * This test is still not working 100%. I would need to read more about graphQL js and how atdd
 * can be implemented.
 */

import { graphql } from 'graphql';
import schema from '../../data/schema.js';

const FeatureTest = require('gherkin-easy');
const featureTest = new FeatureTest('tests/atdd/add.numbers.feature');

class SumNumbers {
    constructor(digit1 = 0, digit2 = 0) {
        this.digit1 = digit1;
        this.digit2 = digit2;
    }
 
    getDigit1() {
        return this.digit1;
    }
 
    getDigit2() {
        return this.digit2;
    }

    getSumOfNumbers() {
        var query = `
           {
                numbers(digit1:${this.digit1}, digit2:${this.digit2}) {
                    sumOfNumbers
                }
            }
        `;       
        return graphql(schema, query).then( response => {
            const result = response;
            const { data } = result;
            //return data.numbers.sumOfNumbers;
            console.log(data.numbers.sumOfNumbers);
            
        });
    }
}
 
featureTest.run(({ given, when, then, example }) => {
 
    let mynumber;

    beforeAll(() => {
        mynumber = new SumNumbers(example.digit1, example.digit2);
    });
 
    test(given, () => {
        expect(mynumber.getDigit1()).toBe(example.digit1);
    });
 
    test(when, () => {
        expect(mynumber.getDigit2()).toBe(example.digit2);
    });
 
    test(then, () => {
        expect(mynumber.addNumbers()).toBe(example.sumOfNumbers);
    });
});