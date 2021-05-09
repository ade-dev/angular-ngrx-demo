import * as fromCountry from './country.actions';

describe('Country actions', () => {

  describe('GetCountry actions', () => {
    it('Should return the getCountry action', () => {
      expect(fromCountry.getCountry.type).toBe('[Country details page] Get Country');
    });
  });

  describe('Get Country Currencies', () => {
    it('Should return the getCountryCurrencies action', () => {
      expect(fromCountry.getCountryCurrencies.type).toBe('[Country details page] Get Country Currencies');
    });
  });
});
