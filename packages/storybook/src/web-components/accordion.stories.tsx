import { mergeMarkdown } from '@rijkshuisstijl-community/internal-tooling/markdownUtils';
import { AccordionWebComponent, AccordionWebComponentAttributes } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/components/accordion/README.md?raw';
import { createElement } from 'react';

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
  title: 'Accordion',
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
    // TODO: add Figma and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/Accordion.tsx',
  },
} as Meta<AccordionWebComponentAttributes>;

export default meta;

export const Default = {
  args: {
    sections: [
      {
        label: 'Lorem ipsum standaard',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        expanded: true,
      },
      {
        label: 'Hipster lorem ipsum',
        body: "Humblebrag mixtape sus, cornhole woke mlkshk cardigan twee cronut. Health goth vape adaptogen actually vegan, viral austin kinfolk trust fund paleo PBR&B literally skateboard woke. Echo park ugh fit cupping affogato, lyft asymmetrical portland live-edge franzen you probably haven't heard of them meh VHS chambray. Narwhal fam prism slow-carb yes plz. Fam edison bulb kitsch disrupt deep v big mood, JOMO church-key pop-up chicharrones pork belly glossier. Pinterest freegan swag mumblecore prism.",
        expanded: false,
      },
      {
        label: 'Nederlandse lorem ipsum',
        body: 'De volle maan, tragisch dien avond, was reeds vroeg, nog in den laatsten dagschemer opgerezen als een immense, bloedroze bol, vlamde als een zonsondergang laag achter de tamarindeboomen der Lange Laan en steeg, langzaam zich louterende van hare tragische tint, in een vagen hemel op. Een doodsche stilte spande alom als een sluier van zwijgen, of, na de lange middagsiësta, de avondrust zonder overgang van leven begon.',
        expanded: false,
      },
    ],
  },
} as StoryObj<typeof meta>;
