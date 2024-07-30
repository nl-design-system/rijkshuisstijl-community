/* @license CC0-1.0 */

import {
  RhcIconError,
  RhcIconInfo,
  RhcIconSuccess,
  RhcIconWarning,
} from '@rijkshuisstijl-community/web-components-react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Heading, Icon, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import readme from './alert.md?raw';

interface AlertStoryComponentProps {
  type: string;
  icon?: string;
  heading: string;
  textContent: string;
  headingLevel: number;
}

const AlertStoryComponent = ({ type, icon, heading, textContent, headingLevel }: AlertStoryComponentProps) => {
  const RhcIcon = () =>
    icon === 'info' ? (
      <RhcIconInfo></RhcIconInfo>
    ) : icon === 'success' ? (
      <RhcIconSuccess></RhcIconSuccess>
    ) : icon === 'warning' ? (
      <RhcIconWarning></RhcIconWarning>
    ) : icon === 'error' ? (
      <RhcIconError></RhcIconError>
    ) : (
      <></>
    );

  return (
    <Alert type={type}>
      {icon && (
        <Icon slot="icon">
          <RhcIcon />
        </Icon>
      )}
      <Heading level={headingLevel}>{heading}</Heading>
      <Paragraph>{textContent}</Paragraph>
    </Alert>
  );
};

const meta = {
  title: 'Logius/Alert',
  id: 'logius-alert',
  component: AlertStoryComponent,
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
      description: 'Alert Icon',
      control: { type: 'select' },
      options: ['', 'info', 'error', 'warning', 'succes'],
      table: {
        category: 'Webcomponent Slot',
      },
    },
    heading: {
      description: 'Alert heading - used in default webcomponent slot',
      type: {
        name: 'string',
      },
      table: {
        category: 'Demo',
      },
    },
    headingLevel: {
      description: 'Alert heading level',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      table: {
        category: 'Demo',
      },
    },
    textContent: {
      description: 'Alert content - used in default webcomponent slot',
      type: {
        name: 'string',
      },
      table: {
        category: 'Demo',
      },
    },
  },
  args: {
    type: 'info',
    icon: 'info',
    heading: 'Heading',
    headingLevel: 3,
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: AlertStoryComponent,
} as Meta<typeof AlertStoryComponent>;

export default meta;

export const Informative: StoryObj<typeof meta> = {
  args: {
    type: 'info',
    icon: 'info',
    heading: 'Heading',
    headingLevel: 3,
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
};

export const Negative: StoryObj<typeof meta> = {
  args: {
    type: 'error',
    icon: 'error',
    heading: 'Heading',
    headingLevel: 3,
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
};

export const Positive: StoryObj<typeof meta> = {
  args: {
    type: 'succes',
    icon: 'succes',
    heading: 'Heading',
    headingLevel: 3,
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
};

export const Warning: StoryObj<typeof meta> = {
  args: {
    type: 'warning',
    icon: 'warning',
    heading: 'Heading',
    headingLevel: 3,
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *',
  },
};
