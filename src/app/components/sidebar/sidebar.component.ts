import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from "@angular/common";
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
    imports: [
        RouterLink,
        RouterLinkActive,
        NgIf
    ],
  templateUrl: './sidebar.component.html',
  standalone: true,
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
