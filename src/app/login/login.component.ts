import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  template: `
    <p>
      login Works!
    </p>
    
    <input type="text" />
    <input type="password" />
    
    
  `,
  styles: []
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(router: Router) {

    // router.navigateByUrl()

  }

  ngOnInit() {
    console.log('login init');
  }


  ngOnDestroy(): void {
    console.log('login destryoed');
  }
}
