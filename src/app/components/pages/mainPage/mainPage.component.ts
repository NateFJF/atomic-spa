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
    { id: 1, state: 'Fraud', fileNumber: '1', selected: false },
    { id: 2, state: 'Refund Request', fileNumber: '3', selected: false },
    { id: 3, state: 'Pre-payment', fileNumber: '8', selected: false },
    { id: 4, state: 'Pre-payment', fileNumber: '10', selected: false },
    { id: 5, state: 'Pre-payment', fileNumber: '5', selected: false },
    { id: 6, state: 'Post-payment', fileNumber: '2', selected: false },
    { id: 7, state: 'Post-payment', fileNumber: '4', selected: false },
    { id: 8, state: 'Identity', fileNumber: '6', selected: false },
    { id: 9, state: 'Identity', fileNumber: '7', selected: false },
    { id: 10, state: 'Validated', fileNumber: '9', selected: false },
  ]);

  // Sorting
  readonly sortKey = signal<SortableKey>('fileNumber');
  readonly sortDirection = signal<'asc' | 'desc'>('asc');
  selectedTab: string = 'total';

  // Filtering
  readonly selectedFilter = signal<string>('total');

  readonly visibleTableData = computed(() => {
    const selected = this.selectedFilter();
    const direction = this.sortDirection();
    const key = this.sortKey();

    // Filter
    let rows = this.tableData();
    if (selected !== 'total') {
      rows = rows.filter(
        (row) => row.state.toLowerCase() === selected.toLowerCase()
      );
    }

    // Then Sort
    return [...rows].sort((a, b) => {
      const aVal = a[key] ?? '';
      const bVal = b[key] ?? '';

      const isNumeric = !isNaN(+aVal) && !isNaN(+bVal);
      return isNumeric
        ? direction === 'asc'
          ? +aVal - +bVal
          : +bVal - +aVal
        : direction === 'asc'
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  });

  // Row selection
  readonly allChecked = computed(
    () =>
      this.tableData().length > 0 &&
      this.tableData().every((row) => row.selected)
  );

  onRowSelected(change: { id: string | number; selected: boolean }) {
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

  // Handlers
  onSortChange(change: { key: string; direction: 'asc' | 'desc' }) {
    if (['fileNumber', 'id', 'state'].includes(change.key)) {
      this.sortKey.set(change.key as 'fileNumber' | 'state' | 'id');
      this.sortDirection.set(change.direction);
    }
  }

  onFilterChange(state: string) {
    this.selectedFilter.set(state);
    this.selectedTab = state;
  }

  statCards = [
    { count: 850, label: 'Priority', icon: 'logout' },
    { count: 850, label: 'Express', icon: 'logout' },
    { count: 850, label: 'Standard', icon: 'logout' },
    { count: 850, label: 'Documents waiting', icon: 'logout' },
    { count: 850, label: 'Unpaid waiting', icon: 'logout' },
  ];

  // CSV Export

  onExportToCSV(): void {
    const rows = this.visibleTableData();
    const csvRows = [
      ['State', 'File number'], // Header
      ...rows.map((row) => [row.state, row.fileNumber]),
    ];

    const csvContent = csvRows.map((e) => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'table-data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Filter tabs

  readonly filterTabs = computed(() => {
    const data = this.tableData();
    const counts: Record<string, number> = {};

    for (const row of data) {
      const key = row.state.toLowerCase();
      counts[key] = (counts[key] || 0) + 1;
    }

    return [
      { label: 'Total', count: data.length, state: 'total' },
      { label: 'Identity', count: counts['identity'] ?? 0, state: 'identity' },
      {
        label: 'Pre-payment',
        count: counts['pre-payment'] ?? 0,
        state: 'pre-payment',
      },
      {
        label: 'Post-payment',
        count: counts['post-payment'] ?? 0,
        state: 'post-payment',
      },
      {
        label: 'Refund request',
        count: counts['refund request'] ?? 0,
        state: 'refund request',
      },
      { label: 'Fraud', count: counts['fraud'] ?? 0, state: 'fraud' },
      {
        label: 'Validated',
        count: counts['validated'] ?? 0,
        state: 'validated',
      },
    ];
  });
}
