import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomuserService {

 
constructor(private http: HttpClient) {}

getRandomUsers(count: number) {
  return this.http.get(`https://randomuser.me/api/?results=${count}`);
}
}

