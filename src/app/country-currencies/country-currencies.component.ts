import { Component, Input } from '@angular/core';
import { ListCommasPipe } from '../pipes/list-commas.pipe';

@Component({
  selector: 'app-country-currencies',
  standalone: true,
  imports: [ListCommasPipe],
  templateUrl: './country-currencies.component.html',
  styleUrls: ['./country-currencies.component.css']
})
export class CountryCurrenciesComponent {

  @Input() countryCurrencies!: string[] | null;

}
