import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
   <a routerLink="/products">Products</a>
   <a routerLink="/dashboard">Dashboard</a>
   <router-outlet></router-outlet>
  `
})
export class AppComponent {
    title = 'Products Details';
}