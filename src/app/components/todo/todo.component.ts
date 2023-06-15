import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(private _service: TodoService) {}

  subscription: Subscription = new Subscription();
  todos: Todo[] = [];

  ngOnInit(): void {
    this.subscription = this._service.fetchTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
