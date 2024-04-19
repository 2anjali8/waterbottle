import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  registerUser(userData: any) {
    return this.http.post<any>(
      'http://localhost:3000/api/users/add-user',
      userData
    );
  }
  login(userlogin: any): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/api/users/user-login',
      userlogin
    );
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
