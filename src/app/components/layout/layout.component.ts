import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderComponent,
    SidebarComponent,
    AuthComponent
  ],
  templateUrl: './layout.component.html',
  standalone: true,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  authPopup = false;
  tabAuthPopup: string = 'login';

  openAuthPopup(tab: string) {
    this.authPopup = true;
    this.tabAuthPopup = tab;
  }

  closeAuthPopup() {
    this.authPopup = false;
  }
}
