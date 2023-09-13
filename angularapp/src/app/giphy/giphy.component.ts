import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../Services/giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  searchTerm = '';
  searchResults: any[];
  searchResults1: any[];


  page:number=1;
totalRecords:any;

  constructor(private GiphyService: GiphyService) { }

  ngOnInit() {
   
    this.GiphyService.tranding().subscribe((res: any) => {
      console.log( `res`,res);
      this.searchResults = (res['data']);
      console.log(this.searchResults);
      this.totalRecords=this.searchResults.length;
    });
  }
  search() {
   
    this.GiphyService.search1(this.searchTerm).subscribe((data: any) => {
      console.log(this.searchTerm);
      
      this.searchResults = (data['data']);
       console.log(this.searchResults);
       this.totalRecords=this.searchResults.length;

      // console.log(data['data'][1]['id']);
    //  this.data1 = data['data'];
      // console.log( data['data']);

      
    });
  
  }
}
