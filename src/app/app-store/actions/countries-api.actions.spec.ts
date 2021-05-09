import * as fromCountriesApi from './countries-api.actions';

describe('Countries API actions', () => {

  describe('Get Countries Success action', () => {
    it('Should return the getCountriesSuccess action', () => {
      expect(fromCountriesApi.getCountriesSuccess.type).toBe('[Countries/API] Get Countries Success');
    });
  });

  describe('Get Countries Failure action', () => {
    it('Should return the getCountriesFailure action', () => {
      expect(fromCountriesApi.getCountriesFailure.type).toBe('[Countries/API] Get Countries Failure');
    });
  });
});
