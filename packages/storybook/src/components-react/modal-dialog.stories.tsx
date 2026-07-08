import { Button, Link, ModalDialog, Paragraph } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from './modal-dialog.md?raw';

const demoId = 'rhc-modal-dialog-demo';

const meta = {
  title: 'Modal Dialog',
  id: 'rhc-modal-dialog',
  component: ModalDialog,
  args: {
    heading: 'Feedback',
    closeButtonLabel: 'Sluiten',
    children: (
      <>
        <Paragraph>
          Helpt u ons nog verder door een enquete hierover in te vullen? De enquete opent in een ander tabblad. Het duurt
          ongeveer 1 minuut.
        </Paragraph>
        <Link href="#">Bekijk voorwaarden</Link>
      </>
    ),
    footer: <Button appearance="primary-action-button">Ja ik doe mee</Button>,
  },
  argTypes: {
    heading: {
      control: 'text',
      description: 'De titel van de dialog',
    },
    closeButtonLabel: {
      control: 'text',
      description: 'Het label voor de sluitknop',
    },
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma and NL Design System links
    componentOrigin:
      'Dit component gebruikt de dialoog-CSS van de Gemeente Amsterdam, met een Heading en sluitknop van de Rijkshuisstijl Community en RHC-tokens.',
  },
  render: (args) => (
    <>
      <Button onClick={() => ModalDialog.open(`#${demoId}`)}>Open dialog</Button>
      <ModalDialog {...args} id={demoId} />
    </>
  ),
} satisfies Meta<typeof ModalDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
