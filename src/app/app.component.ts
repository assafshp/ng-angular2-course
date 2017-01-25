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
import {FormGroup, FormControl, FormArray, FormBuilder} from "@angular/forms";
import {register} from "ts-node/dist";

@Component({
  // encapsulation: ViewEncapsulation.Native,
  selector: 'app-root',
  template: `

      <!--<todo-app></todo-app>-->
      <!--<todo-app></todo-app>-->
      <!--<todo-app></todo-app>-->
      <!---->
      <!--<h1>My App</h1>-->
    <!---->
      <!--<input type="checkbox" [(ngModel)]="flag"/>-->
      <!---->
      <!--<h2 *appIf="flag" appFocus>Hello Template</h2>-->
      <!---->
      <!--<input *appIf="flag" appFocus=""/>-->
      
      <h1>Reactive Forms Modules</h1>
      
      <form [formGroup]="userForm" (ngSubmit)="register()">
      <fieldset>
        <input type="text" formControlName="username" placeholder="username"/>
        <input type="password" formControlName="password" placeholder="password"/>
      </fieldset>
      
      <fieldset formGroupName="address">
        <legend>Address:</legend>
        <input type="text" formControlName="city" placeholder="city"/>
        <input type="text" formControlName="street"  placeholder="street"/>
      </fieldset>
      
      <fieldset formArrayName="phones">
        <legend>Phones</legend>
        <input type="text"
               *ngFor="let phone of userForm.get('phones').controls; let i=index"
               [formControlName]="i"
               placeholder="phone"/>
        <button type="button" (click)="addPhone()">+</button>
      </fieldset>
      
      <button type="submit">Send</button>
      </form>
      
      
  `,
  styles: ['h1 {text-align:center;color:red}']
})


export class AppComponent {

  // private title: string;
  //
  // constructor() {
  //   this.title = "Hello Angular";
  // }

  private userForm  : FormGroup;
  // private address   : FormGroup;
  // private phones    : FormArray;


  constructor(builder: FormBuilder) {

    this.userForm = builder.group({
      username: 'Assaf',
      password: '12345',
      address: builder.group({
        city: 'Eilat',
        street: 'ddd'
      }),
      phones: builder.array([ new FormControl('1212121')])
    });

    // console.log()

    this.register();
  }

  public register(){
    console.log((this.userForm.value));
  }

  public addPhone(){
    const phonesArr = <FormArray>this.userForm.get('phones');
    phonesArr.push(new FormControl());
  }

// private userForm  : FormGroup;
  // private usertName : FormControl;
  // private password  : FormControl;
  //
  // private address   : FormGroup;
  // private city      : FormControl;
  // private street    : FormControl;
  //
  // private phones    : FormArray;
  //
  //
  // constructor() {
  //   this.usertName = new FormControl('Assaf');
  //   this.password = new FormControl('1234');
  //
  //   this.city = new FormControl('Eilat');
  //   this.street = new FormControl('Dizingof');
  //
  //   this.phones = new FormArray([new FormControl('11111111')]);
  //
  //   this.address = new FormGroup({
  //     city: this.city,
  //     street: this.street
  //   });
  //
  //
  //   this.userForm = new FormGroup({
  //     username: this.usertName,
  //     password: this.password,
  //     address: this.address,
  //     phones: this.phones
  //   })
  //   console.log(this.userForm.value);
  //   console.log(this.address.value);
  //
  // }

  // send(){
  //   if (this.usertName.value !== 'sdfds'){
  //
  //   }
  // }
}
