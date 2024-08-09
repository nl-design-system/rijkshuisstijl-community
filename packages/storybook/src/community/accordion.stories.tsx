import { AccordionProvider, AccordionSectionProps } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import { UtrechtIconChevronDown } from '@utrecht/web-component-library-react';
import { ReactNode } from 'react';
import readme from './accordion.md?raw';

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
  <AccordionProvider icon={icon} appearance={appearance} sections={sections || [{ expanded, label, body }]} />
);

const meta = {
  title: 'Rijkshuisstijl/Accordion',
  id: 'react-accordion',
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
        defaultValue: { summary: false },
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
      options: {
        '': undefined,
        null: null,
        'utrecht-icon-chevron-down': <UtrechtIconChevronDown />,
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-accordion',
    docs: {
      description: {
        component: readme,
      },
    },
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
    label: 'Lorem ipsum 1',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
    expandedAccordion: true,
  },
  {
    label: 'Lorem ipsum 2',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
    expandedAccordion: false,
  },
  {
    label: 'Lorem ipsum 3',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
    expandedAccordion: false,
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
      <div lang="ar" dir="rtl">
        {Story()}
      </div>
    ),
  ],
  name: 'Right-to-left',
};
