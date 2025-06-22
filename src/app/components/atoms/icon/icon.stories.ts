import { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';

const meta: Meta<IconComponent> = {
  title: 'Atoms/Icon',
  component: IconComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {
    name: 'download',
    size: '24px',
    colour: '#333',
  },
};

export const Warning: Story = {
  args: {
    name: 'warning',
    size: "30px",
    colour: '#f39c12',
  },
};

export const Success: Story = {
  args: {
    name: "download",
    size: '24px',
    colour: '#28a745',
  },
};

export const Error: Story = {
  args: {
    name: 'error',
    size: '24px',
    colour: '#dc3545',
  },
};

export const TinyGrey: Story = {
  args: {
    name: 'info',
    size: '14px',
    colour: 'grey',
  },
};
