import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './actionBar.component.html',
  styleUrls: ['./actionBar.component.scss'],
})
export class ActionBarComponent {

  // --------------------------- Outputs --------------------------
  // Emitters for export and filter actions
  @Output() exportClicked = new EventEmitter<void>();
  @Output() filterClicked = new EventEmitter<void>();

  // --------------------------- Handlers --------------------------

  onExportClick() {
    this.exportClicked.emit();
  }

  onFilterClick() {
    this.filterClicked.emit();
  }
}
