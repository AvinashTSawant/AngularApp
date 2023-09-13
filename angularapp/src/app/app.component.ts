import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  isDestroy: boolean = true;

  data: string = 'red';
  data1: string[] = ['HTML','CSS','JavaScript','TypeScript','Angular']; 

//step 5
  getDataFromChild(value) {
    console.log(value);   
   }
   
   OnTextValuCHanges(val){
    this.data = val.value;
    alert(val.value);
  }
  OnDestroy(){
    this.isDestroy = false;
  }
}

