import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assi7-emailvalidation-reset',
  templateUrl: './assi7-emailvalidation-reset.component.html',
  styleUrls: ['./assi7-emailvalidation-reset.component.css']
})
export class Assi7EmailvalidationResetComponent implements OnInit {

  username = '';
  defaultCourseValue = 'JavaScript';
  defaultgender = 'male';
  isFormSubmitted= false;
 
  genders = [
    { id: '1', value: 'Male'},
    { id: '2', value: 'Female'},
    { id: '3', value: 'Other'},

  ]

  formData = {
    username: '',
    email: '',
    course: '',
    country: '',
    state: '',
    gender:''
   }

   match="";
   valid =false;
    data="";
   
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm) {
    
    this.isFormSubmitted= true;
    console.log('form submitted', form);
    // console.log('form submitted', form.value);
    let email = form.value.email;
    console.log('Email is:-', email);
    let country = form.value.address.country;
    console.log('user input country name is:-', country)

    this.formData.username = form.value.username;
    this.formData.email = form.value.email;
    this.formData.course = form.value.course;
    this.formData.country = form.value.address.country;
    this.formData.state = form.value.address.state;
    this.formData.gender = form.value.gender;

    // reser the form controls
    
    // form.resetForm({
    //   course: this.defaultCourseValue
    // });
    form. resetForm({ course :'Angular'}) ;
  
    // window.location.reload();
   
   
  }

  //============================================
  
  data1(){
    this.match="@gmail.com"
    if (this.data.match(this.match)) {

      // alert("Valid email address!");
   return true;
    } 

  }



  //===================================================================

}