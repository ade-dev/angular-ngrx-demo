import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { CountriesService } from './countries.service';
import { Country } from '../models/country';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CountriesService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let mockCountriesService: CountriesService;

  beforeEach(() => {
    // Configuring testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountriesService]

    });
    // instantiating HttpClient, HttpTestingController and CountriesService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    mockCountriesService = TestBed.inject(CountriesService);
  });

  // Dummy data to be returned by request
  const expCountries = <Country[]>[
    {
      name: 'Belgium',
      capital: "Brussels",
      flag: "be.svg",
      currencies: [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ]
    },
    {
      name: 'Belarus',
      capital: "Minsk",
      flag: "by.svg",
      currencies: [
        {
          "code": "BYN",
          "name": "New Belarusian ruble",
          "symbol": "Br"
        },
        {
          "code": "BYR",
          "name": "Old Belarusian ruble",
          "symbol": "Br"
        }
      ]
    }
  ];

  let queryKey = 'Europe';

  it('Should call the getCountries api and return the dummy countries', () => {
    mockCountriesService.getCountries(queryKey).subscribe(
      users => {
        expect(users.length).toBe(2);
        expect(users).toEqual(expCountries, 'should return dummy countries'), fail;
      });

    const req = httpTestingController.expectOne(`${mockCountriesService.endpoint}${queryKey}/index.json`);
    expect(req.request.method).toEqual('GET');
  });

});
