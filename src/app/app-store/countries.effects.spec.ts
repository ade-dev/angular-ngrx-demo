import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CountriesActions, CountriesApiActions } from './actions';
import { CountriesEffects } from './countries.effects';
import { Country } from '../models/country';
import { CountriesService } from '../services/countries.service';


describe('CountriesEffects', () => {
  let actions$: Observable<Actions>;
  let effects: CountriesEffects;
  let countriesService: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CountriesEffects, {
          provide: CountriesService
        },
        provideMockActions(() => actions$)
      ]
    });
    countriesService = TestBed.inject(CountriesService);
    effects = TestBed.inject(CountriesEffects);
    actions$ = TestBed.inject(Actions);

  });

  describe('countries$', () => {
    it('Should return Countries.getCountriesSuccess, with the countries, on success', () => {
      const countries = <Country[]> [
        {
          name: { "common": "Belgium" },
          capital: ["Brussels"],
          flags: { "png": "be.png", "svg": "be.svg" },
          currencies: [{ "name": "Euro", "symbol": "€" }]
        },
        {
          name: { "common": "Belarus" },
          capital: ["Minsk"],
          flags: { "png": "by.png", "svg": "b.svg" },
          currencies: [{ "name": "Belarusian ruble", "symbol": "Br" }],
        }
      ];

      const action = CountriesActions.getCountries({ region: 'region' });
      const completion = CountriesApiActions.getCountriesSuccess({ countries });

      actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: countries });
      const expected = cold('--c', { c: completion });

      spyOn(countriesService, 'getCountries').and.returnValue(response);
      expect(effects.countries$).toBeObservable(expected);
    });

    it('Should return Countries.getCountriesFailure, with error message, if an error is thrown', () => {
      const error = { message: 'Unexpected error. Try again later.' };

      const action = CountriesActions.getCountries({ region: 'region' });
      const completion = CountriesApiActions.getCountriesFailure({ errorMsg: error.message });

      actions$ = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--c', { c: completion });
      spyOn(countriesService, 'getCountries').and.returnValue(response);

      expect(effects.countries$).toBeObservable(expected);
    });
  });
});
