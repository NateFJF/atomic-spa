import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavTabGroupComponent } from './components/organisms/navTabGroup/navTabGroup.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavTabGroupComponent],
  styleUrls: ['./app.scss'],
  template: `
    <div class="layout-wrapper">
      <app-nav-tab-group [tabs]="navTabs" />
      <router-outlet />
    </div>
  `,
})
export class AppComponent {
  navTabs = [
    { label: 'Today', icon: 'calendar_today', route: '/' },
    { label: 'Job done', icon: 'check', route: '/done' },
  ];

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Job Done | My App');
  }
}
