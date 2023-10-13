import { Country } from './country';
export interface AppState {
    region: string;
    countries: Country[];
    currencies: string[];
    country: Country;
    error: string;
}
