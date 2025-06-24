import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../../atoms/checkbox/checkbox.component';
import { TextComponent } from '../../atoms/text/text.component';
import { BadgeComponent } from '../../atoms/badge/badge.component';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-table-row',
  standalone: true,
  imports: [
    CommonModule,
    CheckboxComponent,
    TextComponent,
    BadgeComponent,
    ButtonComponent,
  ],
  templateUrl: './tableRow.component.html',
  styleUrls: ['./tableRow.component.scss'],
})
export class TableRowComponent {

  // --------------------------- Properties --------------------------
  // Input properties
  @Input() selected: boolean = false;
  @Input() state: string = '';
  @Input() fileNumber: number | string = '';

  // Output properties
  @Output() selectChange = new EventEmitter<boolean>();
  @Output() consult = new EventEmitter<void>();

  // --------------------------- Handlers ---------------------------

  toggleSelect(checked: boolean): void {
    this.selectChange.emit(checked);
  }

  handleConsult(): void {
    this.consult.emit();
  }

  // bage variant based on state
  getBadgeVariant(state: string): 'info' | 'success' | 'warning' | 'danger' {
    const map: Record<string, 'info' | 'success' | 'warning' | 'danger'> = {
      fraud: 'danger',
      validated: 'success',
      'refund request': 'warning',
      'post-payment': 'info',
      identity: 'info',
      done: 'success',
      pending: 'warning',
    };

    return map[state.toLowerCase()] || 'info';
  }
}
