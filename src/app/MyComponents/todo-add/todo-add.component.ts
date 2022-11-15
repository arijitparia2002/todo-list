import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  @Output() todoAddEvent: EventEmitter<Todo> = new EventEmitter();
  title!: string;
  desc!: string;

  constructor() {}

  ngOnInit(): void {}

  //Run this function when clicked on Add todo button
  onSubmit() {
    if (this.title == undefined) {
      alert('Please Enter a tittle for TODO!');
    } else {
      const todo = {
        title: this.title,
        desc: this.desc,
        active: false,
      };
      this.todoAddEvent.emit(todo);
    }
  }
}
