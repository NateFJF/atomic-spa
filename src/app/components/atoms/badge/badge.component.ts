import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() label: string = '';
  @Input() variant: 'default' | 'info' | 'success' | 'warning' | 'danger' = 'default';
  @Input() fontSize: string = '0.875rem';
  @Input() fontWeight: string = '500';
  @Input() height: string = '20px'; // Default height
  @Input() width: string = 'auto'; // Default width
}
