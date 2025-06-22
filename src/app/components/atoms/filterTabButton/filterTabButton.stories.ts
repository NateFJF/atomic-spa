import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { FilterTabButtonComponent } from './filterTabButton.component';
import { ButtonComponent } from '../button/button.component';

const meta: Meta<FilterTabButtonComponent> = {
  title: 'Atoms/FilterTabButton',
  component: FilterTabButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<FilterTabButtonComponent>;

export const Inactive: Story = {
  args: {
    label: 'Fraud',
    count: 56,
    active: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Total',
    count: 164,
    active: true,
  },
};
