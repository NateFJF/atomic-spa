import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { NavTabComponent } from './navTab.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TextComponent } from '../../atoms/text/text.component';

const meta: Meta<NavTabComponent> = {
  title: 'Molecules/NavTab',
  component: NavTabComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, NavTabComponent, IconComponent, TextComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<NavTabComponent>;

export const Active: Story = {
  args: {
    label: 'Today',
    icon: 'folder',
    route: '/',
    active: true,
  },
};

export const Inactive: Story = {
  args: {
    label: 'Job done',
    icon: 'check',
    route: '/done',
    active: false,
  },
};
