import { createAction, props } from '@ngrx/store';

export const getCountries = createAction(
  '[Countries/API] Get Countries',
  props<{ region: string; }>()
);
