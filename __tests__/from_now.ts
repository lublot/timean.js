import { add, sub } from 'date-fns'
import timean from '..';

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('Check if date strings are calculated correctly using current time as reference', () => {
  test('asserts string represents an year ago counting from now', () => {
    const date = sub(new Date(), { years: 1 })
    expect(timean.fromNow(date)).toBe('1 year ago')
  })

  test('asserts string represents some years ago counting from now', () => {
    var randomInt = getRandomIntInclusive(2, 1000)
    const date = sub(new Date(), { years: randomInt })
    expect(timean.fromNow(date)).toBe(`${randomInt} years ago`)
  })

  test('asserts string represents an year later counting from now', () => {
    const date = add(new Date(), { years: 1 })
    expect(timean.fromNow(date)).toBe('in 1 year')
  })

  test(`asserts string represents some years later starting from now`, () => {
    var randomInt = getRandomIntInclusive(2, 1000)
    const date = add(new Date(), { years: randomInt })
    expect(timean.fromNow(date)).toBe(`in ${randomInt} years`)
  })

  test('asserts string represents a month ago counting from now', () => {
    const date = sub(new Date(), { months: 1 })
    expect(timean.fromNow(date)).toBe('1 month ago')
  })

  test('asserts string represents some months ago counting from now', () => {
    var randomInt = getRandomIntInclusive(2, 11)
    const date = sub(new Date(), { months: randomInt })
    expect(timean.fromNow(date)).toBe(`${randomInt} months ago`)
  })

  test('asserts string represents a month later counting from now', () => {
    const date = add(new Date(), { months: 1 })
    expect(timean.fromNow(date)).toBe('in 1 month')
  })

  test(`asserts string represents some months later starting from now`, () => {
    var randomInt = getRandomIntInclusive(2, 11)
    const date = add(new Date(), { months: randomInt })
    expect(timean.fromNow(date)).toBe(`in ${randomInt} months`)
  })

  test('asserts string represents a hour ago counting from now', () => {
    const date = sub(new Date(), { hours: 1 })
    expect(timean.fromNow(date)).toBe('1 hour ago')
  })

  test('asserts string represents some hours ago counting from now', () => {
    var randomInt = getRandomIntInclusive(2, 23)
    const date = sub(new Date(), { hours: randomInt })
    expect(timean.fromNow(date)).toBe(`${randomInt} hours ago`)
  })

  test('asserts string represents an hour later counting from now', () => {
    const date = add(new Date(), { hours: 1 })
    expect(timean.fromNow(date)).toBe('in 1 hour')
  })

  test(`asserts string represents some hours later starting from now`, () => {
    var randomInt = getRandomIntInclusive(2, 23)
    const date = add(new Date(), { hours: randomInt })
    expect(timean.fromNow(date)).toBe(`in ${randomInt} hours`)
  })

  test('asserts string represents a minute ago counting from now', () => {
    const date = sub(new Date(), { minutes: 1 })
    expect(timean.fromNow(date)).toBe('1 minute ago')
  })

  test('asserts string represents some minutes ago counting from now', () => {
    var randomInt = getRandomIntInclusive(2, 59)
    const date = sub(new Date(), { minutes: randomInt })
    expect(timean.fromNow(date)).toBe(`${randomInt} minutes ago`)
  })

  test('asserts string represents an minute later counting from now', () => {
    const date = add(new Date(), { minutes: 1 })
    expect(timean.fromNow(date)).toBe('in 1 minute')
  })

  test(`asserts string represents some minutes later starting from now`, () => {
    var randomInt = getRandomIntInclusive(2, 59)
    const date = add(new Date(), { minutes: randomInt })
    expect(timean.fromNow(date)).toBe(`in ${randomInt} minutes`)
  })

  test('asserts string represents a second ago counting from now', () => {
    const date = sub(new Date(), { seconds: 1 })
    expect(timean.fromNow(date)).toBe('1 second ago')
  })

  test('asserts string represents some seconds ago counting from now', () => {
    var randomInt = getRandomIntInclusive(2, 59)
    const date = sub(new Date(), { seconds: randomInt })
    expect(timean.fromNow(date)).toBe(`${randomInt} seconds ago`)
  })

  test('asserts string represents a second later counting from now', () => {
    const date = add(new Date(), { seconds: 1 })
    expect(timean.fromNow(date)).toBe('in 1 second')
  })

  test(`asserts string represents some seconds later starting from now`, () => {
    var randomInt = getRandomIntInclusive(2, 59)
    const date = add(new Date(), { seconds: randomInt })
    expect(timean.fromNow(date)).toBe(`in ${randomInt} seconds`)
  })
})