import { HeadingComponent, headingLevels } from '@rijkshuisstijl-community/components-angular';
import { type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<HeadingComponent> = {
  title: 'Rijkshuisstijl-angular/Heading',
  id: 'rhc-angular-heading',
  component: HeadingComponent,
  argTypes: {
    level: {
      description: 'Heading level',
      options: headingLevels,
      control: { type: 'select' },
      required: true,
    },
    appearanceLevel: {
      options: headingLevels,
      control: { type: 'select' },
    },
  },
  args: {
    level: 1,
  },
  render: ({ level, appearanceLevel }) => ({
    template: `<rhc-heading [level]=${level} ${appearanceLevel ? `[appearanceLevel]=${appearanceLevel}` : ''}>
    Lorem ipsum dolor
    </rhc-heading>`,
    props: {
      level,
      appearanceLevel,
    },
  }),
};

export default meta;

export const Heading1: StoryObj<HeadingComponent> = {
  args: {
    level: 1,
  },
  name: 'Heading 1',
};

export const Heading2: StoryObj<HeadingComponent> = {
  args: {
    level: 2,
  },
  name: 'Heading 2',
};

export const Heading3: StoryObj<HeadingComponent> = {
  args: {
    level: 3,
  },
  name: 'Heading 3',
};

export const Heading4: StoryObj<HeadingComponent> = {
  args: {
    level: 4,
  },
  name: 'Heading 4',
};

export const Heading5: StoryObj<HeadingComponent> = {
  args: {
    level: 5,
  },
  name: 'Heading 5',
};

export const AppearanceLevel1: StoryObj<HeadingComponent> = {
  args: {
    level: 5,
    appearanceLevel: 1,
  },
  name: 'Appearance Level 1',
};
