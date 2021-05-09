export interface Country {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: any;
    timezones: string[];
    borders: any[];
    nativeName: string;
    numericCode: string;
    currencies: Currency[];
    languages: string[];
    translations: object;
    flag: string;
    regionalBlocs: string[];
    cioc: string;
}

export interface Currency {
    code: string;
    name: string;
    symbol: string;
}