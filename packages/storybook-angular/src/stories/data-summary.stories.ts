import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import readme from './data-summary.md';
import { DataSummaryComponent, DataSummaryItemComponent } from '../../../components-angular/src/public-api';

const meta: Meta<DataSummaryComponent> = {
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
  render: () => ({
    template: `
      <rhc-data-summary>
        <rhc-data-summary-item key="Beest van Bodmin" value="Een grote katachtige die voorkomt op Bodmin Moor." appearance="Column"></rhc-data-summary-item>
        <rhc-data-summary-item key="Morgawr" value="Een zeeslang." appearance="Column"></rhc-data-summary-item>
        <rhc-data-summary-item key="Uilenman" value="Een reusachtig uilachtig wezen." appearance="Column"></rhc-data-summary-item>
      </rhc-data-summary>
    `,
  }),
};

export default meta;

export const Default: StoryObj<DataSummaryComponent> = {};
export const Rows: StoryObj<DataSummaryComponent> = {
  render: () => ({
    template: `
      <rhc-data-summary>
        <rhc-data-summary-item key="Beest van Bodmin" value="Een grote katachtige die voorkomt op Bodmin Moor." appearance="Row"></rhc-data-summary-item>
        <rhc-data-summary-item key="Morgawr" value="Een zeeslang." appearance="Row"></rhc-data-summary-item>
        <rhc-data-summary-item key="Uilenman" value="Een reusachtig uilachtig wezen." appearance="Row"></rhc-data-summary-item>
      </rhc-data-summary>
    `,
  }),
  name: 'Rows',
};
export const RowsWithActions: StoryObj<DataSummaryComponent> = {
  render: () => ({
    template: `
      <rhc-data-summary>
        <rhc-data-summary-item key="Beest van Bodmin" value="Een grote katachtige die voorkomt op Bodmin Moor." href="#" actionLabel="Lees meer over het Beest van Bodmin" appearance="Row"></rhc-data-summary-item>
        <rhc-data-summary-item key="Morgawr" value="Een zeeslang." href="#" actionLabel="Lees meer over Morgawr" appearance="Row"></rhc-data-summary-item>
        <rhc-data-summary-item key="Uilenman" value="Een reusachtig uilachtig wezen." href="#" actionLabel="Lees meer over Uilenman" appearance="Row"></rhc-data-summary-item>
      </rhc-data-summary>
    `,
  }),
  name: 'Rows with actions',
};
export const ColumnsWithActions: StoryObj<DataSummaryComponent> = {
  render: () => ({
    template: `
      <rhc-data-summary>
        <rhc-data-summary-item key="Beest van Bodmin" value="Een grote katachtige die voorkomt op Bodmin Moor." href="#" actionLabel="Lees meer over het Beest van Bodmin" appearance="Column"></rhc-data-summary-item>
        <rhc-data-summary-item key="Morgawr" value="Een zeeslang." href="#" actionLabel="Lees meer over Morgawr" appearance="Column"></rhc-data-summary-item>
        <rhc-data-summary-item key="Uilenman" value="Een reusachtig uilachtig wezen." href="#" actionLabel="Lees meer over Uilenman" appearance="Column"></rhc-data-summary-item>
      </rhc-data-summary>
    `,
  }),
  name: 'Columns with actions',
};
