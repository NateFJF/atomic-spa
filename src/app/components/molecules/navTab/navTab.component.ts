import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'app-nav-tab',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, TextComponent],
  templateUrl: './navTab.component.html',
  styleUrls: ['./navTab.component.scss'],
})
export class NavTabComponent {

  // --------------------------- Properties --------------------------
  // Input properties
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() route: string = '/';
  @Input() active: boolean = false;
}
