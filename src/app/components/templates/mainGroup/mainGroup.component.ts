import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatCardGroupComponent } from '../../organisms/statCardGroup/statCardGroup.component';
import { FilterActionGroupComponent } from '../../organisms/filterActionGroup/filterActionGroup.component';
import { TableHeaderComponent } from '../../molecules/tableHeader/tableHeader.component';
import { TableRowGroupComponent } from '../../organisms/tableRowGroup/tableRowGroup.component';
import { TableRowData } from '../../organisms/tableRowGroup/tableRowGroup.component';

@Component({
  selector: 'app-main-group-template',
  standalone: true,
  imports: [
    CommonModule,
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
  @Input() tableData: TableRowData[] = [];
  @Input() sortKey: string = '';
  @Input() sortDirection: 'asc' | 'desc' = 'asc';
  @Output() sortChange = new EventEmitter<{ key: string; direction: 'asc' | 'desc' }>();

  @Input() allChecked: boolean = false;

  @Output() toggleAll = new EventEmitter<boolean>();
  @Output() rowSelected = new EventEmitter<{ id: string | number; selected: boolean }>();
}
