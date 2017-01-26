import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TodolistModule} from "./todolist/todolist.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UtilsModule} from "./utils/utils.module";
import {HttpModule} from "@angular/http";
import { LoginComponent } from './login/login.component';
import {TodoAppComponent} from "./todolist/todo-app.component";
import {Routes, RouterModule, Router} from "@angular/router";
import {routes, IsAdmin} from "./routes"




@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports     : [
    BrowserModule,
    TodolistModule,
    FormsModule,
    UtilsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes), //singleton module
    HttpModule
  ], //like ng1 list of dependet modules
  bootstrap   : [AppComponent],
  exports: [LoginComponent],
  providers: [IsAdmin]

})

export class AppModule {

  constructor(router: Router) {
    console.log('AppModule instance'); //like config and run in angular 1

    router.events.subscribe(event => console.log(event));
  }

}
