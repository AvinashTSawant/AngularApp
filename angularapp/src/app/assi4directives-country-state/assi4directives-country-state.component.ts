import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assi4directives-country-state',
  templateUrl: './assi4directives-country-state.component.html',
  styleUrls: ['./assi4directives-country-state.component.css']
})
export class Assi4directivesCountryStateComponent implements OnInit {

  Countries=['India','USA'];
   states=[
     {country: 'India', name: 'Maharastra'},
     {country: 'India', name: 'Karnataka'},
     {country: 'India', name: 'Punjab'},
     {country: 'USA',name: 'Florida'},
     {country: 'USA',name: 'California'},
     {country: 'USA',name:'Texas'}
   ];
filteredStates:any;
selectedCountry:string;

  constructor() { }

  ngOnInit() {
  }
  onCountryChange(){
    this.filteredStates=this.states.filter(state =>state.country===this.selectedCountry);
  }

}
