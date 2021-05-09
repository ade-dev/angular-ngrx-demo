import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CountriesActions, CountriesApiActions } from './actions';
import { CountriesService } from '../services/countries.service';
import { Country } from '../models/country';


@Injectable()
export class CountriesEffects {

  countries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountriesActions.getCountries),
      switchMap(
        ({ region }) => {
          return this.countriesService.getCountries(region).pipe(
            map((countries: Country[]) => {
              return CountriesApiActions.getCountriesSuccess({ countries });
            }),
            catchError((err) =>
              of(CountriesApiActions.getCountriesFailure({ errorMsg: err.message }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private countriesService: CountriesService
  ) { }

}