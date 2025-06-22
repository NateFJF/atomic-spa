import { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Atoms/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Unchecked: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};
