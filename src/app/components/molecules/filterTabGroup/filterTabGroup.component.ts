import { Component, Input, Output, EventEmitter, signal, WritableSignal, computed } from '@angular/core';
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

  // signal to track the selected tab label
  selectedTab: WritableSignal<string> = signal(''); // signal-based

  @Output() tabSelected = new EventEmitter<string>();

  selectTab(label: string): void {
    this.selectedTab.set(label);
    this.tabSelected.emit(label);
  }

  isActive(label: string): boolean {
    return this.selectedTab() === label;
  }
}
