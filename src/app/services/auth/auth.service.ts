import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export type UserLogin = { email: string; password: string };
export type UserRegister = { username: string; email: string; password: string };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly API_URL = 'http://localhost:3000';
  private static readonly TOKEN_KEY = 'token';

  constructor(private readonly http: HttpClient) { }

  login(login: UserLogin): Observable<any> {
    return this.http.post(AuthService.API_URL + '/auth/login', login);
  }

  register(register: UserRegister): Observable<any> {
    return this.http.post(AuthService.API_URL + '/auth/register', register);
  }

  getToken(): string {
    return <string>localStorage.getItem(AuthService.TOKEN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(AuthService.TOKEN_KEY, token);
  }

  removeToken(): void {
    localStorage.removeItem(AuthService.TOKEN_KEY);
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    this.removeToken();
  }
}
