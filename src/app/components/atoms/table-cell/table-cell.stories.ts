import { Meta, StoryObj } from '@storybook/angular';
import { TableCellComponent } from './table-cell.component';

const meta: Meta<TableCellComponent> = {
  title: 'Atoms/TableCell',
  component: TableCellComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TableCellComponent>;

export const Default: Story = {
  args: {
    value: 'Validated',
    align: "left",
  },
};

export const CenterAligned: Story = {
  args: {
    value: 'Post-payment',
    align: 'center',
  },
};

export const RightAligned: Story = {
  args: {
    value: 1234567,
    align: 'right',
  },
};
