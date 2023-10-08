import { Region } from './region';
import { Country } from './country';
export interface State {
    regions: Region[];
    region: string;
    countries: Country[];
    currencies: string[];
    country: Country;
    error: string;
}
