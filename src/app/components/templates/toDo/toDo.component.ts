import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toDo.component.html',
  styleUrls: ['./toDo.component.scss'],
})
export class ToDoTemplateComponent {
  navTabs = [
    { label: 'Today', icon: 'calendar_today', route: '/' },
    { label: 'Job done', icon: 'check', route: '/done', active: true },
  ];
}
