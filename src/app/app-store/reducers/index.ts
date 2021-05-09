import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCountries from './countries.reducer';

export interface CountriesState {
    [fromCountries.countriesFeatureKey]: fromCountries.State;
}

export const reducers: ActionReducerMap<CountriesState> = {
    [fromCountries.countriesFeatureKey]: fromCountries.countriesReducer
};

// console.log all actions
export function logger(reducer: ActionReducer<CountriesState>): ActionReducer<CountriesState> {
    return (state, action) => {
        const result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('prev state', state);
        console.log('action', action);
        console.log('next state', result);
        console.groupEnd();
        return result;
    };
}

export const metaReducers: MetaReducer<CountriesState>[] = !environment.production ? [logger] : [];

// Composing the countries reducer's selectors.
export const selectCountriesState = createFeatureSelector<fromCountries.State>(
    fromCountries.countriesFeatureKey
);

export const selectCountriesEntitiesState = createSelector(
    selectCountriesState,
    (state) => state
);

export const selectCountriesError = createSelector(
    selectCountriesState,
    fromCountries.getError
);

export const selectCountries = createSelector(
    selectCountriesState,
    fromCountries.getCountries
);

export const selectSelectedCountry = createSelector(
    selectCountriesEntitiesState,
    fromCountries.getCountry
);

export const selectCountryCurrencies = createSelector(
    selectCountriesEntitiesState,
    fromCountries.getCountryCurrencies
);

export const selectRegions = createSelector(
    selectCountriesState,
    fromCountries.getRegions
);

export const selectRegion = createSelector(
    selectCountriesState,
    fromCountries.getRegion
);
