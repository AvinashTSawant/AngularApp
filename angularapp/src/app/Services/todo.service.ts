import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl='http://localhost:3000/todos';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  // constructor(private _httpClinet: HttpClient) { }
  constructor(private httpClinet: HttpClient) { }

  // create post request
//   create(data: any): Observable<any> {
//     let API_URL = `${this.apiUrl}`;
//    // we are sending http post request to server i.e 3000
//    // rersponse Observable
//    return this._httpClinet.post(API_URL, data);
//   }

//   list() {
//    return this._httpClinet.get(this.apiUrl);
//   }

// update(id: any, data: any) : Observable<any> {
//   let API_URL = `${this.apiUrl}/${id}`;

//   return this._httpClinet.put(API_URL, data);

// }

// deleteTodo(id: any) : Observable<any> {
//   let API_URL = `${this.apiUrl}/${id}`;

//   return this._httpClinet.delete(API_URL);
// }

create(data: any) : Observable<any> {
  let API_URL = `${this.apiUrl}`;
  // we are sending http post request to server i.e 3000
  // response Observable
  return this.httpClinet.post(API_URL, data);
  }
  // read - get
  list() {
  return this.httpClinet.get(`${this.apiUrl}`);
  }
  // update- put / patch
  update(id: any, data: any) : Observable<any> {
  let API_URL = `${this.apiUrl}/${id}`;
  return this.httpClinet.put(API_URL, data, { headers:this.headers});
  }
  delete(id: any) : Observable<any>{
  let API_URL = `${this.apiUrl}/${id}`;
  return this.httpClinet.delete(API_URL);
  }


  }

