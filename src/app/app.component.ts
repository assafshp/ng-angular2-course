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


import {Component, ViewEncapsulation, OnInit} from "@angular/core";
import {FormGroup, FormControl, FormArray, FormBuilder, Validators} from "@angular/forms";
import {register} from "ts-node/dist";
import 'rxjs';

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
      <!--<span *ngIf="userForm.get('username').invalid">Not Valid!</span>-->
      <span [hidden]="userForm.get('username').valid">Not Valid!</span>
      
      
      
      
      <fieldset formGroupName="address">
        <legend>Address:</legend>
        <input type="text" formControlName="city" placeholder="city"/>
        <input type="text" formControlName="street"  placeholder="street"/>
      </fieldset>
      
      <fieldset *ngIf="userForm.get('address').valid" formArrayName="phones">
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
  styles: [
    `/*h1 {text-align:center;color:red}*/

     input.ng-invalid { background-color: black}
     
     

    `


  ]
})


export class AppComponent implements OnInit{

  ngOnInit(): void {  //life cycle for each directive - after constuctor and onchanges (change detection run and sync all data)
    const username = this.userForm.get('username');
    username.valueChanges
      .debounceTime(400)   //from rxjs
      .filter(value => value>12)
      .subscribe(value => console.log('username=' + value));  //observable - get stream for changes, stream of events



  }

  // private title: string;
  //
  // constructor() {
  //   this.title = "Hello Angular";
  // }

  private userForm  : FormGroup;
  private msg = 'Assaf';
  // private address   : FormGroup;
  // private phones    : FormArray;


  constructor(builder: FormBuilder) {

    this.userForm = builder.group({
      username: ['', [Validators.required]],
      password: '12345',
      address: builder.group({
        city: ['Eilat', [Validators.minLength(3), Validators.required]],
        street: 'ddd'
      }),
      phones: builder.array([ new FormControl('1212121')])
    });

    // console.log()

    this.register();

    // this.userForm.registerControl();
  }

  public register(){

    //angular automaticllly add classes lass="ng-touched ng-dirty ng-invalid
    console.log('touched: ' + this.userForm.touched);
    console.log('valid: ' + this.userForm.valid);
    if (this.userForm.valid){
      console.log('valid');
    }
    else{
      console.log('invalid');
    }
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
