import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assi5template-dericenform',
  templateUrl: './assi5template-dericenform.component.html',
  styleUrls: ['./assi5template-dericenform.component.css']
})
export class Assi5templateDericenformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {
 
    console.log('Your Details', form.value);
    console.log('Username:-', form.value.username);
    console.log('Email:-', form.value. email);
    console.log('DateofBirth:-', form.value.DateofBirth);
    console.log('course:-', form.value.course);
    console.log('Password:-', form.value.Password);
    form.reset();
  }
}
