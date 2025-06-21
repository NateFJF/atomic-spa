import { Meta, StoryObj } from '@storybook/angular';
import { TabComponent } from './tab.component';

const meta: Meta<TabComponent> = {
  title: 'Atoms/Tab',
  component: TabComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TabComponent>;

export const Default: Story = {
  args: {
    label: 'Total',
    active: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Validated',
    active: true,
  },
};

export const Inactive: Story = {
  args: {
    label: 'Fraud',
    active: false,
  },
};
