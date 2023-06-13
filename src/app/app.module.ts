import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './components/menu/menu.module';
import { InfoModule } from './components/info/info.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MenuModule, InfoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
