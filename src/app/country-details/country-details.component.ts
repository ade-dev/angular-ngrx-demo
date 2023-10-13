import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})

export class CountryDetailsComponent implements OnInit {

  @Input() countryDetails: Country | null = null;
  @Input() countryCurrencies: string[] | null = null;
  @Input() selectedOption = '';

  toggleDetails() {
    return (this.selectedOption === '' ||
      this.selectedOption === 'Asia' ||
      this.selectedOption === 'Europe') ? false : true;
  }

  ngOnInit(): void {
    this.selectedOption = '';
  }

}
