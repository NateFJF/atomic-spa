import { Component } from '@angular/core';
import { MainPageComponent } from './components/pages/mainPage/mainPage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainPageComponent],
  template: '<app-main-page />',
})
export class AppComponent {}
