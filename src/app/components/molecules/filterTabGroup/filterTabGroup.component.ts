import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTabButtonComponent } from '../../atoms/filterTabButton/filterTabButton.component';

export interface FilterTab {
  label: string;
  count: number;
  state: string;
}

@Component({
  selector: 'app-tab-group',
  standalone: true,
  imports: [CommonModule, FilterTabButtonComponent, FilterTabButtonComponent],
  templateUrl: './filterTabGroup.component.html',
  styleUrls: ['./filterTabGroup.component.scss'],
})
export class TabGroupComponent {
  @Input() tabs: FilterTab[] = [];
  @Input() selectedTab: string = '';

  @Output() tabSelected = new EventEmitter<string>();

  onSelectTab(state: string) {
    this.tabSelected.emit(state);
    this.selectedTab = state;
  }
}
