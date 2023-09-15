/* @license CC0-1.0 */
import { FooterMenu } from '@nl-rvo/component-library-react/dist/css-module';
import type { Meta, StoryObj } from '@storybook/react';
import { UtrechtHeading1, UtrechtHeading2, UtrechtPage, UtrechtPageFooter } from '@utrecht/web-component-library-react';
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

type Story = StoryObj<typeof meta>;

export const Page: Story = {
  name: 'Example page',
  render: () => (
    <UtrechtPage>
      <UtrechtHeading1>UtrechtHeading1</UtrechtHeading1>
      <UtrechtHeading2>UtrechtHeading2</UtrechtHeading2>
      <UtrechtPageFooter>
        <FooterMenu
          heading="Service"
          links={[
            {
              textContent: 'Contact',
              href: '/contact',
            },
          ]}
        ></FooterMenu>
      </UtrechtPageFooter>
    </UtrechtPage>
  ),
};
