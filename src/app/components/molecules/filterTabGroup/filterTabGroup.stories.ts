import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TabGroupComponent } from './filterTabGroup.component';
import { FilterTabButtonComponent } from '../../atoms/filterTabButton/filterTabButton.component';
import { ButtonComponent } from '../../atoms/button/button.component';

const meta: Meta<TabGroupComponent> = {
  title: 'Molecules/FilterTabGroup',
  component: TabGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [FilterTabButtonComponent, ButtonComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<TabGroupComponent>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Total', count: 164 },
      { label: 'Identity', count: 15 },
      { label: 'Post-payment', count: 35 },
      { label: 'Refund Request', count: 22 },
      { label: 'Fraud', count: 8 },
      { label: 'Validated', count: 49 },
    ],
  },
};
