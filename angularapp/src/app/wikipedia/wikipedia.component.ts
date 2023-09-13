import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../Services/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {

  searchTerm = '';
  searchResults: any[];

  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit(): void {
   
  }

  search() {
    this.wikipediaService.search(this.searchTerm).subscribe((data: any) => {
      this.searchResults = data.query.search;
      console.log(data.query.search);
      
    });
  }
}
