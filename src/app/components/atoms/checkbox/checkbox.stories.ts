import { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Atoms/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
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

export const Interactive: Story = {
  render: () => ({
    template: `
      <app-checkbox
        [checked]="checked"
        (checkedChange)="onCheckedChange($event)"
        [colour]="'#af15fd'"
      />
    `,
    props: {
      checked: false,
      onCheckedChange(val: boolean) {
        this['checked'] = val;
      },
    },
  }),
};
