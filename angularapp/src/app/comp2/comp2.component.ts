import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../Services/service1.service';


@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  products = {};
  //i have  inject my  services in constractor  to avoid the reapct code of object repetion
  constructor(private objService: Service1Service) { }

  ngOnInit() {

    //create object of services

   // const objService = new Service1Service();
    this.products =this.objService.products;
  }

}
