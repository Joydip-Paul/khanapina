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

  constructor(private http: HttpClient) {
    this.url = '/assets/json/';
   }

  public getFoodListApi(): Observable<any> {
    return this.http.get<any[]>(this.url + "food.json").pipe(
      map(res => res)
    )
  }


  public getFoodDetails(id: any): any {
    return this.http.get<any[]>(this.url + 'food.json')
    .pipe(map((food: any) => 
    food.find((p: any) => {
      // console.log(p, 'details');
      return p.id === id;
    })));
    
  }


  public getDataApi(): Observable<any> {
    return this.http.get<any[]>(this.url + "data.json").pipe(
      map(res => res)
    )
  }

}
