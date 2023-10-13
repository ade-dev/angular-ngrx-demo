import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { CountriesService } from './countries.service';
import { Country } from '../models/country';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CountriesService', () => {
  let httpTestingController: HttpTestingController;
  let mockCountriesService: CountriesService;

  beforeEach(() => {
    // Configuring testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountriesService]

    });
    // instantiating HttpClient, HttpTestingController and CountriesService
    TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    mockCountriesService = TestBed.inject(CountriesService);
  });

  // Dummy data to be returned by request
  const expCountries = <Country[]> [
    {
      name: { "common": "Belgium" },
      capital: ["Brussels"],
      flags: { "png": "be.png", "svg": "be.svg" },
      currencies: [{ "name": "Euro", "symbol": "€" }]
    },
    {
      name: { "common": "Belarus" },
      capital: ["Minsk"],
      flags: { "png": "by.png", "svg": "b.svg" },
      currencies: [{ "name": "Belarusian ruble", "symbol": "Br" }]
    }
  ];

  const queryKey = 'Europe';

  it('Should call the getCountries api and return the dummy countries', () => {
    mockCountriesService.getCountries(queryKey).subscribe(
      users => {
        expect(users.length).toBe(2);
        expect(users).toEqual(expCountries);
      });

    const req = httpTestingController.expectOne(`${mockCountriesService.endpoint}${queryKey}`);
    expect(req.request.method).toEqual('GET');
  });

});
