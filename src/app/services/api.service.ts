import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = '';
  countryJSONUrl: string = '';
  configJSONUrl: string = '';

  constructor(private http: HttpClient) { }

  public getFoodListApi(): Observable<any> {
    return this.http.get<any[]>(this.url + "assets/json/food.json").pipe(
      map(res => res)
    )
  }

  public getDataApi(): Observable<any> {
    return this.http.get<any[]>(this.url + "assets/json/data.json").pipe(
      map(res => res)
    )
  }

}
