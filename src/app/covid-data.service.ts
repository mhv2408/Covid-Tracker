import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(private http: HttpClient) { }

  getDailyDataByState(state: string): Observable<any> {
    return this.http.get(`https://api.covidtracking.com/v1/states/${state}/daily.json`);
  }
}
