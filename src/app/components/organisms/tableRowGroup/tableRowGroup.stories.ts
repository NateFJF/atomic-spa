import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TableRowGroupComponent } from './tableRowGroup.component';
import { TableRowComponent } from '../../molecules/tableRow/tableRow.component';

const meta: Meta<TableRowGroupComponent> = {
  title: 'Organisms/TableRowGroup',
  component: TableRowGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [TableRowComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<TableRowGroupComponent>;

export const Default: Story = {
  args: {
    rows: [
      { id: 1, state: 'Pre-payment', fileNumber: '550980838', selected: false },
      { id: 2, state: 'Validated', fileNumber: '550980839', selected: false },
      { id: 3, state: 'Fraud', fileNumber: '550980840', selected: true },
    ],
  },
  argTypes: {
    rowSelected: { action: 'row selected' },
    consultClicked: { action: 'consult clicked' },
  },
};
