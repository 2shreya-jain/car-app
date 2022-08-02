import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  public getNews() {
    return this.http.get(`http://localhost:3000/comments`);
  }
  public signUp(body: any) {
    return this.http.post('http://localhost:3000/users', body);
  }
  public logIn(email: any) {
    return this.http.get(`http://localhost:3000/users/?email=${email}`);
  }
}
