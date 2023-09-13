import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assi8-tempform-passconfi',
  templateUrl: './assi8-tempform-passconfi.component.html',
  styleUrls: ['./assi8-tempform-passconfi.component.css']
})
export class Assi8TempformPassconfiComponent implements OnInit {
  chack:boolean;
  username = '';
  Fullname ='';
  password='';
  confirmPassword='';
  defaultCountry = 'INDIA';
  defaultgender = 'Male';
  isFormSubmitted= false;
 
  genders = [
    { id: '1', value: 'Male'},
    { id: '2', value: 'Female'},
    { id: '3', value: 'Other'},

  ]

  formData = {
    Fullname:'',
    username: '',
    DOB: '',
    email: '',
    Country: '',
    // country: '',
    // state: '',
    gender:'',
    password:'',
  confirmPassword:''
   }

 
   
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm) {
    
    this.isFormSubmitted= true;
    console.log('form submitted', form);
    // console.log('form submitted', form.value);
    let email = form.value.email;
    console.log('Email is:-', email);
   
    
    // let country = form.value.address.country;
    // console.log('user input country name is:-', country)

    // let country = form.value.address.country;
    // console.log('user input country name is:-', country)

    this.formData.username = form.value.username;
    this.formData.DOB = form.value.DateofBirth;
    this.formData.email = form.value.email;
    this.formData.Country = form.value.Country;
    // this.formData.country = form.value.address.country;
    // this.formData.state = form.value.address.state;
    this.formData.gender = form.value.gender;
    this.formData.Fullname = form.value.Fullname;

    this.formData.password = form.value.password;
    this.formData.confirmPassword = form.value.confirmPassword;
 
    form. resetForm({ Country :'INDIA'}) ;
  

   
  }

  //============================================
  
  data(){
    this.password;
    this.confirmPassword;
    if (this.confirmPassword=this.password) {

      //  alert("Valid email address!");
   this.chack=true
    } 
    else{
      this.chack=false;
    }

  }



  //===================================================================

}
