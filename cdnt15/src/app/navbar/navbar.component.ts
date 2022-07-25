import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Input() pages: any;

  constructor(private router: Router) { }

  ngOnInit() {}

  goToPage(page: any) {
    console.log(page?.url);
    let url:string = page?.url;
    this.router.navigate([url]);
  }
}
