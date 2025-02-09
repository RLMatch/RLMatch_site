import { Routes } from '@angular/router';
import { MatchesComponent } from './pages/matches/matches.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'matches', component: MatchesComponent },
];
