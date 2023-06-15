import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { TodoService } from 'src/app/services/todo.service';

import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [TodoService],
  exports: [TodoComponent],
})
export class TodoModule {}
