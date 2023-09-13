import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  private apiUrl = 'https://en.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) { }

  search(query: string) {
    // const params = {
    //   action: 'query',
    //   format: 'json',
    //   list: 'search',
    //   utf8: '1',
    //   srsearch: query,
    //   origin: '*'
      
    // };

   
    // return this.http.get(this.apiUrl, { params });
    return this.http.get (`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${query}&origin=*`)
  }  
             
}
