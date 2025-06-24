// This service provides methods to filter, sort, and export table data.
// It can be used in components to manage table data operations like filtering by state, sorting by file number, and exporting to CSV format.


import { Injectable } from '@angular/core';

// TableRow interface defines the structure of each row in the table.
export interface TableRow {
  id: number;
  state: string;
  fileNumber: number;
  selected?: boolean;
}

// Key for sorting the table data.
export type SortDirection = 'asc' | 'desc';

@Injectable({
  providedIn: 'root'
})

export class TableDataService {
  constructor() {}

  // Filters the table data based on the selected state.
  filterByState(data: TableRow[], state: string | null): TableRow[] {
    if (!state || state === 'total') return data;
    return data.filter(row => row.state.toLowerCase() === state.toLowerCase());
  }

  // Sorts the table data by file number in the specified direction.
  sortByFileNumber(data: TableRow[], direction: SortDirection): TableRow[] {
    return [...data].sort((a, b) => {
      const diff = a.fileNumber - b.fileNumber;
      return direction === 'asc' ? diff : -diff;
    });
  }

  // Exports the table data to a CSV format.
  exportToCSV(data: TableRow[]): string {
    const headers = ['State', 'File number'];
    const rows = data.map(row => [row.state, row.fileNumber]);
    const csvContent = [headers, ...rows]
      .map(row => row.map(val => `"${val}"`).join(','))
      .join('\n');

    return csvContent;
  }

  // Downloads the CSV data as a .csv file.
  downloadCSV(csvData: string, filename = 'export.csv'): void {
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.href = url;
    link.setAttribute('download', filename);
    link.click();

    URL.revokeObjectURL(url);
  }
}
