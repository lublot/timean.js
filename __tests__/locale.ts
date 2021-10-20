import { add, sub } from 'date-fns'
import timean from '..';
import { LocaleConfig } from '../src/utils';

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const localeStrings: LocaleConfig = {
  current: 'now',
  replacer: '%d',
  past: {
    day: '%d days ago',
    minute: '%d minutes ago',
    hour: '%d hours ago',
    month: '%d months ago',
    second: '%d seconds ago',
    year: '%d years ago',
  },
  future: {
    day: 'in %d days',
    minute: 'in %d minutes',
    hour: 'in %d hours',
    month: 'in %d months',
    second: 'in %d seconds',
    year: 'in %d years'
  }
}

describe('Check if strings are translated with singular and plural', () => {
  test('asserts string is translated for a single year', () => {
    const date = sub(new Date(), { years: 1 })
    expect(timean.fromNow(date, localeStrings)).toBe('1 years ago')
  })

  test('asserts string is translated for some years ago', () => {
    var randomInt = getRandomIntInclusive(2, 1000)
    const date = sub(new Date(), { years: randomInt })
    expect(timean.fromNow(date, localeStrings)).toBe(`${randomInt} years ago`)
  })

  test('asserts string is translated for an year later', () => {
    const date = add(new Date(), { years: 1 })
    expect(timean.fromNow(date, localeStrings)).toBe('in 1 years')
  })

  test(`asserts string is translated for some years later`, () => {
    var randomInt = getRandomIntInclusive(2, 1000)
    const date = add(new Date(), { years: randomInt })
    expect(timean.fromNow(date, localeStrings)).toBe(`in ${randomInt} years`)
  })

  test('asserts string is translated for a month ago', () => {
    const date = sub(new Date(), { months: 1 })
    expect(timean.fromNow(date, localeStrings)).toBe('1 months ago')
  })

  test('asserts string is translated for some months ago', () => {
    var randomInt = getRandomIntInclusive(2, 11)
    const date = sub(new Date(), { months: randomInt })
    expect(timean.fromNow(date, localeStrings)).toBe(`${randomInt} months ago`)
  })

  test('asserts string is translated for a month later', () => {
    const date = add(new Date(), { months: 1 })
    expect(timean.fromNow(date, localeStrings)).toBe('in 1 months')
  })

  test(`asserts string is translated for some months later`, () => {
    var randomInt = getRandomIntInclusive(2, 11)
    const date = add(new Date(), { months: randomInt })
    expect(timean.fromNow(date, localeStrings)).toBe(`in ${randomInt} months`)
  })

  test('asserts string is translated for a hour ago', () => {
    const date = sub(new Date(), { hours: 1 })
    expect(timean.fromNow(date, localeStrings)).toBe('1 hours ago')
  })

  test('asserts string is translated for some hours ago', () => {
    var randomInt = getRandomIntInclusive(2, 23)
    const date = sub(new Date(), { hours: randomInt })
    expect(timean.fromNow(date, localeStrings)).toBe(`${randomInt} hours ago`)
  })

  test('asserts string is translated for an hour later', () => {
    const date = add(new Date(), { hours: 1 })
    expect(timean.fromNow(date, localeStrings)).toBe('in 1 hours')
  })

  test(`asserts string is translated for some hours later`, () => {
    var randomInt = getRandomIntInclusive(2, 23)
    const date = add(new Date(), { hours: randomInt })
    expect(timean.fromNow(date, localeStrings)).toBe(`in ${randomInt} hours`)
  })

  test('asserts string is translated for a minute ago', () => {
    const date = sub(new Date(), { minutes: 1 })
    expect(timean.fromNow(date, localeStrings)).toBe('1 minutes ago')
  })

  test('asserts string is translated for some minutes ago', () => {
    var randomInt = getRandomIntInclusive(2, 59)
    const date = sub(new Date(), { minutes: randomInt })
    expect(timean.fromNow(date, localeStrings)).toBe(`${randomInt} minutes ago`)
  })

  test('asserts string is translated for an minute later', () => {
    const date = add(new Date(), { minutes: 1 })
    expect(timean.fromNow(date, localeStrings)).toBe('in 1 minutes')
  })

  test(`asserts string is translated for some minutes later`, () => {
    var randomInt = getRandomIntInclusive(2, 59)
    const date = add(new Date(), { minutes: randomInt })
    expect(timean.fromNow(date, localeStrings)).toBe(`in ${randomInt} minutes`)
  })

  test('asserts string is translated for a second ago', () => {
    const date = sub(new Date(), { seconds: 1 })
    expect(timean.fromNow(date, localeStrings)).toBe('1 seconds ago')
  })

  test('asserts string is translated for some seconds ago', () => {
    var randomInt = getRandomIntInclusive(2, 59)
    const date = sub(new Date(), { seconds: randomInt })
    expect(timean.fromNow(date, localeStrings)).toBe(`${randomInt} seconds ago`)
  })

  test('asserts string is translated for a second later', () => {
    const date = add(new Date(), { seconds: 1 })
    expect(timean.fromNow(date, localeStrings)).toBe('in 1 seconds')
  })

  test(`asserts string is translated for some seconds later`, () => {
    var randomInt = getRandomIntInclusive(2, 59)
    const date = add(new Date(), { seconds: randomInt })
    expect(timean.fromNow(date, localeStrings)).toBe(`in ${randomInt} seconds`)
  })

  test(`asserts string is translated for now`, () => {
    const now = new Date()
    expect(timean.fromNow(now, localeStrings)).toBe('now')
  })
})