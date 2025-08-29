import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import readme from './data-summary-item.md';
import { DataSummaryComponent, DataSummaryItemComponent } from '../../../components-angular/src/public-api';

const meta: Meta<DataSummaryItemComponent & DataSummaryComponent> = {
  title: 'Data Summary Item',
  id: 'rhc-data-summary-item',
  component: DataSummaryItemComponent,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [DataSummaryComponent, DataSummaryItemComponent],
    }),
  ],
  args: {
    key: 'Beest van Bodmin',
    value: 'Een grote katachtige die voorkomt op Bodmin Moor.',
    appearance: 'Column',
    actionLabel: 'Lees meer over het Beest van Bodmin',
    href: '#',
  },
  argTypes: {
    key: {
      control: 'text',
      description: 'The key or label for the data summary item.',
    },
    value: {
      control: 'text',
      description: 'The value or description for the data summary item.',
    },
    href: {
      control: 'text',
      description: 'The URL to navigate to when the action is triggered.',
    },
    actionLabel: {
      control: 'text',
      description: 'The label for the action link.',
    },
    appearance: {
      control: 'select',
      options: ['Column', 'Row'],
      description: 'The appearance of the data summary item, either as a column or a row.',
    },
  },
  render: ({ key, value, href, actionLabel, appearance }) => ({
    template: `
      <rhc-data-summary [appearance]="'${appearance}'">
        <div rhc-data-summary-item [key]="'${key}'" [value]="'${value}'" [href]="'${href}'" [actionLabel]="'${actionLabel}'">
        </div>
      </rhc-data-summary>
    `,
    props: {
      key,
      value,
      href,
      actionLabel,
      appearance,
    },
  }),
};

export default meta;

export const Default: StoryObj<DataSummaryItemComponent & DataSummaryComponent> = {};
