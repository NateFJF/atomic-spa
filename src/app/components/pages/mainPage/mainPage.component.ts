import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGroupTemplateComponent } from '../../templates/mainGroup/mainGroup.component';
import { TableRowData } from '../../organisms/tableRowGroup/tableRowGroup.component';

type SortableKey = keyof Pick<TableRowData, 'fileNumber' | 'state' | 'id'>;

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, MainGroupTemplateComponent],
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.scss'],
})
export class MainPageComponent {
  // Base data
  readonly tableData = signal<TableRowData[]>([
    { id: 1, state: 'fraud', fileNumber: '1', selected: false },
    { id: 2, state: 'Refund Request', fileNumber: '3', selected: false },
    { id: 3, state: 'Pre-payment', fileNumber: '8', selected: false },
    { id: 4, state: 'Pre-payment', fileNumber: '10', selected: false },
    { id: 5, state: 'Pre-payment', fileNumber: '5', selected: false },
  ]);

  // Sorting
  readonly sortKey = signal<SortableKey>('fileNumber');
  readonly sortDirection = signal<'asc' | 'desc'>('asc');

  // Filtering
  readonly selectedFilter = signal<string>('total');

  readonly visibleTableData = computed(() => {
    const selected = this.selectedFilter();
    const direction = this.sortDirection();
    const key = this.sortKey();

    // Filter
    let rows = this.tableData();
    if (selected !== 'total') {
      rows = rows.filter(row => row.state.toLowerCase() === selected.toLowerCase());
    }

    // Then Sort
    return [...rows].sort((a, b) => {
      const aVal = a[key] ?? '';
      const bVal = b[key] ?? '';

      const isNumeric = !isNaN(+aVal) && !isNaN(+bVal);
      return isNumeric
        ? direction === 'asc' ? +aVal - +bVal : +bVal - +aVal
        : direction === 'asc'
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
    });
  });

  // Row selection
  readonly allChecked = computed(
    () => this.tableData().length > 0 && this.tableData().every(row => row.selected)
  );

  onRowSelected(change: { id: string | number; selected: boolean }) {
    this.tableData.update(rows =>
      rows.map(row =>
        row.id === change.id ? { ...row, selected: change.selected } : row
      )
    );
  }

  onToggleAll(checked: boolean) {
    this.tableData.update(rows =>
      rows.map(row => ({ ...row, selected: checked }))
    );
  }

  // Handlers
  onSortChange(change: { key: string; direction: 'asc' | 'desc' }) {
  if (['fileNumber', 'id', 'state'].includes(change.key)) {
    this.sortKey.set(change.key as 'fileNumber' | 'state' | 'id');
    this.sortDirection.set(change.direction);
  }
}


  onFilterChange(state: string) {
    this.selectedFilter.set(state);
    this.filterTabs = this.filterTabs.map(tab => ({
      ...tab,
      active: tab.state === state,
    }));
  }

  // UI data
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
    { label: 'Post-payment', count: 35, state: 'post-payment' },
    { label: 'Refund request', count: 13, state: 'refund request' },
    { label: 'Fraud', count: 55, state: 'fraud' },
    { label: 'Validated', count: 85, state: 'validated' },
  ];
}
