import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TodolistModule} from "./todolist/todolist.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UtilsModule} from "./utils/utils.module";

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, TodolistModule, FormsModule, UtilsModule, ReactiveFormsModule], //like ng1 list of dependet modules
  bootstrap   : [AppComponent]
})

export class AppModule {

  constructor() {
    console.log('AppModule instance'); //like config and run in angular 1
  }

}
