import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import readme from './data-summary.md';
import { DataSummaryComponent, DataSummaryItemComponent } from '../../../components-angular/src/public-api';

interface DataSummaryStoryComponent extends DataSummaryComponent {
  withActions?: boolean;
}

const meta: Meta<DataSummaryStoryComponent> = {
  title: 'Rijkshuisstijl/Data Summary',
  id: 'rhc-data-summary',
  component: DataSummaryComponent,
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
    appearance: 'Column',
    withActions: false,
  },
  argTypes: {
    appearance: {
      control: 'select',
      options: ['Column', 'Row'],
      description: 'The appearance of the data summary items, either as columns or rows.',
    },
    withActions: {
      control: 'boolean',
      description: 'Render the data summary items with actions within Storybook.',
    },
  },
  render: ({ appearance, withActions = false }) => {
    const items = [
      {
        key: 'Beest van Bodmin',
        value: 'Een grote katachtige die voorkomt op Bodmin Moor.',
        href: '#',
        actionLabel: 'Lees meer',
      },
      {
        key: 'Morgawr',
        value: 'Een zeeslang.',
        href: '#',
        actionLabel: '',
      },
      {
        key: 'Uilenman',
        value: 'Een reusachtig uilachtig wezen.',
        href: '#',
        actionLabel: 'Lees de uitgebreide getuigenissen en de mogelijke verklaringen achter dit fenomeen',
      },
    ];

    return {
      template: `
        <rhc-data-summary [appearance]="'${appearance}'">
          ${items
            .map(
              ({ key, value, href, actionLabel }) =>
                `<rhc-data-summary-item key="${key}" value="${value}"${
                  withActions ? ` href="${href}" actionLabel="${actionLabel}"` : ''
                }></rhc-data-summary-item>`,
            )
            .join('')}
        </rhc-data-summary>
      `,
      props: {
        appearance,
        withActions,
      },
    };
  },
};

export default meta;

export const Default: StoryObj<DataSummaryStoryComponent> = {};
export const Rows: StoryObj<DataSummaryStoryComponent> = {
  args: {
    appearance: 'Row',
  },
  name: 'Rows',
};
export const RowsWithActions: StoryObj<DataSummaryStoryComponent> = {
  args: {
    appearance: 'Row',
    withActions: true,
  },
  name: 'Rows with actions',
};
export const ColumnsWithActions: StoryObj<DataSummaryStoryComponent> = {
  args: {
    appearance: 'Column',
    withActions: true,
  },
  name: 'Columns with actions',
};
