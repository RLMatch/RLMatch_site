import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  template: '<router-outlet></router-outlet>',
  providers: [AuthService],
})
export class AppComponent {}
