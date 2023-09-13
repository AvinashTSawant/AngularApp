import { Component, OnInit } from '@angular/core';
import { RandomuserService } from '../Services/randomuser.service';

@Component({
  selector: 'app-randomuser',
  templateUrl: './randomuser.component.html',
  styleUrls: ['./randomuser.component.css']
})
export class RandomuserComponent implements OnInit {

 
users: any[] = [];

numberOfUsers: number = 1; 

constructor(private userService: RandomuserService) {}

ngOnInit(): void {
  this.fetchRandomUsers();
}

// Fetch data based on the number of users entered
fetchRandomUsers() {
  this.userService.getRandomUsers(this.numberOfUsers).subscribe((data: any) => {
    if (data.results) {
      this.users = data.results;
    }
    console.log(data);
  });
}
}
