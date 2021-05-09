import { createAction, props } from '@ngrx/store';
import { Country } from '../../models/country';

export const getCountriesSuccess = createAction(
  '[Countries/API] Get Countries Success',
  props<{ countries: Country[]; }>()
);

export const getCountriesFailure = createAction(
  '[Countries/API] Get Countries Failure',
  props<{ errorMsg: string; }>()
);




