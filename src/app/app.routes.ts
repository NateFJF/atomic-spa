import { Routes } from '@angular/router';
import { MainPageComponent } from './components/pages/mainPage/mainPage.component';
import { JobDoneComponent } from './components/pages/jobDone/jobDone.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'done', component: JobDoneComponent },
];
