import { calculateDiff, LocaleConfig } from "./utils"

class Timean {
  constructor(private config?: LocaleConfig) {}

  /**
   * Calculates the difference between two dates.
   * 
   * @example timean.from(new Date('2021-10-15'), new Date('2021-10-16'))
   * 
   * @example timean.from(new Date('2021-10-15'), new Date('2021-10-16'), { day: 'days ago' })
   * 
   * @param initialDate - Initial reference date
   * @param finalDate - Final reference date
   * @param config - The optional locale configuration
   * 
   * @returns the string that represents the time difference
   */
  from(initialDate: Date, finalDate: Date, config?: LocaleConfig) {
    return calculateDiff(initialDate, finalDate, config || this.config)
  }

  /**
   * Calculates the difference between a given date and the current time.
   * 
   * @example timean.from(new Date('2021-10-15'), new Date('2021-10-16'))
   * 
   * @example timean.from(new Date('2021-10-15'), new Date('2021-10-16'), { day: 'days ago' })
   * 
   * @param date - The reference date
   * @param config - The optional locale configuration
   * 
   * @returns the string that represents the time difference
   */
  fromNow(date: Date, config?: LocaleConfig) {
    return calculateDiff(new Date(), date, config || this.config)
  }
}

export = {
  create(config?: LocaleConfig) {
    return new Timean(config)
  },
  /**
   * Calculates the difference between two dates.
   * 
   * @example timean.from(new Date('2021-10-15'), new Date('2021-10-16'))
   * 
   * @example timean.from(new Date('2021-10-15'), new Date('2021-10-16'), { day: 'days ago' })
   * 
   * @param initialDate - Initial reference date
   * @param finalDate - Final reference date
   * @param config - The optional locale configuration
   * 
   * @returns the string that represents the time difference
   */
  from(initialDate: Date, finalDate: Date, config?: LocaleConfig) {
    return calculateDiff(initialDate, finalDate, config)
  },

  /**
   * Calculates the difference between a given date and the current time.
   * 
   * @example timean.from(new Date('2021-10-15'), new Date('2021-10-16'))
   * 
   * @example timean.from(new Date('2021-10-15'), new Date('2021-10-16'), { day: 'days ago' })
   * 
   * @param date - The reference date
   * @param config - The optional locale configuration
   * 
   * @returns the string that represents the time difference
   */
  fromNow(date: Date, config?: LocaleConfig) {
    return calculateDiff(new Date(), date, config)
  }
}