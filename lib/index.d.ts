import { LocaleConfig } from "./utils";
declare class Timean {
    private config?;
    constructor(config?: LocaleConfig | undefined);
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
    from(initialDate: Date, finalDate: Date, config?: LocaleConfig): string | undefined;
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
    fromNow(date: Date, config?: LocaleConfig): string | undefined;
}
declare const _default: {
    create(config?: LocaleConfig | undefined): Timean;
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
    from(initialDate: Date, finalDate: Date, config?: LocaleConfig | undefined): string | undefined;
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
    fromNow(date: Date, config?: LocaleConfig | undefined): string | undefined;
};
export = _default;
