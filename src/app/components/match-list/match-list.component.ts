import { Component } from '@angular/core';
import {MatchCardComponent} from '../match-card/match-card.component';

@Component({
  selector: 'app-match-list',
  imports: [
    MatchCardComponent
  ],
  templateUrl: './match-list.component.html',
  standalone: true,
  styleUrl: './match-list.component.scss'
})
export class MatchListComponent {

}
