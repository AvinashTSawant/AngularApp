import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  myForm: FormGroup;
  isFormSubmitted: boolean = false;
  genders = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'}
  ]

  notAllowedNames = ['Codemind', 'Technology'];

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  //   setTimeout(() => {
  //     this.myForm.setValue({
  //       'userDetails' : {
  //         'username': 'Codemind1122',
  //         'email': 'codemind@outlook.com'
  //       },
  //       'course' : 'JavaScript',
  //       'gender': 'Female',
  //       'skills': ['Azure']
  //     })
  // }, 5000)


  setTimeout(() => {
    this.myForm.patchValue({
      'userDetails' : {
        'email': 'jack@gmail.com'
      }
    })
}, 5000)

  }

  createForm() {
    // this.myForm = new FormGroup({
    //   'userDetails': new FormGroup({
    //   'username': new FormControl('', [Validators.required, this.NameNotAllowed.bind(this)]),
    //   'email': new FormControl(null,[Validators.required, Validators.email], this.EmailNotAllowed )
    //   }),     
    //   'course': new FormControl('Angular'),
    //   'gender': new FormControl('Male'),
    //   'skills': new FormArray([ new FormControl('Angular8', Validators.required)])
    // })


    this.myForm = this.fb.group({
      userDetails: this.fb.group({
        username : ['', [Validators.required, this.NameNotAllowed.bind(this)]],
        email: ['', [Validators.required, Validators.email], this.EmailNotAllowed ]
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this.fb.array([])
    })
  }

  resetForm() {
    this.myForm.reset({
      'userDetails' : {
        'username': '',
        'email': ''
      },
      'course': 'Angular',
      'gender': 'Male',
      'skills': ['']
    });
  }

  OnSubmit() {
    this.isFormSubmitted = true;
    console.log('Submit method called', this.myForm);
    this.resetForm();
  }

  OnAddSkills() {
    (<FormArray>this.myForm.get('skills')).push(new FormControl('', Validators.required))
  }

  OndeleteSkills(index:number){
    // (<FormArray>this.myForm.get('skills')).pop(new FormControl()).
    (<FormArray>this.myForm.get('skills')).removeAt(index);
  }
  
  NameNotAllowed(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
               // custom validation error code
        return { 'namesIsNotAllowed': true}
    }
    return null;
  }

  EmailNotAllowed(control: FormControl) : Promise<any> | Observable<any> {
    const myPromise = new Promise<any>((resolve, reject) => {
      setTimeout( () => {

        if (control.value === 'Ats007@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 1000)
    })
    return myPromise;
  }

}
