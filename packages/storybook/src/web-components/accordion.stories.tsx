import { AccordionWebComponent, AccordionWebComponentAttributes } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/accordion/README.md?raw';
import { createElement } from 'react';
import { mergeMarkdown } from '../../helpers/merge-markdown';

AccordionWebComponent.define();

const AccordionWrapper = ({ appearance, icon, sections, heading, headingLevel }: AccordionWebComponentAttributes) => {
  return createElement('rhc-accordion', {
    appearance: appearance,
    icon: icon?.toString(),
    sections: JSON.stringify(sections),
    heading: heading,
    headingLevel: headingLevel?.toString(),
  });
};

const meta = {
  title: 'Web Components/Accordion',
  id: 'rhc-accordion-web',
  component: AccordionWrapper,
  argTypes: {
    appearance: {
      description: 'Appearance of the component',
      type: { name: 'string' },
      control: { type: 'select' },
      options: ['default', 'utrecht'],
    },
    heading: {
      type: { name: 'string' },
      control: 'text',
      description: 'Heading for the accordion, also needs a headingLevel',
    },
    headingLevel: {
      name: 'Heading Level',
      type: { name: 'string' },
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level for the accordion, also needs a heading text',
    },
    icon: {
      name: 'icon',
      description: 'Icon at the start',
      control: { type: 'select' },
      options: ['default', 'delta-omlaag'],
      mapping: {
        default: '',
      },
    },
    sections: {
      control: 'object',
      description: 'Array of sections in the accordion',
    },
  },
  args: {
    icon: 'default',
    heading: '',
    headingLevel: 0,
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-accordion',
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
  },
} as Meta<AccordionWebComponentAttributes>;

export default meta;

export const Default = {
  args: {
    sections: [
      {
        label: 'Lorem ipsum 1',
        body: `Lorem ipsum dolor sit amet.`,
        expanded: true,
      },
      {
        label: 'Lorem ipsum 2',
        body: `Lorem ipsum dolor sit amet.`,
        expanded: false,
      },
      {
        label: 'Lorem ipsum 3',
        body: `Lorem ipsum dolor sit amet.`,
        expanded: false,
      },
    ],
  },
} as StoryObj<typeof meta>;
