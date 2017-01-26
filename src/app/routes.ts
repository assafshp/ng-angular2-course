import {Routes} from "@angular/router";
import {TodoAppComponent} from "./todolist/todo-app.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // resolve

  },
  {
    path: 'list', component: TodoAppComponent
  }
]
