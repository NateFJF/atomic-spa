import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../../molecules/statCard/statCard.component';

export interface StatCardItem {
  count: number | string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-stat-card-group',
  standalone: true,
  imports: [CommonModule, StatCardComponent],
  templateUrl: './statCardGroup.component.html',
  styleUrls: ['./statCardGroup.component.scss'],
})
export class StatCardGroupComponent {
  @Input() cards: StatCardItem[] = [];
}
