import type { Meta, StoryObj } from '@storybook/angular';
import readme from './column-layout.md';
import {
  ColumnLayoutComponent,
  HeadingComponent,
  ParagraphComponent,
} from '../../../components-angular/src/public-api';

const meta: Meta<ColumnLayoutComponent> = {
  title: 'Column Layout',
  id: 'rhc-angular-column-layout',
  component: ColumnLayoutComponent,
  argTypes: {
    rule: {
      description: 'Display a rule between columns',
      control: 'boolean',
    },
  },
  args: {
    rule: false,
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ rule }) => ({
    template: `
    <rhc-column-layout [rule]="${rule}">
        <rhc-heading [level]="2">Column Layout</rhc-heading>
        <rhc-paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum magnam magni expedita modi sit quasi, natus nobis sint hic, eum illum quis laboriosam pariatur quo alias eaque qui quae recusandae?
        </rhc-paragraph>
    </rhc-column-layout>
    `,
    moduleMetadata: {
      imports: [HeadingComponent, ParagraphComponent],
    },
  }),
};

export default meta;

export const Default: StoryObj<ColumnLayoutComponent> = {
  name: 'Default',
};
