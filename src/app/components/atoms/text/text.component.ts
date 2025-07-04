import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {

  // --------------------------- Properties --------------------------
  // Input properties
  @Input() content: string = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() weight: 'normal' | 'medium' | 'bold' = 'normal';
  @Input() colour: string = '#333';
}
