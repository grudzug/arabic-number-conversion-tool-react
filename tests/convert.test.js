// run "npm test"

const { expect } = require('@jest/globals')
const convert = require('../src/utils/convert')

test('Convert numeric input into the English phrase of that number', () => {
    expect(convert(0)).toBe('zero')
    expect(convert(7)).toBe('seven')
    expect(convert(42)).toBe('forty-two')
    expect(convert(1999)).toBe('one thousand nine hundred and ninety-nine')
    expect(convert(2001)).toBe('two thousand and one')
    expect(convert(17999)).toBe('seventeen thousand nine hundred and ninety-nine')
    expect(convert(342251)).toBe('three hundred and forty-two thousand two hundred and fifty-one')
    expect(convert(1300420)).toBe('one million three hundred thousand four hundred and twenty')
    expect(convert(2000003011)).toBe('two billion three thousand and eleven')
    expect(convert(44693521633911)).toBe('forty-four trillion six hundred and ninety-three billion five hundred and twenty-one million six hundred and thirty-three thousand nine hundred and eleven')
})

test('Errors', () => {
    expect(() => convert()).toThrow('You must provide a number.')
    expect(() => convert('')).toThrow('You must provide a number.')
    expect(() => convert('twenty')).toThrow('You must provide a number.')
    expect(() => convert(null)).toThrow('You must provide a number.')
    expect(() => convert(NaN)).toThrow('You must provide a number.')
    expect(() => convert(-1)).toThrow('Negative numbers are not supported.')
    expect(() => convert(21.8)).toThrow('Only integers are supported.')
    expect(() => convert(12345654321234567898)).toThrow('Too big number.')
})