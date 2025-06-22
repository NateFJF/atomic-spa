import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TableHeaderComponent } from './tableHeader.component';
import { CheckboxComponent } from '../../atoms/checkbox/checkbox.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TextComponent } from '../../atoms/text/text.component';

const meta: Meta<TableHeaderComponent> = {
  title: 'Molecules/TableHeader',
  component: TableHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [CheckboxComponent, TextComponent, IconComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<TableHeaderComponent>;

export const Default: Story = {
  args: {
    sortKey: 'fileNumber',
    sortDirection: 'asc',
    allChecked: false,
  },
  argTypes: {
    sortChange: { action: 'sortChange' },
    toggleAll: { action: 'toggleAll' },
  },
};
