import { Name } from './name';
export interface Country {
    name: Name;
    capital: string[];
    currencies: Currency[];
    flags: ImgSrc;
    population?: number;
    region?: string;
    coatOfArms?: ImgSrc;
}

export interface Currency {
    name: string;
    symbol: string;
}

interface ImgSrc {
    png: string;
    svg: string;
    alt?: string;
}
