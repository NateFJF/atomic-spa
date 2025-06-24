import { RouterTestingModule } from '@angular/router/testing';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MainGroupTemplateComponent } from './mainGroup.component';

import { NavTabGroupComponent } from '../../organisms/navTabGroup/navTabGroup.component';
import { StatCardGroupComponent } from '../../organisms/statCardGroup/statCardGroup.component';
import { FilterActionGroupComponent } from '../../organisms/filterActionGroup/filterActionGroup.component';
import { TableHeaderComponent } from '../../molecules/tableHeader/tableHeader.component';
import { TableRowGroupComponent } from '../../organisms/tableRowGroup/tableRowGroup.component';

const meta: Meta<MainGroupTemplateComponent> = {
  title: 'Templates/MainTableTemplate',
  component: MainGroupTemplateComponent,
  decorators: [
    moduleMetadata({
      imports: [
        RouterTestingModule.withRoutes([]), // Mock routes for testing
        NavTabGroupComponent,
        StatCardGroupComponent,
        FilterActionGroupComponent,
        TableHeaderComponent,
        TableRowGroupComponent,
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<MainGroupTemplateComponent>;

export const Default: Story = {
  args: {
    navTabs: [
      { label: 'Today', icon: 'folder', route: '/', active: true },
      { label: 'Job done', icon: 'check', route: '/done', active: false },
    ],
    statCards: [
      { count: 850, label: 'Priority', icon: 'logout' },
      { count: 850, label: 'Express', icon: 'logout' },
      { count: 850, label: 'Standard', icon: 'logout' },
      { count: 850, label: 'Standard', icon: 'logout' },
      { count: 850, label: 'Standard', icon: 'logout' },
    ],
    filterTabs: [
      { label: 'Total', count: 164, state: 'total', active: true },
      { label: 'Identity', count: 15, state: 'identity' },
      { label: 'Fraud', count: 55, state: 'fraud' },
      { label: 'Validated', count: 85, state: 'validated' },
    ],
    tableData: [
      { id: 1, state: 'Validated', fileNumber: 550980838, selected: false },
      { id: 2, state: 'Fraud', fileNumber: 550980839, selected: false },
      { id: 3, state: 'Refund request', fileNumber: 550980840, selected: true },
    ],
  },
};
