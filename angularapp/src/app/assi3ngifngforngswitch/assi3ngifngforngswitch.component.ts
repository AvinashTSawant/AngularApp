import { Component, OnInit } from '@angular/core';
import { Course } from '../models/movie';

@Component({
  selector: 'app-assi3ngifngforngswitch',
  templateUrl: './assi3ngifngforngswitch.component.html',
  styleUrls: ['./assi3ngifngforngswitch.component.css']
})
export class Assi3ngifngforngswitchComponent implements OnInit {
  showContent:boolean=false
  
  selectedColor: string;


  courses: string='Top 3 courses';
   course:  Course[]= [
    {Sr_No: 1,courses: 'Java' , Sid: 101,  Sname: 'Avinash' },
    {Sr_No: 2,courses: 'JavaScript' , Sid: 102,  Sname: 'Pravin' },
    {Sr_No: 3,courses: 'Java' , Sid: 101,  Sname: 'Akshay' }
   ]
  constructor() { }

  ngOnInit() {
  }

  getProductValue(product){
    this.selectedColor = product.target.value;
    console.log('ngswitch', product.target.value);
  }
   
}
