import { DescriptionListComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<DescriptionListComponent> = {
  title: 'Rijkshuisstijl-angular/Description list',
  id: 'rhc-description-list',
  component: DescriptionListComponent,
  argTypes: {
    caption: {
      description: 'Caption of the description list',
      control: 'text',
    },
    items: {
      description: 'Items of the description list',
    },
  },
  args: {},
};

export default meta;

export const Default: StoryObj<DescriptionListComponent> = {
  args: {
    items: [
      {
        detail: 'A large feline inhabiting Bodmin Moor.',
        title: 'Beast of Bodmin',
      },
      {
        detail: 'A sea serpent.',
        title: 'Morgawr',
      },
      {
        detail: 'A giant owl-like creature.',
        title: 'Owlman',
      },
    ],
  },
  name: 'Default',
};

export const WithCaption: StoryObj<DescriptionListComponent> = {
  args: {
    caption: 'Cryptids of Cornwall',
    items: [
      {
        detail: 'A large feline inhabiting Bodmin Moor.',
        title: 'Beast of Bodmin',
      },
      {
        detail: 'A sea serpent.',
        title: 'Morgawr',
      },
      {
        detail: 'A giant owl-like creature.',
        title: 'Owlman',
      },
    ],
  },
  name: 'With caption',
};
