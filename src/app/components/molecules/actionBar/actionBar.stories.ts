import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ActionBarComponent } from './actionBar.component';
import { ButtonComponent } from '../../atoms/button/button.component';

const meta: Meta<ActionBarComponent> = {
  title: 'Molecules/ActionBar',
  component: ActionBarComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<ActionBarComponent>;

export const Default: Story = {
  argTypes: {
    exportClicked: { action: 'Export clicked' },
    filterClicked: { action: 'Filter clicked' },
  },
};
