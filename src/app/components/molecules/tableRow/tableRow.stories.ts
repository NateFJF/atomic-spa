import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TableRowComponent } from './tableRow.component';
import { CheckboxComponent } from '../../atoms/checkbox/checkbox.component';
import { TextComponent } from '../../atoms/text/text.component';
import { BadgeComponent } from '../../atoms/badge/badge.component';
import { ButtonComponent } from '../../atoms/button/button.component';

const meta: Meta<TableRowComponent> = {
  title: 'Molecules/TableRow',
  component: TableRowComponent,
  decorators: [
    moduleMetadata({
      imports: [CheckboxComponent, TextComponent, BadgeComponent, ButtonComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<TableRowComponent>;

export const Default: Story = {
  args: {
    selected: false,
    state: 'Refund Request',
    fileNumber: 1284,
  },
  argTypes: {
    selectChange: { action: 'selectedChange' },
    consult: { action: 'consult' },
  },



};


