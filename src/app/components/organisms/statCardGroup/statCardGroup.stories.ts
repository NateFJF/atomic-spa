import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { StatCardGroupComponent } from './statCardGroup.component';
import { StatCardComponent } from '../../molecules/statCard/statCard.component';

const meta: Meta<StatCardGroupComponent> = {
  title: 'Organisms/StatCardGroup',
  component: StatCardGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [StatCardComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<StatCardGroupComponent>;

export const Default: Story = {
  args: {
    cards: [
      { count: 850, label: 'Priority', icon: 'logout' },
      { count: 850, label: 'Express', icon: 'logout' },
      { count: 850, label: 'Standard', icon: 'logout' },
      { count: 850, label: 'Documents waiting', icon: 'logout' },
      { count: 850, label: 'Unpaid waiting', icon: 'logout' },
    ],
  },
};
