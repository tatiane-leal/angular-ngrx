import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuModule } from './components/menu/menu.module';
import { InfoModule } from './components/info/info.module';
import { TodoModule } from './components/todo/todo.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoEffects } from './state/todos/todos.effect';
import { todoReducer } from './state/todos/todos.reducer';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    InfoModule,
    TodoModule,
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
