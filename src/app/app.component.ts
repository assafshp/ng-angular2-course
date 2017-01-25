// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app works!';
// }

//webstorm shortcuts
//alt+func+f12
//shift+shift
//cmd+n - new items
//cmd+shift+a - actions
//cmd+shift+] - move tabs
//ctrl+tab - switcher
//ctrl+b - go to class
//cmd+alt+t - surround with

//ng serve
//ng test
//ng new
//ng lint
//ng generate module {moduleName} == ng g m todoList
//ng g c todolist/todoApp --flat
//ng g pipe utils/upper - create pipe (=filter)
//ng g directive utils/marker - create directive




//decorator - func that returns func, function that returns annotation, can get params that will be invoked and return function
//annotation - function, declaration on the function but it is not invoked, annotation cannot get params


import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  // encapsulation: ViewEncapsulation.Native,
  selector: 'app-root',
  template: `

      <todo-app></todo-app>
      <todo-app></todo-app>
      <todo-app></todo-app>
      
      <h1>My App</h1>
    
      <input type="checkbox" [(ngModel)]="flag"/>
      
      <h2 *appIf="flag" appFocus>Hello Template</h2>
      
      <input *appIf="flag" appFocus=""/>
      
  `,
  styles: ['h1 {text-align:center;color:red}']
})


export class AppComponent{

  private title: string;

  constructor() {
    this.title = "Hello Angular";


  }
}
