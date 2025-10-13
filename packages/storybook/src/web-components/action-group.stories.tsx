import { ActionGroupWebComponent, ButtonWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { createElement } from 'react';
import reactMeta from '../components-react/action-group.stories';

ActionGroupWebComponent.define();
ButtonWebComponent.define();

const meta = {
  ...reactMeta,
  title: 'Action Group',
  id: 'rhc-action-group-web',
  component: 'rhc-action-group',
} as Meta<typeof ActionGroupWebComponent>;

export default meta;

export const Row = {
  args: {
    children: [
      createElement(
        'rhc-button',
        {
          appearance: 'primary-action-button',
          key: 'primary-action-button',
        },
        'Save and continue',
      ),
      createElement(
        'rhc-button',
        {
          appearance: 'secondary-action-button',
          key: 'secondary-action-button',
        },
        'Back',
      ),
    ],
    direction: 'row',
  },
} as StoryObj<typeof meta>;

export const Column = {
  args: {
    direction: 'column',
    children: [
      createElement(
        'rhc-button',
        {
          appearance: 'primary-action-button',
          key: 'primary-action-button',
        },
        'Save and continue',
      ),
      createElement(
        'rhc-button',
        {
          appearance: 'secondary-action-button',
          key: 'secondary-action-button',
        },
        'Back',
      ),
    ],
  },
  name: 'Column',
} as StoryObj<typeof meta>;

export const ColumnStretch = {
  args: {
    direction: 'column-stretch',
    children: [
      createElement(
        'rhc-button',
        {
          appearance: 'primary-action-button',
          key: 'primary-action-button',
        },
        'Save and continue',
      ),
      createElement(
        'rhc-button',
        {
          appearance: 'secondary-action-button',
          key: 'secondary-action-button',
        },
        'Back',
      ),
    ],
  },
  name: 'Column',
} as StoryObj<typeof meta>;
