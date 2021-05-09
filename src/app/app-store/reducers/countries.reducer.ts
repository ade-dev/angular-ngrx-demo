import { Action, createReducer, on } from '@ngrx/store';
import { CountriesActions, CountriesApiActions, CountryActions } from '../actions';
import { Region } from '../../models/region';
import { Country, Currency } from '../../models/country';

export const countriesFeatureKey = 'countries';

export interface State {
  regions: Region[];
  region: string;
  countries: Country[];
  currencies: string[];
  country: any;
  error: string;
}

export const initialState: State = {
  regions: [{ 'name': 'Europe' }, { 'name': 'Asia' }],
  region: '',
  countries: [],
  country: {},
  currencies: [],
  error: ''
};

export const countriesReducer = createReducer(
  initialState,
  on(CountriesActions.getCountries, (state, { region }) => {
    return {
      ...state,
      error: '',
      region
    };
  }),
  on(CountriesApiActions.getCountriesSuccess, (state, { countries }) => {
    return {
      ...state,
      error: '',
      countries,
      region: state.region,
    };
  }),
  on(CountriesApiActions.getCountriesFailure, (state, { errorMsg }) => {
    return {
      ...state,
      error: errorMsg
    };
  }),
  on(CountryActions.getCountry, (state, { name }) => {
    return {
      ...state,
      error: '',
      country: state.countries.find((country) => country.name === name)
    };
  }),
  on(CountryActions.getCountryCurrencies, (state) => {
    return {
      ...state,
      error: '',
      country: state.country,
      currencies: state.country.currencies.map((currency: Currency) => currency.name)
    };
  })
);

export const getError = (state: State) => state.error;
export const getCountries = (state: State) => state.countries;
export const getRegions = (state: State) => state.regions;
export const getRegion = (state: State) => state.region;
export const getCountry = (state: State) => state.country;
export const getCountryCurrencies = (state: State) => state.currencies;