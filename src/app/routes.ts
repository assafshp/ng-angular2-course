import {Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {TodoAppComponent} from "./todolist/todo-app.component";
import {LoginComponent} from "./login/login.component";
import {Observable} from "rxjs";



export class IsAdmin implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {

    // return null;
    return true;
  }
}



export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // resolve
    // canLoad: [],
    // loadChildren: 'login.module.ts'

  },
  {
    // path: 'list/:id/:name', component: TodoAppComponent
    path: 'list',
    component: TodoAppComponent,
    canActivate: [IsAdmin]
    // canDeactivate: []

  }
]
