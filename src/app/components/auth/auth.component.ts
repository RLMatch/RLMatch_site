import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {UserRegister} from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  imports: [
    NgIf,
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent
  ],
  templateUrl: './auth.component.html',
  standalone: true,
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  @Input() isVisible!: boolean;
  @Input() tab!: string;

  @Output() authClose = new EventEmitter<void>();

  userRegister: UserRegister | null = null;

  show(tab: string, data: {} = {}) {
    if (tab === 'verify-email') {
      this.userRegister = data as UserRegister;
    }
    this.tab = tab;
    this.isVisible = true;
  }

  close() {
    this.authClose.emit();
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
