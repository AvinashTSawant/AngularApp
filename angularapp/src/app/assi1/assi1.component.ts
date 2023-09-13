import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assi1',
  templateUrl: './assi1.component.html',
  styleUrls: ['./assi1.component.css']
})
export class Assi1Component implements OnInit {

  isDisabled = false;
  department: string = '';
  constructor() { }

  ngOnInit() {
  }
  
  Reset(){
this.department="";
  

  }
}
