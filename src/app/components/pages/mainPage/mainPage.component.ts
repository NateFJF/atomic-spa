import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGroupTemplateComponent } from '../../templates/mainGroup/mainGroup.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, MainGroupTemplateComponent],
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.scss'],
})
export class MainPageComponent {
  navTabs = [
    { label: 'Today', icon: 'calendar_today', route: '/', active: true },
    { label: 'Job done', icon: 'check', route: '/done', active: false },
  ];

  statCards = [
    { count: 850, label: 'Priority', icon: 'logout' },
    { count: 850, label: 'Express', icon: 'logout' },
    { count: 850, label: 'Standard', icon: 'logout' },
    { count: 850, label: 'Documents waiting', icon: 'logout' },
    { count: 850, label: 'Unpaid waiting', icon: 'logout' },
  ];

  filterTabs = [
    { label: 'Total', count: 164, state: 'total', active: true },
    { label: 'Identity', count: 15, state: 'identity' },
    { label: 'Post-payment', count: 35, state: 'post' },
    { label: 'Refund request', count: 13, state: 'refund' },
    { label: 'Fraud', count: 55, state: 'fraud' },
    { label: 'Validated', count: 85, state: 'validated' },
  ];

  tableData = [
    { id: 1, state: 'Pre-payment', fileNumber: '5509808388', selected: false },
    { id: 2, state: 'Pre-payment', fileNumber: '5509808388', selected: false },
    { id: 3, state: 'Pre-payment', fileNumber: '5509808388', selected: false },
    { id: 4, state: 'Pre-payment', fileNumber: '5509808388', selected: false },
    { id: 5, state: 'Pre-payment', fileNumber: '5509808388', selected: false },
  ];
}
