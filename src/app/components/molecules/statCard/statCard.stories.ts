import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { StatCardComponent } from './statCard.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TextComponent } from '../../atoms/text/text.component';

const meta: Meta<StatCardComponent> = {
  title: 'Molecules/StatCard',
  component: StatCardComponent,
  decorators: [
    moduleMetadata({
      imports: [IconComponent, TextComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<StatCardComponent>;

export const Priority: Story = {
  args: {
    count: 850,
    label: 'Priority',
    icon: 'logout', // replace with your actual icon name
  },
};
