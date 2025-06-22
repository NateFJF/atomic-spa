import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { FilterActionGroupComponent } from './filterActionGroup.component';
import { TabGroupComponent } from '../../molecules/filterTabGroup/filterTabGroup.component';
import { ActionBarComponent } from '../../molecules/actionBar/actionBar.component';

const meta: Meta<FilterActionGroupComponent> = {
  title: 'Organisms/FilterActionGroup',
  component: FilterActionGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [TabGroupComponent, ActionBarComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<FilterActionGroupComponent>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Total', count: 164, state: 'total', active: true },
      { label: 'Identity', count: 15, state: 'identity' },
      { label: 'Post-payment', count: 35, state: 'post-payment' },
      { label: 'Refund request', count: 13, state: 'refund' },
      { label: 'Fraud', count: 55, state: 'fraud' },
      { label: 'Validated', count: 85, state: 'validated' },
    ],
  },
  argTypes: {
    tabChanged: { action: 'Tab changed' },
    exportClicked: { action: 'Export clicked' },
    filterClicked: { action: 'Filter clicked' },
  },
};
