import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGroupTemplateComponent } from '../../templates/mainGroup/mainGroup.component';
import { TableRowData } from '../../organisms/tableRowGroup/tableRowGroup.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, MainGroupTemplateComponent],
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.scss'],
})
export class MainPageComponent {
  readonly tableData = signal<TableRowData[]>([
    { id: 1, state: 'Fraud', fileNumber: '1', selected: false },
    { id: 2, state: 'Refund Request', fileNumber: '3', selected: false },
    { id: 3, state: 'Pre-payment', fileNumber: '8', selected: false },
    { id: 4, state: 'Pre-payment', fileNumber: '10', selected: false },
    { id: 5, state: 'Pre-payment', fileNumber: '5', selected: false },
  ]);

  // Row Checkbox

  readonly allChecked = computed(
    () =>
      this.tableData().length > 0 &&
      this.tableData().every((row) => row.selected)
  );

  onRowSelected(change: { id: string | number; selected: boolean }) {
    console.log('Updating row:', change.id, '→', change.selected);
    this.tableData.update((rows) =>
      rows.map((row) =>
        row.id === change.id ? { ...row, selected: change.selected } : row
      )
    );
  }

  onToggleAll(checked: boolean) {
    this.tableData.update((rows) =>
      rows.map((row) => ({ ...row, selected: checked }))
    );
  }

  // Sorting

  readonly sortKey = signal<string>('fileNumber');
  readonly sortDirection = signal<'asc' | 'desc'>('asc');

  // Return a sorted version of tableData
  readonly sortedTableData = computed(() => {
    const rows = this.tableData();
    const direction = this.sortDirection();
    const key = this.sortKey();

    return [...rows].sort((a, b) => {
      const aVal = (a as Record<string, any>)[key] ?? '';
      const bVal = (b as Record<string, any>)[key] ?? '';

      // Sort numerically if fileNumber is a number, otherwise fallback to string sort
      const isNumeric = !isNaN(+aVal) && !isNaN(+bVal);

      if (isNumeric) {
        return direction === 'asc' ? +aVal - +bVal : +bVal - +aVal;
      }

      return direction === 'asc'
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  });

  onSortChange(change: { key: string; direction: 'asc' | 'desc' }) {
    this.sortKey.set(change.key);
    this.sortDirection.set(change.direction);
  }

  // Hardcoded data for demonstration purposes

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
}
