import { Component, OnInit } from '@angular/core'
import { TodoService } from '../Services/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoList: any = []
  editdata;
  isDisabled: boolean = false;
  // Inject the todo service
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    // this.createToDo();
    // this.updateTodo();
    //this.deleteToDo();
    this.getTodos()
  }

//    geek() {
  
//    this.edit = prompt("Please enter some text",
//         "GeeksforGeeks");

//     // if (doc != null) {
//     //     document.getElementById("g").innerHTML =
//     //         "Welcome to " + doc;
//     // }
// }

  // createToDo() {
  //   let todo = {
  //     id: new Date().getTime(),
  //     title: `Angular batch 7`
  //   }

  //   this.todoService.create(todo).subscribe(res => {
  //     console.log('todo create', res);
  //   })
  // }

  // getAllTodos() {
  //   this.todoService.list().subscribe(res => {
  //     console.log('get all todos', res);
  //   })
  // }

  // updateTodo() {
  //   let todo = {
  //     title: `Updated - Angular batch 7`
  //   }
  //   this.todoService.update('1693798506863',todo).subscribe(res => {
  //     console.log('todo updated');
  //   })
  // }

  // deleteToDo() {
  //   this.todoService.deleteTodo('1693798506863').subscribe(res => {
  //     console.log('todo deleted', res);
  //   })
  // }

  /////////////////////////////////////////////////////////////////////

  createTodo() {
    let todo = {
      id: new Date().getTime(),
      title: `Practice decorator`,
    }
    this.todoService.create(todo).subscribe((res) => {
      console.log('todo create', res)
      this.getTodos()
    })
  }

  getTodos() {
    this.todoService.list().subscribe(
      (res) => {
        this.todoList = res
        console.log('get todos list', this.todoList)
      },
      (error) => {
        console.log('error occured')
      },
    )
  }
  edit(){
    this.isDisabled=true
  }

  update(todo: any) {
    this.isDisabled=false
    let data = {
      id: new Date().getTime(),
      title:this.editdata,
    }
    this.todoService.update(todo.id, data).subscribe(
      (res) => {
        this.getTodos()
      },
      (err) => {
        console.log('error occured')
      },
    )
  }

  deleteTodo(id: any) {
    this.todoService.delete(id).subscribe(
      (res) => {
        this.getTodos()
      },
      (error) => {
        console.log('error occured', error)
      },
    )
  }
}
