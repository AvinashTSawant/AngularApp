import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../Services/utility.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  userName ="";
 
  constructor(private utilityService: UtilityService,private _route: Router) { }

  ngOnInit() {
    this.utilityService.userName.subscribe(res => {
      this.userName = res;
      console.log(this.userName);
      console.log('res from subject1 from logout', res);
 
    })
  }
  logout() {
    
    localStorage.removeItem('username');
    this._route.navigate(['/login']);

  }

}
