import { defaultConfig } from "./config"

export enum Tense { PAST, PRESENT, FUTURE }
export type Unit = 'year'|'month'|'day'|'hour'|'minute'|'second'
export type UnitReference = { unit: Unit, valueInSeconds: number }
export type StringWithPlural = { singular: string; plural: string; }
export type LocaleString = string | StringWithPlural
export type LocaleConfig = { 
  current?: string,
  replacer: string|RegExp,
  past?: { [key in Unit] ?: LocaleString }, 
  future?: { [key in Unit] ?: LocaleString } 
}

export function calculateDiff(initialDate: Date, finalDate: Date, customConfig?: LocaleConfig) {
  const timeDiff = finalDate.getTime() - initialDate.getTime();
  const tense = timeDiff === 0 ? Tense.PRESENT : timeDiff < 0 ? Tense.PAST : Tense.FUTURE;
  const diffInSeconds = Math.floor(Math.abs(timeDiff) / 1000)
  const config = { ...defaultConfig, ...customConfig } as LocaleConfig
  const unitReferences = [
    { unit: 'year', valueInSeconds: 31536000 },
    { unit: 'month', valueInSeconds: 2592000 },
    { unit: 'day', valueInSeconds: 86400 },
    { unit: 'hour', valueInSeconds: 3600 },
    { unit: 'minute', valueInSeconds: 60 },
    { unit: 'second', valueInSeconds: 1 }
  ] as Array<UnitReference>
  const result = unitReferences.find((reference: UnitReference) => {
    return Math.floor(diffInSeconds / reference.valueInSeconds) >= 1
  })
  
  const timeValue = Math.floor(diffInSeconds / (result?.valueInSeconds || 1))
  return getUnitString(timeValue, result?.unit || 'second', tense, config)
}

export function getUnitString(value: number, unit: Unit, tense: Tense, config: LocaleConfig) {
  if (tense === Tense.PRESENT) {
    return `${config.current}`.replace(config.replacer, value.toString())
  } else if (tense === Tense.PAST && config.past) {
    if (typeof config.past[unit] === 'string') {
      return `${config.past[unit]}`.replace(config.replacer, value.toString())
    }
    const { singular, plural } = config.past[unit] as StringWithPlural
    return `${value === 1 ?  singular : plural }`.replace(config.replacer, value.toString())
  } else if (tense === Tense.FUTURE && config.future) {
    if (typeof config.future[unit] === 'string') {
      return `${config.future[unit]}`.replace(config.replacer, value.toString())
    }
    const { singular, plural } = config.future[unit] as StringWithPlural
    return `${value === 1 ?  singular : plural }`.replace(config.replacer, value.toString())
  }
}

