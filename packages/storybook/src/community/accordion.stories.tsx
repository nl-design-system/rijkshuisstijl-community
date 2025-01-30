import { AccordionProvider, AccordionSectionProps } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/accordion/README.md?raw';
import { UtrechtIconChevronDown } from '@utrecht/web-component-library-react';
import { ReactNode } from 'react';
import usageDocs from './accordion-usage.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

interface AccordionStoryProps {
  label: string;
  body: ReactNode;
  expanded?: boolean;
  expandedAccordion?: boolean;
  icon?: ReactNode;
  appearance?: string;
  sections?: AccordionSectionProps[];
}

const AccordionStory = ({ expanded, label, body, appearance, icon, sections }: AccordionStoryProps) => (
  <AccordionProvider appearance={appearance} icon={icon} sections={sections || [{ expanded, label, body }]} />
);

const meta = {
  title: 'Rijkshuisstijl/Accordion',
  id: 'rhc-accordion',
  args: {
    label: '',
    body: '',
    expandedAccordion: false,
    appearance: '',
    icon: undefined,
  },
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      table: {
        defaultValue: { summary: '' },
        category: 'API',
      },
    },
    body: {
      name: 'body',
      type: { name: 'string', required: true },
      table: {
        defaultValue: { summary: '' },
        category: 'API',
      },
    },
    expandedAccordion: {
      name: 'expandedAccordion',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: '' },
        category: 'API',
      },
    },
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'utrecht'],
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
    github: 'https://github.com/nl-design-system/rijkshuisstijl-community/issues/456',
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
    label: 'Lorem ipsum 1!!',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
    expanded: true,
  },
  {
    label: 'Lorem ipsum 2!!',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
    expanded: true,
  },
  {
    label: 'Lorem ipsum 3',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
    expanded: true,
  },
];

export const Default: Story = {
  args: {
    sections: accordionData,
  },
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
