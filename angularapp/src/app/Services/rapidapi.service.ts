import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
  // apiUrlMarket= 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=AMD,IBM,AAPL';
  
  apiUrlMarket= environment.webAPIUrl;
  apiUrlMovers= 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers?region=us&lang=en-US&start=0&count=6';

  // url = 'https://pizza-and-desserts.p.rapidapi.com/pizzas'

  // url = 'https://the-cocktail-db3.p.rapidapi.com/';

  constructor(private _httpClient: HttpClient) { }

  GetYahooFinance() {
    let headers = new HttpHeaders({
      
      'X-RapidAPI-Key': '9b806c102emshddc858756e4325bp182ac5jsn590f1e4b256a',
       'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'



    //   'X-RapidAPI-Key': 'a739865acfmshfc65f3022e13bf7p1b947ejsnf998cffa1fc2',
    // 'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
     
    // 'X-RapidAPI-Key': 'a739865acfmshfc65f3022e13bf7p1b947ejsnf998cffa1fc2',
    // 'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'

    })
   return this._httpClient.get(this.url, {headers: headers});
  }


  // getDataFormMarket(): Observable<any>
  // {
  //   // let marketHeaders = new HttpHeaders({
  //   //   'X-RapidAPI-Key': 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177',
  //   //    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  //   // })
  //   // return this._httpClient.get(this.apiUrlMarket, { headers: marketHeaders});
  //   return this._httpClient.get(this.apiUrlMarket);

  // }


  getDataFormMarket(region: string, symbols: string): Observable<any>
  {
    return this._httpClient.get(`${this.apiUrlMarket}get-quotes`, { 
      params: {
        region: region,
        symbols: symbols
      }
    });
  }

  getMovers() {
    //  let moverHeaders = new HttpHeaders({
    //   'X-RapidAPI-Key': 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177',
    //    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    // })

    // return  this._httpClient.get(this.apiUrlMovers, {headers: moverHeaders})
    return  this._httpClient.get(this.apiUrlMovers)
    
  }

}