import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module
import { Observable, map } from 'rxjs';
import { Todo } from 'src/models/todo.interface';

@Injectable()
export class TodoService {
  constructor(private _http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    const api = 'https://jsonplaceholder.typicode.com/todos';

    return this._http.get<Todo[]>(api).pipe(
      map((todos) => {
        console.log('todos returned from api', todos);
        return todos;
      })
    );
  }

  saveTodos(_todos: any): any {
    console.log('save todos');
  }
}
