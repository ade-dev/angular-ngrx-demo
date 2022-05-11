import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  public endpoint = 'assets/data/countries/region/';

  public handleError(apiCall: string) {
    return (error: HttpErrorResponse): Observable<any> => {
      return throwError(error);
    };
  };

  getCountries(region: string): Observable<Country[]> {
    const url = `${this.endpoint}${region}/index.json`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError('getCountries'))
    );
  };

  constructor(
    private http: HttpClient) { }
}