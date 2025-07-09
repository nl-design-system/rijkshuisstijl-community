/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@utrecht/component-library-react';
import readme from './alert.md?raw';
import { Alert } from '../../../components-react/src/Alert';
import { Heading } from '../../../components-react/src/Heading';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/Alert',
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
  },
  args: {
    type: 'info',
    children: [
      <Heading appearanceLevel={5} level={2}>
        Dus..
      </Heading>,
      <Paragraph>
        Sedert jaren vraag ik mij af, waartoe zulke dingen dienen, en ik sta verbaasd over de onbeschaamdheid, waarmee
        een dichter of romanverteller u iets op de mouw durft spelden, dat nooit gebeurd is, en meestal niet gebeuren
        kan.
      </Paragraph>,
    ],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: disconnect "Usage" from the current readme, import the readme from Utrecht afterwards and combine with our own Usage
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1195-4201&t=n1djYpmvDCKmAEUi-0',
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
  },
};

export const Negative: StoryObj<typeof meta> = {
  args: {
    type: 'error',
  },
};

export const Positive: StoryObj<typeof meta> = {
  args: {
    type: 'ok',
    children: (
      <Paragraph>
        Als ik in mijn vak -- ik ben makelaar in koffie, en woon op de Lauriergracht No 37 -- aan een principaal -- een
        principaal is iemand die koffie verkoopt -- een opgave deed, waarin maar een klein gedeelte der onwaarheden
        voorkwam, die in gedichten en romans de hoofdzaak uitmaken, zou hij terstond Busselinck &amp; Waterman nemen.
      </Paragraph>
    ),
  },
};

export const Warning: StoryObj<typeof meta> = {
  args: {
    type: 'warning',
  },
};
