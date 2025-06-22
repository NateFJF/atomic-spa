import { Meta, StoryObj } from '@storybook/angular';
import { TextComponent } from './text.component';

const meta: Meta<TextComponent> = {
  title: 'Atoms/Text',
  component: TextComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TextComponent>;

export const Default: Story = {
  args: {
    content: 'Sample Text',
    size: 'md',
    weight: 'normal',
    colour: '#333',
  },
};

export const SmallBold: Story = {
  args: {
    content: 'Small Bold Text',
    size: 'sm',
    weight: 'bold',
    colour: '#007bff',
  },
};

export const LargeLightGrey: Story = {
  args: {
    content: 'Large Light Text',
    size: 'lg',
    weight: 'medium',
    colour: '#aaa',
  },
};
