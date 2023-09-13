import { Component, OnInit } from '@angular/core';
import { API } from '../models/api';
import { RapidapiService } from '../Services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  // arrPosts: API[] = [];
  
   list;

  constructor(private rapidapiService: RapidapiService) { }

  ngOnInit() {

    // this.rapidapiService.GetYahooFinance().subscribe(res => {
    //   console.log('from rapid api', res);
    //   this.list = res;
    var obj1=this.rapidapiService.GetYahooFinance()
    obj1.subscribe(res => {
      // console.log('from rapid api', res);

        this.list=res
    console.log(this.list);
    
    })

    
  }
  GetMarketData() {
    // this.rapidapiService.getDataFormMarket().subscribe(res => {
    this.rapidapiService.getDataFormMarket('US', 'AMD').subscribe(res => {

      console.log('rapid market data', res);
    })
  }

  getMovers() {
    this.rapidapiService.getMovers().subscribe(res => {
      console.log('get movers', res);
    })
  }

}
