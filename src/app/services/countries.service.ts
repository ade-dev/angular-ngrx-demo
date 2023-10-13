import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  public endpoint = 'https://restcountries.com/v3.1/region/';

  public handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error);
    return throwError(() => new Error(`Please try again later.`));
  }

  getCountries(region: string): Observable<Country[]> {
    const url = `${this.endpoint}${region}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  constructor(
    private http: HttpClient) { }
}
