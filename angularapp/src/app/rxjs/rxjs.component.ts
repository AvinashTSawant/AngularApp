import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, from, interval, of } from 'rxjs';
import {filter, map, take, takeLast} from 'rxjs/operators';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  sub: Subscription;

  users =  [
    {name: 'Dnyanesh', id: '101', gender: 'Male'},
    {name: 'Test', id: '102', gender: 'Female'},
    {name: 'Jack', id: '103', gender: 'Male'}

  ]

  randomNames = ['Dnyanesh', 'codemind', 'Angular', 'HTML', 'JavaScript'];

  constructor(private userService: UserService) { }

  ngOnDestroy(): void {
   this.sub.unsubscribe();
  }

  ngOnInit() {
    // this.userService.getUsers().pipe(
    //   filter(u=> u.name == 'Clementina DuBuque')
    // ).subscribe(res => {
    //   console.log('after filter operatr ', res)
    // })

    // custom observable
    //const source = from(this.users);

    // filter out the people with age unser 30 

    // const result = source.pipe(filter(p=> p.gender == 'Male'));

    // result.subscribe(res=> {
    //   console.log('after filter value', res);
    // })


    const obs = from(this.randomNames);

    obs.pipe(
      take(2)
    ).subscribe(res => {
      console.log('take top 2', res)
    })

    // const obs = from(this.randomNames);
    //  obs.pipe(
    //   takeLast(2)
    // ).subscribe(res => {
    //   console.log('take top 2', res)
    // })
   
  }

}
