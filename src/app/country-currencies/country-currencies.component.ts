import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-currencies',
  templateUrl: './country-currencies.component.html',
  styleUrls: ['./country-currencies.component.css']
})
export class CountryCurrenciesComponent implements OnInit {

  constructor() { }

  @Input() countryCurrencies: string[] = [];

  ngOnInit(): void {
  }

}
