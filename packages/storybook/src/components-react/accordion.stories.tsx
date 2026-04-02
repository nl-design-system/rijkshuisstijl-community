import { AccordionProvider, AccordionProviderProps } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/components/accordion/README.md?raw';
import { UtrechtIconChevronDown } from '@utrecht/web-component-library-react';
import usageDocs from './accordion-usage.md?raw';

const meta = {
  component: AccordionProvider,
  title: 'Accordion',
  id: 'rhc-accordion',
  args: {
    sections: [
      {
        label: '',
        body: '',
        expanded: false,
      },
    ],
    icon: undefined,
  },
  argTypes: {
    icon: {
      description: 'Icon at the start',
      control: { type: 'select' },
      options: ['', 'utrecht-icon-chevron-down'],
      mapping: {
        '': undefined,
        'utrecht-icon-chevron-down': <UtrechtIconChevronDown />,
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-accordion',
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme, usageDocs]),
      },
    },
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Accordion.tsx',
    figma:
      'https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/NL-Design-System---RHC-Bibliotheek?node-id=1261-4784&p=f&t=yhNWfojmtKDDjh16-0',
    nldesignsystem: 'https://www.nldesignsystem.nl/accordion/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
  },
} as Meta<AccordionProviderProps>;

export default meta;

type Story = StoryObj<typeof meta>;

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
    sections: [
      {
        label: 'Nederlandse lorem ipsum',
        body: 'De volle maan, tragisch dien avond, was reeds vroeg, nog in den laatsten dagschemer opgerezen als een immense, bloedroze bol, vlamde als een zonsondergang laag achter de tamarindeboomen der Lange Laan en steeg, langzaam zich louterende van hare tragische tint, in een vagen hemel op. Een doodsche stilte spande alom als een sluier van zwijgen, of, na de lange middagsiësta, de avondrust zonder overgang van leven begon.',
        expanded: true,
      },
    ],
  },
};
export const AccordionWithSections: Story = {
  args: {
    sections: accordionData,
  },
  name: 'Accordion with sections',
};

export const RTL: Story = {
  args: {
    sections: [
      {
        label: 'ما هو "لوريم إيبسوم" ؟',
        body: ' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div dir="rtl" lang="ar">
        {Story()}
      </div>
    ),
  ],
  name: 'Right-to-left',
};
