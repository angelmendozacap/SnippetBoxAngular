import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnippetsModule } from './modules/snippets/snippets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnippetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
