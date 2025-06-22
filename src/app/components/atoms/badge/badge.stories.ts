import { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Atoms/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: {
    label: 'Generic',
    variant: 'default',
  },
};

export const Info: Story = {
  args: {
    label: 'Pre-payment',
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    label: 'Validated',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Refund Request',
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    label: 'Fraud',
    variant: 'danger',
  },
};
