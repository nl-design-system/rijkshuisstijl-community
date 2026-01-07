import { Alert, Heading, Paragraph } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from './alert.md?raw';

const meta = {
  title: 'Alert',
  id: 'rhc-alert',
  component: Alert,
  argTypes: {
    type: {
      description: 'Alert type',
      control: { type: 'select' },
      options: ['info', 'error', 'warning', 'ok'],
      table: {
        category: 'Property',
      },
    },
    icon: {
      description: 'Alert icon',
      type: { name: 'string' },
      table: {
        category: 'Property',
      },
    },
  },
  args: {
    type: 'info',
    children: [
      <Heading key="heading" level={3}>
        Heading
      </Heading>,
      <Paragraph key="paragraph">
        Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
      </Paragraph>,
    ],
  },
  parameters: {
    docs: {
      description: {
        // TODO: disconnect "Usage" from the current readme, import the readme from Utrecht afterwards and combine with our own Usage
        component: mergeMarkdown([readme]),
      },
    },
    figma: 'https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/NL-Design-System---RHC-Bibliotheek?node-id=1179-3892',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Alert.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/alert/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof Alert>;

export default meta;

export const Informative: StoryObj<typeof meta> = {
  args: {
    type: 'info',
    children: [
      <Heading appearanceLevel={5} key="heading" level={3}>
        Heading
      </Heading>,
      <Paragraph key="paragraph">
        Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
      </Paragraph>,
    ],
  },
};

export const Negative: StoryObj<typeof meta> = {
  args: {
    type: 'error',
    children: [
      <Heading appearanceLevel={5} key="heading" level={3}>
        Heading
      </Heading>,
      <Paragraph key="paragraph">
        Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
      </Paragraph>,
    ],
  },
};
export const Positive: StoryObj<typeof meta> = {
  args: {
    type: 'ok',
    children: [
      <Heading appearanceLevel={5} key="heading" level={3}>
        Heading
      </Heading>,
      <Paragraph key="paragraph">
        Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
      </Paragraph>,
    ],
  },
};

export const Warning: StoryObj<typeof meta> = {
  args: {
    type: 'warning',
    children: [
      <Heading appearanceLevel={5} key="heading" level={3}>
        Heading
      </Heading>,
      <Paragraph key="paragraph">
        Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
      </Paragraph>,
    ],
  },
};
