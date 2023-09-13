import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


   @Input('msg') dataInput : string; 
   
    // alise (`msg')  [msg]= 'dada or use @Input('') only html direct use [dataInput]='data'


     //step 1
    @Output() foodEvent: EventEmitter<string> = new EventEmitter<string>();
   
  constructor() { }

  ngOnInit() {

    console.log(`input data from prant`, this.dataInput);
    
  }
//step 2
  addToFood() {
    this.foodEvent.emit('Banana');
  }

}
