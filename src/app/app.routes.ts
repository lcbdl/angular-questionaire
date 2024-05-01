import { Routes } from '@angular/router';
import { QuestionairePageComponent } from './pages/questionaire/questionaire.component';

export const routes: Routes = [
  {
    path: 'questionaire',
    component: QuestionairePageComponent,
  },
  {
    path: '',
    redirectTo: '/questionaire',
    pathMatch: 'full',
  },
];
