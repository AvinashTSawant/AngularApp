import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeserviceService {
  // age;
  // showAge;
  constructor() { }


  public age: number;
  CalculateAgeService(birthdate){
    const timeDiff = +new Date(Math.abs(Date.now()) - +new Date(birthdate));
    //Used Math.floor instead of Math.ceil
    //so 26 years and 140 days would be considered as 26, not 27.
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    //console.log(this.age);
   }

  // ageCalculator1(){
    
  //     const convertAge = new Date(this.age);
  //     const timeDiff = Math.abs(Date.now() - convertAge.getTime());
  //     this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    
  // }

}
