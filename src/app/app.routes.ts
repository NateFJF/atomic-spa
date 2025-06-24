import { Routes } from '@angular/router';
import { MainPageComponent } from './components/pages/mainPage/mainPage.component';
import { JobDoneComponent } from './components/pages/jobDone/jobDone.component';

export const routes: Routes = [
  { path: '',
    loadComponent: () => import('./components/pages/mainPage/mainPage.component').then(m => m.MainPageComponent),
    title: 'Today | SPA'},
  { path: 'done',
    loadComponent: () => import('./components/pages/jobDone/jobDone.component').then(m => m.JobDoneComponent),
    title: 'Job Done | SPA'},
];
