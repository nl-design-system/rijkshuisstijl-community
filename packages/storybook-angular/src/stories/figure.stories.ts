import { FigureCaptionComponent, FigureComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<FigureComponent> = {
  title: 'Rijkshuisstijl-angular/Figure',
  id: 'rhc-angular-figure',
  component: FigureComponent,
  render: () => ({
    template: `
    <figure rhc-figure>
    <img rhc-image src="./placeholder.jpg" alt="Multicolored tulip field" width="640" height="763" />
    <figcaption rhc-figure-caption>
      <p>Bijschrift (figcaption) van afbeelding.</p>
    </figcaption>
    </figure>`,
    moduleMetadata: {
      imports: [FigureCaptionComponent],
    },
  }),
};

export default meta;

export const Default: StoryObj<FigureComponent> = {};
