import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country';
import { CountryCurrenciesComponent } from '../country-currencies/country-currencies.component';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [NgIf, MatCardModule, CountryCurrenciesComponent],
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
