import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  showActions: boolean = true;

  show: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
