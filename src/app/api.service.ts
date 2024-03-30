import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Themealdb } from '../app/themealdb'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  getRandomMeal(id:number): Observable<{ meals: Themealdb[] }> {
    return this.http.get<{ meals: Themealdb[] }>(this.apiUrl + 'Themealdb/' + id);
  }
  /*searchMealByName(name:string): Observable<Themealdb> {
    return this.http.get<Themealdb>(this.apiUrl + "search.php?s="+ name);
  }*/
  searchMealByName(name: string): Observable<Themealdb> {
    return this.http.get<Themealdb>(`${this.apiUrl}/search.php?s=${name}`).pipe(
      catchError(error => {
        console.error('Error fetching data: ', error);
        return throwError(() => new Error('Error fetching data'));
      })
    );
  }
  
}