import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assi6fromvalidation',
  templateUrl: './assi6fromvalidation.component.html',
  styleUrls: ['./assi6fromvalidation.component.css']
})
export class Assi6fromvalidationComponent implements OnInit {

  username = '';
  defaultCourseValue = 'JavaScript';

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm) {
    console.log('form submitted', form);
    // console.log('form submitted', form.value);
    let name = form.value.username;
    console.log('User name is:-', name);

    let email = form.value.email;
    console.log('User Email is:-', email);

    let course = form.value.course;
    console.log('User course is:-', course);
    console.log(`----------------------------------------`);
    
  console.log(`Nasted Form Group control`);

  console.log(`----------------------------------------`);

    let country = form.value.address.country;
    console.log('country name is:-', country)

    let state = form.value.address.state;
    console.log('state name is:-', state)
  }

}
