import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MainPageComponent } from './mainPage.component';
import { MainGroupTemplateComponent } from '../../templates/mainGroup/mainGroup.component';
import { NavTabGroupComponent } from '../../organisms/navTabGroup/navTabGroup.component';
import { StatCardGroupComponent } from '../../organisms/statCardGroup/statCardGroup.component';
import { FilterActionGroupComponent } from '../../organisms/filterActionGroup/filterActionGroup.component';
import { TableHeaderComponent } from '../../molecules/tableHeader/tableHeader.component';
import { TableRowGroupComponent } from '../../organisms/tableRowGroup/tableRowGroup.component';
import { NavTabComponent } from '../../molecules/navTab/navTab.component';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<MainPageComponent> = {
  title: 'Pages/MainPage',
  component: MainPageComponent,
  decorators: [
    moduleMetadata({
      imports: [
        RouterTestingModule.withRoutes([]), // Mock routes for testing
        MainPageComponent,
        MainGroupTemplateComponent,
        NavTabGroupComponent,
        NavTabComponent,
        StatCardGroupComponent,
        FilterActionGroupComponent,
        TableHeaderComponent,
        TableRowGroupComponent,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<MainPageComponent>;

export const Default: Story = {
  args: {},
};
