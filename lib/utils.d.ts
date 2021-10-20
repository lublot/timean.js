export declare enum Tense {
    PAST = 0,
    PRESENT = 1,
    FUTURE = 2
}
export declare type Unit = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
export declare type UnitReference = {
    unit: Unit;
    valueInSeconds: number;
};
export declare type StringWithPlural = {
    singular: string;
    plural: string;
};
export declare type LocaleString = string | StringWithPlural;
export declare type LocaleConfig = {
    current?: string;
    replacer: string | RegExp;
    past?: {
        [key in Unit]?: LocaleString;
    };
    future?: {
        [key in Unit]?: LocaleString;
    };
};
export declare function calculateDiff(initialDate: Date, finalDate: Date, customConfig?: LocaleConfig): string | undefined;
export declare function getUnitString(value: number, unit: Unit, tense: Tense, config: LocaleConfig): string | undefined;
