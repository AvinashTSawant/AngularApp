import { HttpClient, HttpParams } from '@angular/common/http';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private apiKey = '3oPlhqeTpQyKaG7E7Y3oij8lZWWnWGzJ';
  private baseUrl = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  // search1(query: string) {
  // // search1() {  
  //    return this.http.get (`https://api.giphy.com/v1/gifs/search?api_key=jd3PQeuBA7xplOtAWRYiUIdlYAMwIKif&q=${query}`)
  //   // return this.http.get (`https://api.giphy.com/v1/gifs/search?api_key=jd3PQeuBA7xplOtAWRYiUIdlYAMwIKif&q=hi`)

  // }  
  // tranding(){
  //   return this.http.get (`https://api.giphy.com/v1/gifs/trending?api_key=jd3PQeuBA7xplOtAWRYiUIdlYAMwIKi`);
  // }

  tranding(): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      
    return this.http.get(`${this.baseUrl}/trending`, { params });
  }

  search1(query): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
     
    return this.http.get(`${this.baseUrl}/search`, { params });
  }
}
