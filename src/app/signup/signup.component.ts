import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private apiService: AppService, private route: Router) {}
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  ngOnInit(): void {}
  signUp() {
    const body = {
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    };
    console.log(body);
    this.apiService.signUp(body).subscribe((data: any) => {
      alert(`User ${data.username} Created`);
      this.route.navigate(['/home']);
    });
  }
}
