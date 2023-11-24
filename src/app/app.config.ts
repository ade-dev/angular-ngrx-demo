import { ApplicationConfig } from '@angular/core';
import { environment } from '../environments/environment';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CountriesEffects } from '../app/app-store/countries.effects';
import { reducers, metaReducers } from '../app/app-store/reducers/countries.selector';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {

    providers: [
        provideRouter(routes),
        provideStore(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateSerializability: true,
                strictActionSerializability: true,
                strictActionWithinNgZone: true,
                strictActionTypeUniqueness: true,
            }
        }),
        provideEffects([CountriesEffects]),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        !environment.production ? provideStoreDevtools({
            name: 'NgRx Demo App',
            maxAge: 25,
            logOnly: environment.production,
            connectInZone: true
        }) : []
    ]
};