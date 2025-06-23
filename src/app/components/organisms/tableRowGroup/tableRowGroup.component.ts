import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRowComponent } from '../../molecules/tableRow/tableRow.component';

export interface TableRowData {
  id: string | number;
  state: string;
  fileNumber: string;
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
  @Input() rows: TableRowData[] = [];

  @Output() rowSelected = new EventEmitter<{ id: string | number; selected: boolean }>();
  @Output() consultClicked = new EventEmitter<string | number>();

  handleSelectChange(id: string | number, value: any) {
  const checked = value as boolean;
  this.rowSelected.emit({ id, selected: checked });
}

  handleConsultClick(id: string | number) {
    this.consultClicked.emit(id);
  }
}
