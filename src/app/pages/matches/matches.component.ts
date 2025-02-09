import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { MatchListComponent } from '../../components/match-list/match-list.component';

@Component({
  selector: 'app-matches',
  imports: [
    LayoutComponent,
    MatchListComponent
  ],
  templateUrl: './matches.component.html',
  standalone: true,
  styleUrl: './matches.component.scss'
})
export class MatchesComponent {

}
