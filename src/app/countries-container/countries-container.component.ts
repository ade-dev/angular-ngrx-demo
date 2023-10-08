import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Region } from '../models/region';
import { Country } from '../models/country';
import * as fromCountries from '../app-store/reducers';
import { CountryActions, CountriesActions } from '../app-store/actions';

@Component({
  selector: 'app-countries-container',
  templateUrl: './countries-container.component.html',
  styleUrls: ['./countries-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CountriesContainerComponent {

  constructor(private store: Store) {
    this.regions$ = store.select(fromCountries.selectRegions);
  }

  regions$: Observable<Region[]>;
  countries$!: Observable<Country[]>;
  currentCountry$!: Observable<Country>;
  countryCurrencies$!: Observable<string[]>;
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
    this.countries$ = this.store.select(fromCountries.selectCountries);
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
