import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
name:string='Avinash Sawant'
isDisabled = false;

imageURL : string = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=';

imageURL1 : string = 'https://thumbs.dreamstime.com/b/environment-earth-…-hand-holding-tree-nature-field-gra-130247647.jpg';

  data={
  name:"Avinash",
  age:23
}
// Two way data binding

department: string = '';
  constructor() { }

  ngOnInit() {
  }


  Savedata(){
    alert('Button click')
  

  }
}
