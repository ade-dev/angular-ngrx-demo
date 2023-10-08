import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from '../app/app-store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountriesContainerComponent } from './countries-container/countries-container.component';
import { CountriesEffects } from './app-store/countries.effects';
import { CountriesSelectComponent } from './countries-select/countries-select.component';
import { ListCommasPipe } from './pipes/list-commas.pipe';
import { CountryCurrenciesComponent } from './country-currencies/country-currencies.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    CountriesContainerComponent,
    CountriesSelectComponent,
    ListCommasPipe,
    CountryCurrenciesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      maxAge: 25, logOnly: environment.production
    }) : [],

    EffectsModule.forRoot([CountriesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
