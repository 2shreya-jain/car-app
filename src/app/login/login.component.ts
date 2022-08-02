import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private apiService: AppService, private route: Router) {}
  email = '';
  password = '';

  ngOnInit(): void {}
  login() {
    this.apiService.logIn(this.email).subscribe(
      (data: any) => {
        console.log(data);
        if (!data.length) {
          alert(`User ${this.email} not Found`);
        } else {
          data = data[0];
          if (data.password === this.password) {
            // alert(`User ${data.username} logged in`);
            this.route.navigate(['/home']);
          } else {
            alert(`Invalid Password`);
          }
        }
      },
      (err) => {
        console.log(err);
        if (err.status === 404) {
          alert(`User ${this.email} not Found`);
        }
      }
    );
  }
}
