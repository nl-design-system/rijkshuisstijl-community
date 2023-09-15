/* @license CC0-1.0 */
import { FooterMenu } from '@nl-rvo/component-library-react/dist/css-module';
import type { Meta, StoryObj } from '@storybook/react';
import { Document, Heading1, Heading2, Page, PageFooter } from '@utrecht/component-library-react/dist/css-module';
import readme from './homePage.md?raw';

const PageTemplate = () => (
  <Document>
    <Page>
      <Heading1>Heading1</Heading1>
      <Heading2>Heading2</Heading2>
      <PageFooter>
        <FooterMenu
          heading="Service"
          links={[
            {
              textContent: 'Contact',
              href: '/contact',
            },
          ]}
        ></FooterMenu>
      </PageFooter>
    </Page>
  </Document>
);

const meta = {
  title: 'RIVM/Template/Example Page',
  id: 'rivm-template',
  component: PageTemplate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof PageTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExamplePage: Story = {
  name: 'Example page',
};
