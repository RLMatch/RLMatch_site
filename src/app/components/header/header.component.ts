import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgIf,
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() openAuthPopup = new EventEmitter<string>();

  constructor(public authService: AuthService) {}

  openAuth(tab: string) {
    this.openAuthPopup.emit(tab);
  }
}
