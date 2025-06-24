import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../../atoms/text/text.component';
import { IconComponent } from '../../atoms/icon/icon.component';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule, TextComponent, IconComponent],
  templateUrl: './statCard.component.html',
  styleUrls: ['./statCard.component.scss'],
})
export class StatCardComponent {

  // --------------------------- Properties --------------------------
  // Input properties
  @Input() label: string = '';
  @Input() count: number | string = '';
  @Input() icon: string = '';
}
