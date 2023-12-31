import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodoState } from './todos.reducer';

export const selectTodos = (state: AppState) => state.todos;
export const selectAllTodos = createSelector(
  selectTodos,
  (state: TodoState) => state.todos
);
