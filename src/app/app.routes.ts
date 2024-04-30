import { Routes } from '@angular/router';
import { QuestionaireComponent } from './pages/questionaire/questionaire.component';

export const routes: Routes = [
  {
    path: 'questionaire',
    component: QuestionaireComponent,
  },
  {
    path: '',
    redirectTo: '/questionaire',
    pathMatch: 'full',
  },
];
