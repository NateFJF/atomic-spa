import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTabButtonComponent } from '../filterTabButton/filterTabButton.component';

export interface FilterTab {
  label: string;
  count: number;
}

@Component({
  selector: 'app-tab-group',
  standalone: true,
  imports: [CommonModule, FilterTabButtonComponent],
  templateUrl: './tabGroup.component.html',
  styleUrls: ['./tabGroup.component.scss'],
})
export class TabGroupComponent {
  @Input() tabs: FilterTab[] = [];
  @Input() selectedTab: string = ''; // currently active tab
  @Output() tabSelected = new EventEmitter<string>();

  onSelectTab(label: string): void {
    this.tabSelected.emit(label);
  }
}
