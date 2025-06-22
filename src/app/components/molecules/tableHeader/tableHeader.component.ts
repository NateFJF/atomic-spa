import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../../atoms/text/text.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { CheckboxComponent } from '../../atoms/checkbox/checkbox.component';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [CommonModule, TextComponent, IconComponent, CheckboxComponent],
  templateUrl: './tableHeader.component.html',
  styleUrls: ['./tableHeader.component.scss'],
})
export class TableHeaderComponent {
  @Input() sortKey: string = '';
  @Input() sortDirection: 'asc' | 'desc' = 'asc';
  @Input() allChecked: boolean = false;

  @Output() sortChange = new EventEmitter<{ key: string; direction: 'asc' | 'desc' }>();
  @Output() toggleAll = new EventEmitter<boolean>();

  toggleSort(key: string): void {
    const newDirection = (key === this.sortKey && this.sortDirection === 'asc') ? 'desc' : 'asc';
    this.sortChange.emit({ key, direction: newDirection });
  }

  handleToggleAll(checked: boolean) {
    this.toggleAll.emit(checked);
  }
}
