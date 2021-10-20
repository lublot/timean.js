import { add, sub } from 'date-fns'
import timean from '..';
import { LocaleConfig } from '../src/utils';

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const localeWithPlural: LocaleConfig = {
  current: 'agora',
  replacer: '%d',
  past: {
    day: { singular: '%d dia atrás', plural: '%d dias atrás' },
    minute: { singular: '%d minuto atrás', plural: '%d minutos atrás' },
    hour: { singular: '%d hora atrás', plural: '%d horas atrás' },
    month: { singular: '%d mês atrás', plural: '%d meses atrás' },
    second: { singular: '%d segundo atrás', plural: '%d segundos atrás' },
    year: { singular: '%d ano atrás', plural: '%d anos atrás' }
  },
  future: {
    day: { singular: 'em %d dia', plural: 'em %d dias' },
    minute: { singular: 'em %d minuto', plural: 'em %d minutos' },
    hour: { singular: 'em %d hora', plural: 'em %d horas' },
    month: { singular: 'em %d mês', plural: 'em %d meses' },
    second: { singular: 'em %d segundo', plural: 'em %d segundos' },
    year: { singular: 'em %d ano', plural: 'em %d anos' }
  }
}

describe('Check if strings are translated with singular and plural', () => {
  test('asserts string is translated for a single year', () => {
    const date = sub(new Date(), { years: 1 })
    expect(timean.fromNow(date, localeWithPlural)).toBe('1 ano atrás')
  })

  test('asserts string is translated for some years ago', () => {
    var randomInt = getRandomIntInclusive(2, 1000)
    const date = sub(new Date(), { years: randomInt })
    expect(timean.fromNow(date, localeWithPlural)).toBe(`${randomInt} anos atrás`)
  })

  test('asserts string is translated for an year later', () => {
    const date = add(new Date(), { years: 1 })
    expect(timean.fromNow(date, localeWithPlural)).toBe('em 1 ano')
  })

  test(`asserts string is translated for some years later`, () => {
    var randomInt = getRandomIntInclusive(2, 1000)
    const date = add(new Date(), { years: randomInt })
    expect(timean.fromNow(date, localeWithPlural)).toBe(`em ${randomInt} anos`)
  })

  test('asserts string is translated for a month ago', () => {
    const date = sub(new Date(), { months: 1 })
    expect(timean.fromNow(date, localeWithPlural)).toBe('1 mês atrás')
  })

  test('asserts string is translated for some months ago', () => {
    var randomInt = getRandomIntInclusive(2, 11)
    const date = sub(new Date(), { months: randomInt })
    expect(timean.fromNow(date, localeWithPlural)).toBe(`${randomInt} meses atrás`)
  })

  test('asserts string is translated for a month later', () => {
    const date = add(new Date(), { months: 1 })
    expect(timean.fromNow(date, localeWithPlural)).toBe('em 1 mês')
  })

  test(`asserts string is translated for some months later`, () => {
    var randomInt = getRandomIntInclusive(2, 11)
    const date = add(new Date(), { months: randomInt })
    expect(timean.fromNow(date, localeWithPlural)).toBe(`em ${randomInt} meses`)
  })

  test('asserts string is translated for a hour ago', () => {
    const date = sub(new Date(), { hours: 1 })
    expect(timean.fromNow(date, localeWithPlural)).toBe('1 hora atrás')
  })

  test('asserts string is translated for some hours ago', () => {
    var randomInt = getRandomIntInclusive(2, 23)
    const date = sub(new Date(), { hours: randomInt })
    expect(timean.fromNow(date, localeWithPlural)).toBe(`${randomInt} horas atrás`)
  })

  test('asserts string is translated for an hour later', () => {
    const date = add(new Date(), { hours: 1 })
    expect(timean.fromNow(date, localeWithPlural)).toBe('em 1 hora')
  })

  test(`asserts string is translated for some hours later`, () => {
    var randomInt = getRandomIntInclusive(2, 23)
    const date = add(new Date(), { hours: randomInt })
    expect(timean.fromNow(date, localeWithPlural)).toBe(`em ${randomInt} horas`)
  })

  test('asserts string is translated for a minute ago', () => {
    const date = sub(new Date(), { minutes: 1 })
    expect(timean.fromNow(date, localeWithPlural)).toBe('1 minuto atrás')
  })

  test('asserts string is translated for some minutes ago', () => {
    var randomInt = getRandomIntInclusive(2, 59)
    const date = sub(new Date(), { minutes: randomInt })
    expect(timean.fromNow(date, localeWithPlural)).toBe(`${randomInt} minutos atrás`)
  })

  test('asserts string is translated for an minute later', () => {
    const date = add(new Date(), { minutes: 1 })
    expect(timean.fromNow(date, localeWithPlural)).toBe('em 1 minuto')
  })

  test(`asserts string is translated for some minutes later`, () => {
    var randomInt = getRandomIntInclusive(2, 59)
    const date = add(new Date(), { minutes: randomInt })
    expect(timean.fromNow(date, localeWithPlural)).toBe(`em ${randomInt} minutos`)
  })

  test('asserts string is translated for a second ago', () => {
    const date = sub(new Date(), { seconds: 1 })
    expect(timean.fromNow(date, localeWithPlural)).toBe('1 segundo atrás')
  })

  test('asserts string is translated for some seconds ago', () => {
    var randomInt = getRandomIntInclusive(2, 59)
    const date = sub(new Date(), { seconds: randomInt })
    expect(timean.fromNow(date, localeWithPlural)).toBe(`${randomInt} segundos atrás`)
  })

  test('asserts string is translated for a second later', () => {
    const date = add(new Date(), { seconds: 1 })
    expect(timean.fromNow(date, localeWithPlural)).toBe('em 1 segundo')
  })

  test(`asserts string is translated for some seconds later`, () => {
    var randomInt = getRandomIntInclusive(2, 59)
    const date = add(new Date(), { seconds: randomInt })
    expect(timean.fromNow(date, localeWithPlural)).toBe(`em ${randomInt} segundos`)
  })

  test(`asserts string is translated for now`, () => {
    const now = new Date()
    expect(timean.fromNow(now, localeWithPlural)).toBe('agora')
  })
})