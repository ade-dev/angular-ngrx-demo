import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Country } from '../models/country';
import * as fromCountries from '../app-store/reducers/countries.selector';
import { CountryActions, CountriesActions } from '../app-store/actions';
import { AsyncPipe } from '@angular/common';
import { CountryDetailsComponent } from '../country-details/country-details.component';
import { CountriesSelectComponent } from '../countries-select/countries-select.component';

@Component({
  selector: 'app-countries-container',
  standalone: true,
  imports: [CountriesSelectComponent, CountryDetailsComponent, AsyncPipe],
  templateUrl: './countries-container.component.html',
  styleUrls: ['./countries-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CountriesContainerComponent {

  constructor(private store: Store) { }

  regions$ = of(['Asia', 'Europe']);
  countries$: Observable<string[]> | null = null;
  currentCountry$: Observable<Country> | null = null;
  countryCurrencies$: Observable<string[]> | null = null;
  currentOption = '';

  getCurrentOption(option: string) {
    if (option !== 'Asia' && option !== 'Europe' && option !== '') {
      this.getCountryDetails(option);
      this.getCurrencies();
    }
    else {
      this.getAllCountries(option);
    }
    this.currentOption = option;
  }

  getAllCountries(region: string) {
    this.store.dispatch(CountriesActions.getCountries({ region }));
    this.countries$ = this.store.select(fromCountries.selectCountryNames);
  }

  getCountryDetails(name: string) {
    this.store.dispatch(CountryActions.getCountry({ name }));
    this.currentCountry$ = this.store.select(fromCountries.selectSelectedCountry);
  }

  getCurrencies() {
    this.store.dispatch(CountryActions.getCountryCurrencies());
    this.countryCurrencies$ = this.store.select(fromCountries.selectCountryCurrencies);
  }
}
