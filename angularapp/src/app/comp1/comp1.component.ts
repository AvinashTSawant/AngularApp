import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../Services/service1.service';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  products = {};
 obj1;
  constructor(private objService: Service1Service ,private objUser: UserService) { }

  ngOnInit() {
  //  const objService = new Service1Service();
  this.products =this.objService.products;

  //////////////////////////////////////////

  var obj = this.objUser.getUsers();
  // var obj1=  obj.subscribe()
   obj.subscribe(res=> {
     this.obj1=res;
    console.log(res)
   })

  }
 
 
}
