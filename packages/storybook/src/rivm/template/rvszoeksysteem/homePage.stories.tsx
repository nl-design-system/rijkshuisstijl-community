/* @license CC0-1.0 */
import { FooterMenu } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtPage
} from '@utrecht/web-component-library-react';
import readme from './homePage.md?raw';

const meta = {
  title: 'RIVM/Template/Example Page',
  id: 'rivm-template',
  component: UtrechtPage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Page>;

export default meta;

export const Page = {
  name: "Example page",
  render: () =>
  <UtrechtPage>
    <UtrechtHeading1>UtrechtHeading1</UtrechtHeading1>
    <UtrechtHeading2>UtrechtHeading2</UtrechtHeading2>
  </UtrechtPage>
};
