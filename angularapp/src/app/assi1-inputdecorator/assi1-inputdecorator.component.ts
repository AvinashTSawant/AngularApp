import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-assi1-inputdecorator',
  templateUrl: './assi1-inputdecorator.component.html',
  styleUrls: ['./assi1-inputdecorator.component.css']
})
export class Assi1InputdecoratorComponent implements OnInit {

  @Input('msg1') arryInput : string[]; 
  constructor() { }

  ngOnInit() {

    console.log(`input data from prant`, this.arryInput);
  }

}
