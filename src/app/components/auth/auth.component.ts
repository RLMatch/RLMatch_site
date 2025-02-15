import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-auth',
  imports: [
    NgIf,
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './auth.component.html',
  standalone: true,
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  @Input() isVisible!: boolean;
  @Input() tab!: string;

  @Output() authClose = new EventEmitter<void>();

  show(tab: string) {
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
