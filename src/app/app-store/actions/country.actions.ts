import { createAction, props } from '@ngrx/store';

export const getCountry = createAction(
  '[Country details page] Get Country',
  props<{ name: string; }>()
);

export const getCountryCurrencies = createAction(
  '[Country details page] Get Country Currencies'
);




