import * as fromReducer from './countries.reducer';
import * as fromActions from '../actions';
import { Country } from '../../models/country';

describe('Countries Reducer', () => {
  let countries = <Country[]>[
    {
      name: 'Belgium', capital: "Brussels", flag: "be.svg", currencies: [
        { "code": "EUR", "name": "Euro", "symbol": "€" }
      ]
    },
    {
      name: 'Belarus', capital: "Minsk", flag: "by.svg", currencies: [
        { "code": "BYN", "name": "New Belarusian ruble", "symbol": "Br" },
        { "code": "BYR", "name": "Old Belarusian ruble", "symbol": "Br" }
      ]
    }
  ];

  let country = countries[1];

  const { initialState } = fromReducer;

  describe('Default state', () => {
    it('Should return the default state', () => {
      const action = {} as any;
      const state = fromReducer.countriesReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('Get countries success action', () => {
    it('Should return a new state with an array of countries', () => {
      const action = fromActions.CountriesApiActions.getCountriesSuccess({ countries });
      const state = fromReducer.countriesReducer(initialState, action);

      expect(state.error).toEqual('');
      expect(state.countries).toEqual(countries);
    });
  });

  describe('Get countries failure action', () => {
    it('Should return an error message and an empty countries array', () => {
      const error = { message: 'Unexpected Error. Try again later.' };
      const action = fromActions.CountriesApiActions.getCountriesFailure({ errorMsg: error.message });
      const previousState = { ...initialState, error: '' };
      const state = fromReducer.countriesReducer(previousState, action);

      expect(state.error).toEqual(error.message);
      expect(state.countries).toEqual([]);
    });
  });

  describe('Get Country action', () => {
    it('Should return a new state with the selected country', () => {
      const action = fromActions.CountryActions.getCountry({ name: 'Belarus' });
      const previousState = { ...initialState, error: '', countries };
      const state = fromReducer.countriesReducer(previousState, action);

      expect(state.error).toEqual('');
      expect(state.country).toEqual(countries[1]);
    });
  });

  describe("Get currencies action", () => {
    it("Should return a new state with the selected country's currencies", () => {
      const action = fromActions.CountryActions.getCountryCurrencies();
      const previousState = { ...initialState, error: '', countries, country };
      const state = fromReducer.countriesReducer(previousState, action);

      expect(state.error).toEqual('');
      expect(state.currencies).toEqual(['New Belarusian ruble', 'Old Belarusian ruble']);
    });
  });
});
