import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

let nextId = 0;

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {

  // --------------------------- Properties --------------------------
  // Input properties
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() colour: string = '#af15fd';

  // Output properties
  @Output() checkedChange = new EventEmitter<boolean>();


  // Unique ID for the checkbox
  checkboxId = `customCheckbox-${++nextId}`;

  // --------------------------- Handlers ---------------------------

  toggleCheck(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checkedChange.emit(input.checked);
  }
}
