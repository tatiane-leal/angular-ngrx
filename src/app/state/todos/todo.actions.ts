import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/models/todo.interface';

export const addTodo = createAction(
  '[Todo Component] Add Todo',
  props<{ content: string }>()
);

export const updateTodo = createAction(
  '[Todo Component] Update Todo',
  props<{ id: number }>()
);

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: string }>()
);

export const loadTodos = createAction('[Todo Component] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo API] Load Todo Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo API] Load Todo Failure',
  props<{ error: string }>()
);
