import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  //Declaring todos -- a list that contains todo list
  todos!: Todo[];
  todoItems!: string;
  constructor() {
    this.todoItems = localStorage.getItem('todos') || '[]';
    console.log(this.todoItems);
    if (this.todoItems == null) {
      this.todos = [];
      console.log(this.todoItems);
    } else {
      this.todos = JSON.parse(this.todoItems);
    }
  }

  ngOnInit(): void {}

  //todoDelete event calles for deleteTodo function in todos typescript
  deleteTodo(todo: Todo) {
    console.log(todo);
    //Delete item from the array of todos
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

    //Save todos list in local Storage
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  //Add todo in the array
  addTodo(todo: Todo) {
    this.todos.push(todo);
    //Save todos list in local Storage
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  //if checkbox click, then set the checkbox status to todos cactive status
  checkBoxClick(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
