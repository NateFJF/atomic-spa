import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {

  // --------------------------- Properties --------------------------
  // Input properties
  @Input() name: string = '';
  @Input() size: string = '20px';
  @Input() colour: string = 'inherit';
}
