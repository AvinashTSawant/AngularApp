import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  task: any = {};

  constructor(private taskService: TaskService,private _route: Router) {}
  ngOnInit() {}

  addTask() {
    if (this.task.title && this.task.dueDate) {
      this.taskService.addTask({ ...this.task, completed: false });
      this.task = {};
      this._route.navigate(['/task-list']);
    }
  }


  back() {
    
    this._route.navigate(['/task-list']);

  }
  
 
}