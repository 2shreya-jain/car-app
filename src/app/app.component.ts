import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isHome = true;
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.isHome = window.location.pathname.includes('home');
    });
  }
  title = 'login-reg';
}
