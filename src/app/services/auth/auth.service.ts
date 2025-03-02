import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

export type UserLogin = { email: string; password: string };
export type UserRegister = { username: string; email: string; password: string };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly API_URL = environment.apiUrl;
  private static readonly TOKEN_KEY = 'token';

  constructor(private readonly http: HttpClient) { }

  public login(login: UserLogin): Observable<any> {
    return this.http.post(AuthService.API_URL + '/auth/login', login);
  }

  public register(register: UserRegister): Observable<any> {
    return this.http.post(AuthService.API_URL + '/auth/register', register);
  }

  public verifyEmail(email: string, code: string): Observable<any> {
    return this.http.post(AuthService.API_URL + '/auth/verify', { email, code });
  }

  public getToken(): string {
    return <string>localStorage.getItem(AuthService.TOKEN_KEY);
  }

  public setToken(token: string): void {
    localStorage.setItem(AuthService.TOKEN_KEY, token);
  }

  public removeToken(): void {
    localStorage.removeItem(AuthService.TOKEN_KEY);
  }

  public isLoggedIn() {
    return !!this.getToken();
  }

  public logout() {
    this.removeToken();
  }
}
