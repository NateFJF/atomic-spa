import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { NavTabGroupComponent } from './navTabGroup.component';
import { NavTabComponent } from '../../molecules/navTab/navTab.component';

const meta: Meta<NavTabGroupComponent> = {
  title: 'Organisms/NavTabGroup',
  component: NavTabGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, NavTabComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<NavTabGroupComponent>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Today', icon: 'folder', route: '/', active: true },
      { label: 'Job done', icon: 'check', route: '/done', active: false },
    ],
  },
};
