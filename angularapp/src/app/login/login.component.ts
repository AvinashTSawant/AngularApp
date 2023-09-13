import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { UtilityService } from '../Services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = 'Avinash';
  constructor(private _route: Router,private _authService: AuthService) { }

  ngOnInit() {
  
    
   
    
  }
  
login(email, pass) {
 
  
  
  // this._route.navigate(['home']);
  var output = this._authService.checkUserNameAndPass(email.value, pass.value);

  if (output) {
    this._route.navigate(['/home']);
  } else {
    this._route.navigate(['/login']);
  }

}

}
