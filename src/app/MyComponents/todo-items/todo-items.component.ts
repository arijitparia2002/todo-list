import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDeleteEvent: EventEmitter<Todo> = new EventEmitter();
  @Output() checkBoxClickEvent: EventEmitter<Todo> = new EventEmitter();


  constructor() {}

  ngOnInit(): void {}
  //run the sunction when the delete button is clicked
  onClick(todo: Todo) {
    console.log('todos-items component');
    //Event emitter -- emit todo 
    this.todoDeleteEvent.emit(todo);
  }

  onCheckboxClick(todo: Todo) {
    this.checkBoxClickEvent.emit(todo)
  }
}
