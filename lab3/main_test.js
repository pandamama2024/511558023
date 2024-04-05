const { describe, it } = require('node:test');
const assert = require('assert');
const { Calculator } = require('./main');

// TODO: write your tests here

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('exp', () => {
        it('should calculate the exponential value correctly', () => {
            assert.strictEqual(calculator.exp(0), 1);
            assert.strictEqual(calculator.exp(1), Math.exp(1));
            assert.strictEqual(calculator.exp(2), Math.exp(2));
        });

        it('should throw an error for non-finite values', () => {
            assert.throws(() => calculator.exp('abc'), Error);
        });

        it('should throw an error for overflow', () => {
            assert.throws(() => calculator.exp(1000), Error);
        });
    });

    describe('log', () => {
        it('should calculate the natural logarithm correctly', () => {
            assert.strictEqual(calculator.log(1), 0);
            assert.strictEqual(calculator.log(2), Math.log(2));
            assert.strictEqual(calculator.log(10), Math.log(10));
        });

        it('should throw an error for non-finite values', () => {
            assert.throws(() => calculator.log('abc'), Error);
        });

        it('should throw an error for math domain error (1)', () => {
            assert.throws(() => calculator.log(-1), Error);
        });

        it('should throw an error for math domain error (2)', () => {
            assert.throws(() => calculator.log(0), Error);
        });
    });
});
