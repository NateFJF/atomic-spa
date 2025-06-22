import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { IconComponent } from '../icon/icon.component';

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [IconComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Click Me',
    variant: 'primary',
  },
};

export const WithIconStart: Story = {
  name: 'With Icon (Start)',
  args: {
    label: 'Export',
    icon: 'download',
    iconPosition: 'start', // default, but explicitly shown
    variant: 'primary',
    type: 'button',
  },
};

export const WithIconEnd: Story = {
  name: 'With Icon (End)',
  args: {
    label: 'Next',
    icon: 'arrow_forward',
    iconPosition: 'end',
    variant: 'primary',
    type: 'button',
  },
};
