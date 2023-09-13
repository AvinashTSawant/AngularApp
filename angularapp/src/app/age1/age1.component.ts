import { Component, OnInit } from '@angular/core';
import { AgeserviceService } from '../Services/ageservice.service';

@Component({
  selector: 'app-age1',
  templateUrl: './age1.component.html',
  styleUrls: ['./age1.component.css']
})
export class Age1Component implements OnInit {
  public birthdate: Date;
  public age: number;
 
  constructor(private objService:  AgeserviceService) { }

  ngOnInit() {
  }
 
 
  public CalculateAge(birthdate)
  {
      if(this.birthdate){
      this.objService.CalculateAgeService(birthdate);
      this.age = this.objService.age;
      //console.log('value is: ' +this.age );
     }
 }
}
