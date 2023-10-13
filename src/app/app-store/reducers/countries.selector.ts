import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCountries from './countries.reducer';
import { AppState } from '../../models/appstate';
import { Country } from '../../models/country';

export interface CountriesState {
    [fromCountries.countriesFeatureKey]: AppState;
}

export const reducers: ActionReducerMap<CountriesState> = {
    [fromCountries.countriesFeatureKey]: fromCountries.countriesReducer
};

export const metaReducers: MetaReducer<CountriesState>[] = !environment.production ? [logger] : [];

// Composing the countries selectors.
export const selectCountriesState = createFeatureSelector<AppState>(
    fromCountries.countriesFeatureKey
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
    selectCountriesState,
    fromCountries.getCountry
);

export const selectCountryCurrencies = createSelector(
    selectCountriesState,
    fromCountries.getCountryCurrencies
);

export const selectRegion = createSelector(
    selectCountriesState,
    fromCountries.getRegion
);

export const selectCountryNames = createSelector(
    selectCountries,
    (selectedCountries: Country[]) => selectedCountries.map((c: Country) => c.name.common).sort()
);

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
