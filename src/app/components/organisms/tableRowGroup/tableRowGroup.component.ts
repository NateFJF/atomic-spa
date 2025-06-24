import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRowComponent } from '../../molecules/tableRow/tableRow.component';

export interface TableRowData {
  id: number;
  state: string;
  fileNumber: number;
  selected?: boolean;
}

@Component({
  selector: 'app-table-row-group',
  standalone: true,
  imports: [CommonModule, TableRowComponent],
  templateUrl: './tableRowGroup.component.html',
  styleUrls: ['./tableRowGroup.component.scss'],
})

export class TableRowGroupComponent {

  // --------------------------- Properties --------------------------
  // Input properties
  @Input() rows: TableRowData[] = [];

  // Output properties
  @Output() rowSelected = new EventEmitter<{ id: string | number; selected: boolean }>();
  @Output() consultClicked = new EventEmitter<string | number>();

  // --------------------------- Handlers ---------------------------

  handleSelectChange(id: string | number, checked: boolean): void {
    this.rowSelected.emit({ id, selected: checked });
  }

  handleConsultClick(id: string | number) {
    this.consultClicked.emit(id);
  }
}
