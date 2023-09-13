import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  filteredTasks: any[] = []; // Add a new array for filtered tasks
  filter: string = 'all'; // Default filter
  show=false;

  namesearch: string = '';
  constructor(private taskService: TaskService,private _route: Router) {}
  
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.filterTasks('all'); // Initialize by showing all tasks
  }
  
  markAsCompleted(task: any) {
    task.completed = true;
  }
  
  markAsPending(task: any) {
    task.completed = false;
  }
  
  filterTasks(status: string) {
    this.filter = status;
  
    if (status === 'all') {
      this.filteredTasks = this.tasks;
      console.log(this.filteredTasks);
      
    } else if (status === 'completed') {
      this.filteredTasks = this.tasks.filter((task) => task.completed);
      console.log(this.filteredTasks);
  
    } else if (status === 'pending') {
      this.filteredTasks = this.tasks.filter((task) => !task.completed);
      console.log(this.filteredTasks);
    }
  }

  add() {
    
    this._route.navigate(['/task-form']);

  }

  list() {
    this.show = true;
  }
  }