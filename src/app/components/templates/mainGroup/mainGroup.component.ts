import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavTabGroupComponent } from '../../organisms/navTabGroup/navTabGroup.component';
import { StatCardGroupComponent } from '../../organisms/statCardGroup/statCardGroup.component';
import { FilterActionGroupComponent } from '../../organisms/filterActionGroup/filterActionGroup.component';
import { TableHeaderComponent } from '../../molecules/tableHeader/tableHeader.component';
import { TableRowGroupComponent } from '../../organisms/tableRowGroup/tableRowGroup.component';

@Component({
  selector: 'app-main-group-template',
  standalone: true,
  imports: [
    CommonModule,
    NavTabGroupComponent,
    StatCardGroupComponent,
    FilterActionGroupComponent,
    TableHeaderComponent,
    TableRowGroupComponent
  ],
  templateUrl: './mainGroup.component.html',
  styleUrls: ['./mainGroup.component.scss']
})
export class MainGroupTemplateComponent {
  @Input() navTabs: any[] = [];
  @Input() statCards: any[] = [];
  @Input() filterTabs: any[] = [];
  @Input() tableData: any[] = [];
}
