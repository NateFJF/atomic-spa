import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss'],
})
export class TableCellComponent {
  @Input() value: string | number = '';
  @Input() align: 'left' | 'center' | 'right' = 'left';
}
