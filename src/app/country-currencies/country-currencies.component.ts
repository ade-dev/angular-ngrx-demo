import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-currencies',
  templateUrl: './country-currencies.component.html',
  styleUrls: ['./country-currencies.component.css']
})
export class CountryCurrenciesComponent {

  @Input() countryCurrencies!: string[] | null;

}
