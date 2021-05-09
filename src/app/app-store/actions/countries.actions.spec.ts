import * as fromCountries from './countries.actions';

describe('Countries actions', () => {
  it('Should return the getCountries action', () => {
    expect(fromCountries.getCountries.type).toBe('[Countries/API] Get Countries');
  });
});
