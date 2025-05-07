import { FigureCaptionComponent, FigureComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<FigureComponent> = {
  title: 'Rijkshuisstijl-angular/Figure',
  id: 'rhc-angular-figure',
  component: FigureComponent,
  render: () => ({
    template: `
    <figure rhc-figure>
    <img rhc-image src="https://placehold.co/150x150" alt="Placeholder image" width="150" height="150" />
    <figcaption rhc-figure-caption>
      <p>Placeholder image</p>
    </figcaption>
    </figure>`,
    moduleMetadata: {
      imports: [FigureCaptionComponent],
    },
  }),
};

export default meta;

export const Default: StoryObj<FigureComponent> = {};
