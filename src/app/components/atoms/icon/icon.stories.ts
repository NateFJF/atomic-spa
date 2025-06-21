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
    name: 'download', // use an actual icon name from your setup
    size: '24px',
    colour: '#007bff',
  },
};

export const LargeRedIcon: Story = {
  args: {
    name: 'warning',
    size: '40px',
    colour: 'red',
  },
};

export const SmallGreyIcon: Story = {
  args: {
    name: 'info',
    size: '16px',
    colour: 'grey',
  },
};
