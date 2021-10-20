import { LocaleConfig } from "./utils";

export const defaultConfig: LocaleConfig = {
  current: "just now",
  replacer: "%d",
  past: {
    day: { singular: '%d day ago', plural: '%d days ago'},
    hour: { singular: '%d hour ago', plural: '%d hours ago' },
    minute: { singular: '%d minute ago', plural: '%d minutes ago' },
    month: { singular: '%d month ago', plural: '%d months ago' }, 
    second: { singular: '%d second ago', plural: '%d seconds ago' },
    year: { singular: '%d year ago', plural: '%d years ago' },
  }, 
  future: {
    day: { singular: 'in %d day', plural: 'in %d days'},
    hour: { singular: 'in %d hour', plural: 'in %d hours' },
    minute: { singular: 'in %d minute', plural: 'in %d minutes' },
    month: { singular: 'in %d month', plural: 'in %d months' }, 
    second: { singular: 'in %d second', plural: 'in %d seconds' },
    year: { singular: 'in %d year', plural: 'in %d years' },
  }
}