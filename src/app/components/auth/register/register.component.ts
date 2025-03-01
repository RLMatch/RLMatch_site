import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService, UserRegister } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './register.component.html',
  standalone: true,
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @Output() authShowLogin = new EventEmitter<string>();
  @Output() authShowVerify = new EventEmitter<{}>();
  @Output() authClose = new EventEmitter<void>();
  form: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });
  errorMessage: string | null = null;

  constructor(private readonly authService: AuthService) {}

  showLogin() {
    this.authShowLogin.emit('login');
  }

  showVerify(data: {}) {
    this.authShowVerify.emit(data);
  }

  close() {
    this.authClose.emit();
  }

  register() {
    if (this.form.valid) {
      if (this.form.get('password')?.value !== this.form.get('confirmPassword')?.value) {
        this.errorMessage = 'Passwords do not match';
      } else {
        const userRegister: UserRegister = this.form.value;
        this.authService.register(userRegister).subscribe({
          next: (response) => {
            console.log(response);
            if (response !== null && response.error) {
              this.errorMessage = response.error;
            } else {
              this.showVerify(userRegister);
            }
          },
          error: (error) => this.errorMessage = 'An error occurred'
        });
      }
    } else {
      this.errorMessage = 'Please fill in all fields';
    }
  }
}
