import {
  Blockquote,
  Heading,
  Image,
  Keep,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';
import { Article } from '@utrecht/component-library-react';
import readme from './keep.md?raw';

const childrenOptions = {
  Blockquote: (
    <Blockquote attribution="— Pippi Langkous" variation="pink-background">
      Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan
    </Blockquote>
  ),
  Image: <Image alt="Multicolored tulip field" height={763} src="./placeholder.jpg" width={640} />,
  Vormtaal: [
    <Image alt="Multicolored tulip field" height={763} src="./placeholder.jpg" width={640} />,
    <Blockquote
      attribution="— Pippi Langkous"
      className="rhc-keep-child-top-left rhc-keep-child__horizontal-lg"
      variation="pink-background"
    >
      Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan
    </Blockquote>,
    <Article
      className="rhc-keep-child-bottom-left rhc-keep-child__horizontal-full rhc-keep-child__vertical-md"
      style={{ backgroundColor: '#dce3ea', paddingBlock: '10px', paddingInline: '10px' }}
    >
      <Heading appearance="utrecht-heading-3" level={1}>
        Draadloze oplossingen voor Nederlanders zonder toegang tot snel vast internet
      </Heading>
      <Paragraph>
        Nederland behoort als het gaat om aanbod en kwaliteit van snel vast internet (1 Gigabit per seconde) tot de
        wereldtop. 99% van de huishoudens en bedrijven kan hier inmiddels toegang toe krijgen.
      </Paragraph>
      <UnorderedList>
        <UnorderedListItem>List item 1</UnorderedListItem>
        <UnorderedListItem>List item 2</UnorderedListItem>
        <UnorderedListItem>List item 3</UnorderedListItem>
      </UnorderedList>
    </Article>,
  ],
};

const meta = {
  title: 'Rijkshuisstijl/Keep',
  id: 'rhc-keep',
  component: Keep,
  argTypes: {
    keepCorner: {
      control: { type: 'select' },
      options: ['top-left', 'bottom-left', 'top-right', 'bottom-right'],
    },
    borderRadius: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
    },
    children: {
      control: { type: 'select' },
      options: ['Vormtaal', 'Blockquote', 'Image'],
      mapping: childrenOptions,
      name: 'Component',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Keep>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    keepCorner: 'top-right',
    borderRadius: 'm',
    children: 'Vormtaal',
  },
};
