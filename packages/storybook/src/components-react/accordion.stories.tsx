import { AccordionProvider, AccordionSectionProps } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/components/accordion/README.md?raw';
import { UtrechtIconChevronDown } from '@utrecht/web-component-library-react';
import { ReactNode } from 'react';
import usageDocs from './accordion-usage.md?raw';

interface AccordionStoryProps {
  label: string;
  body: ReactNode;
  expanded?: boolean;
  expandedAccordion?: boolean;
  icon?: ReactNode;
  sections?: AccordionSectionProps[];
}

const AccordionStory = ({ expanded, label, body, icon, sections }: AccordionStoryProps) => (
  <AccordionProvider icon={icon} sections={sections || [{ expanded, label, body }]} />
);

const meta = {
  component: AccordionStory,
  title: 'Accordion',
  id: 'rhc-accordion',
  args: {
    label: '',
    body: '',
    expanded: false,
    icon: undefined,
  },
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      defaultValue: { summary: '' },
    },
    body: {
      name: 'body',
      type: { name: 'string', required: true },
      defaultValue: { summary: '' },
    },
    expanded: {
      name: 'expanded',
      type: { name: 'boolean', required: false },
      defaultValue: { summary: '' },
    },
    icon: {
      name: 'icon',
      description: 'Icon at the start',
      control: { type: 'select' },
      options: ['', null, 'utrecht-icon-chevron-down'],
      mapping: {
        '': undefined,
        null: null,
        'utrecht-icon-chevron-down': <UtrechtIconChevronDown />,
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-accordion',
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme, usageDocs]),
      },
    },
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Accordion.tsx',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1261-4784&p=f&t=SHnEVcZMmxKnZVS8-0',
    nldesignsystem: 'https://www.nldesignsystem.nl/accordion/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
  },
  render: AccordionStory,
} satisfies Meta<AccordionStoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const accordionDefaultDataAR = {
  label: 'ما هو "لوريم إيبسوم" ؟',
  body: ' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.',
};

const accordionData = [
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
];

export const Default: Story = {
  args: {
    label: 'Nederlandse lorem ipsum',
    body: 'De volle maan, tragisch dien avond, was reeds vroeg, nog in den laatsten dagschemer opgerezen als een immense, bloedroze bol, vlamde als een zonsondergang laag achter de tamarindeboomen der Lange Laan en steeg, langzaam zich louterende van hare tragische tint, in een vagen hemel op. Een doodsche stilte spande alom als een sluier van zwijgen, of, na de lange middagsiësta, de avondrust zonder overgang van leven begon.',
    expanded: true,
  },
};

export const AccordionWithSections: Story = {
  args: {
    sections: accordionData,
    expanded: true,
  },
  name: 'Accordion with sections',
};

export const RTL: Story = {
  args: accordionDefaultDataAR,
  decorators: [
    (Story) => (
      <div dir="rtl" lang="ar">
        {Story()}
      </div>
    ),
  ],
  name: 'Right-to-left',
};
