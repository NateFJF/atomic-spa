import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { JobDoneComponent } from './jobDone.component';

const meta: Meta<JobDoneComponent> = {
  title: 'Pages/JobDone',
  component: JobDoneComponent,
  decorators: [
    moduleMetadata({
      imports: [], // include shared modules here if needed
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<JobDoneComponent>;

export const Default: Story = {
  args: {}, // uses internal signal-based state
};
