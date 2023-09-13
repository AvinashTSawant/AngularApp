import { Component, OnInit } from '@angular/core';
import { AgeserviceService } from '../Services/ageservice.service';

@Component({
  selector: 'app-age2',
  templateUrl: './age2.component.html',
  styleUrls: ['./age2.component.css']
})
export class Age2Component implements OnInit {

  // age;
  // showAge;
  public birthdate: Date;
  public age: number;


  constructor(private objService:  AgeserviceService) { }

  ngOnInit() {
    // this.products = this.objService.products;
  }

  public CalculateAge(birthdate)
  {
      if(this.birthdate){
      this.objService.CalculateAgeService(birthdate);
      this.age = this.objService.age;
      //console.log('value is: ' +this.age );
     }
 }


  // ageCalculator(){
  //   if(this.age){
  //     const convertAge = new Date(this.age);
  //     const timeDiff = Math.abs(Date.now() - convertAge.getTime());
  //     this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  //   }
  // }
  
}
