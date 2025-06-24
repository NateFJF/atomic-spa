import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGroupTemplateComponent } from '../../templates/mainGroup/mainGroup.component';
import { TableRowData } from '../../organisms/tableRowGroup/tableRowGroup.component';
import {
  TableDataService,
  SortDirection,
} from '../../../services/tableData.service';

type SortableKey = keyof Pick<TableRowData, 'fileNumber' | 'state' | 'id'>;

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, MainGroupTemplateComponent],
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.scss'],
})

// ------------------------- MainPageComponent -------------------------
// This component serves as the main page of the application, handling data display, sorting, filtering, and exporting functionalities.
// It uses a service to manage table data operations like sorting, filtering, and exporting to CSV.

export class MainPageComponent {
  constructor(private tableDataService: TableDataService) {} // Service injection

  // Base data
  readonly tableData = signal<TableRowData[]>([
    { id: 1, state: 'Fraud', fileNumber: 1, selected: false },
    { id: 2, state: 'Refund Request', fileNumber: 3, selected: false },
    { id: 3, state: 'Pre-payment', fileNumber: 8, selected: false },
    { id: 4, state: 'Validated', fileNumber: 10, selected: false },
    { id: 5, state: 'Validated', fileNumber: 5, selected: false },
    { id: 6, state: 'Post-payment', fileNumber: 2, selected: false },
    { id: 7, state: 'Post-payment', fileNumber: 4, selected: false },
    { id: 8, state: 'Identity', fileNumber: 6, selected: false },
    { id: 9, state: 'Pre-payment', fileNumber: 7, selected: false },
    { id: 10, state: 'Validated', fileNumber: 9, selected: false },
    { id: 11, state: 'Validated', fileNumber: 11, selected: false },
    { id: 12, state: 'Refund Request', fileNumber: 12, selected: false },
    { id: 13, state: 'Fraud', fileNumber: 13, selected: false },
    { id: 14, state: 'Fraud', fileNumber: 14, selected: false },
    { id: 15, state: 'Validated', fileNumber: 15, selected: false },
    { id: 16, state: 'Identity', fileNumber: 16, selected: false },
    { id: 17, state: 'Post-payment', fileNumber: 17, selected: false },
    { id: 18, state: 'Refund Request', fileNumber: 18, selected: false },
    { id: 19, state: 'Fraud', fileNumber: 19, selected: false },
    { id: 20, state: 'Validated', fileNumber: 20, selected: false },
    { id: 21, state: 'Identity', fileNumber: 21, selected: false },
    { id: 22, state: 'Post-payment', fileNumber: 22, selected: false },
    { id: 23, state: 'Refund Request', fileNumber: 23, selected: false },
    { id: 24, state: 'Fraud', fileNumber: 24, selected: false },
    { id: 25, state: 'Validated', fileNumber: 25, selected: false },
  ]);

  // Sorting
  readonly sortKey = signal<SortableKey>('fileNumber');
  readonly sortDirection = signal<SortDirection>('asc');
  selectedTab: string = 'total';

  // Filtering
  readonly selectedFilter = signal<string>('total');

  readonly visibleTableData = computed(() => {
    const selected = this.selectedFilter();
    const direction = this.sortDirection();
    const key = this.sortKey();

    // TableDataService for filtering and sorting
    let rows = this.tableData();
    if (selected !== 'total') {
      rows = this.tableDataService.filterByState(rows, selected);
    }
    if (key === 'fileNumber') {
      rows = this.tableDataService.sortByFileNumber(rows, direction);
    } else {
      // fallback to default sort for other keys
      rows = [...rows].sort((a, b) => {
        const aVal = a[key] ?? '';
        const bVal = b[key] ?? '';
        return direction === 'asc'
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
      });
    }
    return rows;
  });

  // ---------------------------- Row selection ---------------------

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

  // ---------------------------- Handlers ----------------------------

  onSortChange(change: { key: string; direction: SortDirection }) {
    if (['fileNumber', 'id', 'state'].includes(change.key)) {
      this.sortKey.set(change.key as 'fileNumber' | 'state' | 'id');
      this.sortDirection.set(change.direction);
    }
  }

  onFilterChange(state: string) {
    this.selectedFilter.set(state);
    this.selectedTab = state;
  }

  // ------------------------------ CSV Export ------------------------------

  onExportToCSV(): void {
    const rows = this.visibleTableData();
    const csvContent = this.tableDataService.exportToCSV(rows); // <-- Use service
    this.tableDataService.downloadCSV(csvContent, 'table-data.csv'); // <-- Use service
  }

  // ------------------------------ Filter tabs ------------------------------

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

  // ----------------------------- Stat cards -----------------------------

  readonly statCards = computed(() => {
    const data = this.tableData();
    const counts: Record<string, number> = {};

    for (const row of data) {
      const key = row.state.toLowerCase();
      counts[key] = (counts[key] || 0) + 1;
    }

    return [
      { count: data.length,
        label: 'Total',
        icon: 'layers'
      },
      { count: counts['identity'] ?? 0,
        label: 'Identity',
        icon: 'person'
      },
      { count: counts['refund request'] ?? 0,
        label: 'Refund Request',
        icon: 'receipt',
      },
      {
        count: counts['fraud'] ?? 0,
        label: 'Fraud',
        icon: 'warning',
      },
      {
        count: counts['validated'] ?? 0,
        label: 'Validated',
        icon: 'check',
      },
    ];
  });
}
