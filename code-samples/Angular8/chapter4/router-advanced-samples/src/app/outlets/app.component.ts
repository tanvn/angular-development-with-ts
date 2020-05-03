import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
        <a [routerLink]="['']">Home</a>&nbsp;
        <a [routerLink]="['', {outlets: { sub: 'chat'}}]">Open Chat</a>&nbsp;
        <a [routerLink]="[{outlets: {sub2: 'chat2'}}]">Open Chat2</a>&nbsp;
        <a [routerLink]="[{outlets: {sub: null, sub2: null}}]">Close Chat</a>

        <br/>
        <router-outlet></router-outlet>
        <router-outlet name="sub"></router-outlet>
        <router-outlet name="sub2"></router-outlet>

  `
})
export class AppComponent {}
