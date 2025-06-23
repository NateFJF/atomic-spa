import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from '../../molecules/filterTabGroup/filterTabGroup.component';
import { ActionBarComponent } from '../../molecules/actionBar/actionBar.component';

export interface FilterTab {
  label: string;
  count: number;
  state: string;
  active?: boolean;
}

@Component({
  selector: 'app-filter-action-group',
  standalone: true,
  imports: [CommonModule, TabGroupComponent, ActionBarComponent],
  templateUrl: './filterActionGroup.component.html',
  styleUrls: ['./filterActionGroup.component.scss'],
})
export class FilterActionGroupComponent {
  @Input() tabs: FilterTab[] = [];
  @Input() selectedTab: string = '';


  @Output() tabChanged = new EventEmitter<string>();
  @Output() exportClicked = new EventEmitter<void>();
  @Output() filterClicked = new EventEmitter<void>();

  handleTabChange(tab: string) {
    this.tabChanged.emit(tab);
  }

  handleExport() {
    this.exportClicked.emit();
  }

  handleFilter() {
    this.filterClicked.emit();
  }
}
