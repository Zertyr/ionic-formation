import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages: any = [{
    title: 'Home',
    icon: 'home',
    url: '/home'
  }, {
    title: 'Users',
    icon: 'person-circle',
    url: '/users'
  }];
  constructor() {}
}
