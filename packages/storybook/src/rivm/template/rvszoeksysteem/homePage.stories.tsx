/* @license CC0-1.0 */
import { Logo } from '@nl-rvo/component-library-react/dist/css-module';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  Checkbox,
  Document,
  FormField,
  FormLabel,
  Heading1,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  Textbox,
} from '@utrecht/component-library-react/dist/css-module';
import readme from './homePage.md?raw';
import {} from '@utrecht/component-library-react';

const PageTemplate = () => (
  <Document>
    <Page>
      <PageHeader>
        <Logo
          title="Rijksinstituut voor Volksgezondheid en Milieu"
          subtitle="Ministerie van Volksgezondheid, Welzijn en Sport"
        ></Logo>
      </PageHeader>

      <PageContent>
        <Heading1>Zoeksysteem Risico&#39;s van stoffen</Heading1>
        <Paragraph>Vul je zoekterm(en) in</Paragraph>

        <FormField type="text">
          <Paragraph>
            <FormLabel>Stofnaam</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textbox />
          </Paragraph>
        </FormField>

        <FormField type="checkbox">
          <Paragraph className="utrecht-form-field__label utrecht-form-field__label--checkbox">
            <FormLabel type="checkbox">
              <Checkbox className="utrecht-form-field__input" name="exact" />
              Zoek exact
            </FormLabel>
          </Paragraph>
        </FormField>

        <FormField type="text">
          <Paragraph>
            <FormLabel>Cas-nummer(s)</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textbox />
          </Paragraph>
        </FormField>

        <FormField type="text">
          <Paragraph>
            <FormLabel>EG-nummer(s)</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textbox />
          </Paragraph>
        </FormField>

        <Button appearance="primary-action-button" type="button">
          Zoeken
        </Button>
      </PageContent>
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
