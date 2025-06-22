import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTabButtonComponent } from '../../atoms/filterTabButton/filterTabButton.component';

export interface FilterTab {
  label: string;
  count: number;
}

@Component({
  selector: 'app-tab-group',
  standalone: true,
  imports: [CommonModule, FilterTabButtonComponent],
  templateUrl: './filterTabGroup.component.html',
  styleUrls: ['./filterTabGroup.component.scss'],
})
export class TabGroupComponent {
  @Input() tabs: FilterTab[] = [];
  @Input() selectedTab: string = ''; // currently active tab
  @Output() tabSelected = new EventEmitter<string>();

  onSelectTab(label: string): void {
    this.tabSelected.emit(label);
  }
}
