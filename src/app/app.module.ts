import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TodolistModule} from "./todolist/todolist.module";

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, TodolistModule], //like ng1 list of dependet modules
  bootstrap   : [AppComponent]
})

export class AppModule {

  constructor() {
    console.log('AppModule instance'); //like config and run in angular 1
  }

}
