import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  imports: [
    LayoutComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor() {
    console.log(environment.apiUrl);
  }
}
