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
  templateUrl: './jobDone.component.html',
  styleUrls: ['./jobDone.component.scss'],
})

// ------------------------- JobDoneComponent -------------------------
// This serves to show the use of Atomic Design principles in a Single Page Application (SPA).
// By using a template component, it allows for the reuse of the main layout structure while focusing on the specific data and functionality of the "Job Done" page.
export class JobDoneComponent {
  constructor(private tableDataService: TableDataService) {} // Service injection

  // Base data
  readonly tableData = signal<TableRowData[]>([
    { id: 1, state: 'Done', fileNumber: 1, selected: false },
    { id: 2, state: 'Pending', fileNumber: 3, selected: false },
    { id: 3, state: 'Pending', fileNumber: 8, selected: false },
    { id: 4, state: 'Done', fileNumber: 10, selected: false },
    { id: 5, state: 'Pending', fileNumber: 5, selected: false },
    { id: 6, state: 'Pending', fileNumber: 2, selected: false },
    { id: 7, state: 'Pending', fileNumber: 4, selected: false },
    { id: 8, state: 'Done', fileNumber: 6, selected: false },
    { id: 9, state: 'Done', fileNumber: 7, selected: false },
    { id: 10, state: 'Pending', fileNumber: 9, selected: false },
    { id: 11, state: 'Done', fileNumber: 11, selected: false },
    { id: 12, state: 'Pending', fileNumber: 12, selected: false },
    { id: 13, state: 'Done', fileNumber: 13, selected: false },
    { id: 14, state: 'Pending', fileNumber: 14, selected: false },
    { id: 15, state: 'Done', fileNumber: 15, selected: false },
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
      { label: 'Total',
        count: data.length,
        state: 'total'
      },
      { label: 'Done',
        count: counts['done'] ?? 0,
        state: 'done'
      },
      {
        label: 'Pending',
        count: counts['pending'] ?? 0,
        state: 'pending',
      },
    ];
  });

  // ----------------------------- Stat cards -----------------------------

  readonly statCards = computed(() => {
    const data = this.tableData();
    const done = data.filter((r) => r.state.toLowerCase() === 'done').length;
    const pending = data.filter(
      (r) => r.state.toLowerCase() === 'pending'
    ).length;

    return [
      { count: done,
        label: 'Done',
        icon: 'check'
      },
      { count: pending,
        label: 'Pending',
        icon: 'hourglass_empty'
      },
    ];
  });
}
