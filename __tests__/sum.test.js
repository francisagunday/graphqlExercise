/**
 *  Author: Francis John Agunday
 * This defines the tests for adding two numbers and checking the results
 */

import { graphql } from 'graphql';
import schema from '../data/schema.js';

describe('Adding two positive integers', () => {
  it('Should return the correct sum of the positive integers', async () => {
    //language=GraphQL
    const query = `
      {
        numbers(digit1:1, digit2:123) {
          sumOfNumbers
        }
      }
    `;
    const result = await graphql(schema, query);
    const { data } = result;
    expect(data.numbers.sumOfNumbers).toBe(124);
  });
});

describe('Adding two negative integers', () => {
  it('Should return the correct sum of negative numbers', async () => {
    //language=GraphQL
    const query = `
      {
        numbers(digit1:-1, digit2:-123) {
          sumOfNumbers
        }
      }
    `;
    const result = await graphql(schema, query);
    const { data } = result;
    expect(data.numbers.sumOfNumbers).toBe(-124);
  });
});

describe('Adding zero and positive integers', () => {
  it('Should return the correct sum of zero and positive numbers', async () => {
    const query = `
      {
        numbers(digit1:0, digit2:23) {
          sumOfNumbers
        }
      }
    `;
    const result = await graphql(schema, query);
    const { data } = result;
    expect(data.numbers.sumOfNumbers).toBe(23);
  });
});

describe('Adding zero and negative integers', () => {
  it('Should return the correct sum of zero and negative numbers', async () => {
    const query = `
      {
        numbers(digit1:0, digit2:-23) {
          sumOfNumbers
        }
      }
    `;
    const result = await graphql(schema, query);
    const { data } = result;
    expect(data.numbers.sumOfNumbers).toBe(-23);
  });
});

describe('Adding negative and positive integers', () => {
  it('Should return the correct sum of negative and positive numbers', async () => {
    const query = `
      {
        numbers(digit1:-7, digit2:23) {
          sumOfNumbers
        }
      }
    `;
    const result = await graphql(schema, query);
    const { data } = result;
    expect(data.numbers.sumOfNumbers).toBe(16);
  });
});

describe('Adding non-Integers', () => {
  it('Should return an error when adding non-Int type numbers', async () => {
    const query = `
      {
        numbers(digit1:1.23, digit2:7.9) {
          sumOfNumbers
        }
      }
    `;
    const result = await graphql(schema, query);
    const { data } = result;
    expect(data).toBeUndefined();
  });
});

describe('Adding non-numbers', () => {
  it('Should return an error when adding non numbers', async () => {
    const query = `
      {
        numbers(digit1:a, digit2:z) {
          sumOfNumbers
        }
      }
    `;
    const result = await graphql(schema, query);
    const { data } = result;
    expect(data).toBeUndefined();
  });
});