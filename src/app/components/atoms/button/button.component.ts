import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  // --------------------------- Properties --------------------------
  // Input properties
  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // Default is button
  @Input() disabled: boolean = false;
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() icon?: string; // Material icon name
  @Input() iconPosition: 'start' | 'end' = 'start'; // default is front of the label
  @Input() borderRadius: string = '0px'; // Default square
  @Input() borderless: boolean = false; // Default is not borderless (with border)
  @Input() width: string = 'auto'; // Default is auto width
  @Input() height: string = 'auto'; // Default is auto height
  @Input() fontSize: string = '1rem'; // Default font size

}
