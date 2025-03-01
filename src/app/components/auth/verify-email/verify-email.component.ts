import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthService, UserRegister} from '../../../services/auth/auth.service';
import {NgIf} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-verify-email',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './verify-email.component.html',
  standalone: true,
  styleUrl: './verify-email.component.scss'
})
export class VerifyEmailComponent {
  @Output() authClose = new EventEmitter<void>();
  @Input() userRegister: UserRegister | null = null;
  errorMessage: string | null = null;
  form: FormGroup = new FormGroup({
    code_1: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(1)
    ]),
    code_2: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(1)
    ]),
    code_3: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(1)
    ]),
    code_4: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(1)
    ]),
    code_5: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(1)
    ]),
    code_6: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(1)
    ])
  });

  constructor(private readonly authService: AuthService) {}

  close() {
    this.authClose.emit();
  }

  verify() {
    if (this.form.valid) {
      const code = Object.values(this.form.value).join('');
      this.authService.verifyEmail(this.userRegister?.email || '', code).subscribe({
        next: (response) => {
          console.log(response);
          if (response.error) {
            this.errorMessage = response.error;
          } else if (response.access_token) {
            this.authService.setToken(response.token_access);
            this.close();
          }
        },
        error: (error) => {
          this.errorMessage = error.error.message;
        }
      });
    } else {
      this.errorMessage = 'Invalid verification code';
    }
  }

  resend() {

  }

  onInput(event: Event, currentInputIndex: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (!/^\d$/.test(value) && value !== '') {
      input.value = '';
      return;
    }

    if (value.length === 1) {
      const nextInput = input.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    } else if (value.length === 0 && currentInputIndex > 1) {
      const previousInput = input.previousElementSibling as HTMLInputElement;
      if (previousInput) {
        previousInput.focus();
      }
    }
  }


}
