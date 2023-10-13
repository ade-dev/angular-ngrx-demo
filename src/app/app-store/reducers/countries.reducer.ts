import { createReducer, on } from '@ngrx/store';
import { CountriesActions, CountriesApiActions, CountryActions } from '../actions';
import { Country, Currency } from '../../models/country';
import { AppState } from '../../models/appstate';

export const countriesFeatureKey = 'countries';

export const initialState: AppState = {
  region: '',
  countries: [],
  country: {} as Country,
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
      country: state.countries.find((country) => country.name.common === name) as Country
    };
  }),
  on(CountryActions.getCountryCurrencies, (state) => {
    return {
      ...state,
      currencies: Object.values(state.country.currencies).map((currency: Currency) => currency.name)
    };
  })
);

export const getError = (state: AppState) => state.error;
export const getCountries = (state: AppState) => state.countries;
export const getRegion = (state: AppState) => state.region;
export const getCountry = (state: AppState) => state.country;
export const getCountryCurrencies = (state: AppState) => state.currencies;