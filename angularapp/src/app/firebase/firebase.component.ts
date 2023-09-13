import { Component, OnInit } from '@angular/core';
import { FirebaseapiService } from '../Services/firebaseapi.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(private _firebase: FirebaseapiService) { }

  ngOnInit() {
    this._firebase.CreatePost().subscribe(res=>{
      console.log('firebase',res);
      
    })

    this._firebase.getPostDataFirebase().subscribe(res => {
      console.log('get data from firebase', res);
    })
  }


}
