import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})

export class CountryDetailsComponent implements OnInit {

  @Input() countryDetails!: Country | null;
  @Input() countryCurrencies!: string[] | null;
  @Input() selectedOption = '';

  assetsUrl = 'https://www.clade.co.uk/assets/images/flags/';

  toggleDetails() {
    return (this.selectedOption === '' ||
      this.selectedOption === 'Asia' ||
      this.selectedOption === 'Europe') ? false : true;
  }

  ngOnInit(): void {
    this.selectedOption = '';
  }

}
