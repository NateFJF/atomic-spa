import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTabComponent } from '../../molecules/navTab/navTab.component';

export interface NavTabItem {
  label: string;
  icon: string;
  route: string;
  active?: boolean;
}

@Component({
  selector: 'app-nav-tab-group',
  standalone: true,
  imports: [CommonModule, NavTabComponent],
  templateUrl: './navTabGroup.component.html',
  styleUrls: ['./navTabGroup.component.scss'],
})
export class NavTabGroupComponent {
  @Input() tabs: NavTabItem[] = [];
}
