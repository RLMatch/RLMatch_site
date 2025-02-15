import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService, UserLogin} from '../../../services/auth/auth.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() authShowRegister = new EventEmitter<string>();
  @Output() authClose = new EventEmitter<void>();
  errorMessage: string | null = null;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  constructor(private readonly authService: AuthService) {
  }

  showRegister() {
    this.authShowRegister.emit('register');
  }

  close() {
    this.authClose.emit();
  }

  login() {
    if (this.form.valid) {
      const userLogin: UserLogin = this.form.value;
      this.authService.login(userLogin).subscribe({
        next: (response) => {
          if (response.error) {
            this.errorMessage = response.error;
          } else {
            this.close();
            this.authService.setToken(response.access_token);
          }
        },
        error: (error) => {
          console.error(error);
          this.errorMessage = 'An error occurred';
        }
      });
    } else {
      this.errorMessage = 'Please fill in all fields';
    }
  }
}
