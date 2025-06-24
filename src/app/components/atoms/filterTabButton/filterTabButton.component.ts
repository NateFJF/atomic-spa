import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-filter-tab-button',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './filterTabButton.component.html',
  styleUrls: ['./filterTabButton.component.scss'],
})
export class FilterTabButtonComponent {

  // --------------------------- Properties --------------------------
  // Input properties
  @Input() label: string = '';
  @Input() count: number = 0;
  @Input() active: boolean = false;

  // Output properties
  @Output() selected = new EventEmitter<void>();

  // --------------------------- Handlers --------------------------

  handleClick(): void {
    this.selected.emit();
  }

  get displayText(): string {
    return `${this.label} (${this.count})`;
  }
}
