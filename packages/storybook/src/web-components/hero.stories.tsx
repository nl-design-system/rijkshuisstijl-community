import { HeroWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/web-components';
HeroWebComponent.define();

const meta = {
  title: 'Web Components/Hero',
  id: 'rhc-hero-web',
  component: 'rhc-hero',
  args: {
    aspectRatio: '16 / 9',
    heading: 'heading text',
    heroMessage: 'true',
    imageAlt: 'image alt text',
    subHeading: 'sub heading text',
    textAlign: 'start',
    borderRadiusCorner: 'start-start',
    headingLevel: 3,
    imageSrc:
      'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: 'Hero',
      },
    },
  },
} as Meta<typeof HeroWebComponent>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
