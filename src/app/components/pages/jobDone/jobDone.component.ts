import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGroupTemplateComponent } from '../../templates/mainGroup/mainGroup.component';

@Component({
  selector: 'app-job-done-page',
  standalone: true,
  imports: [CommonModule, MainGroupTemplateComponent],
  template: `
    <app-main-group-template
      [navTabs]="navTabs"
      [statCards]="statCards"
      [filterTabs]="filterTabs"
      [tableData]="todos"
    />
  `,
})
export class JobDonePageComponent {
  navTabs = [
    { label: 'Today', icon: 'calendar_today', route: '/' },
    { label: 'Job done', icon: 'check', route: '/done', active: true },
  ];

  statCards = [
    { count: 3, label: 'Tasks', icon: 'check_circle' },
  ];

  filterTabs = [
    { label: 'All', count: 3, state: 'all', active: true },
  ];

  todos = [
    { id: 1, state: 'Done', fileNumber: 'Finish code review', selected: false },
    { id: 2, state: 'Done', fileNumber: 'Refactor routing', selected: false },
    { id: 3, state: 'Done', fileNumber: 'Test component reuse', selected: false },
  ];
}
