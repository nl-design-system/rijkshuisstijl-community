import { FigureCaptionComponent, FigureComponent, ImageComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<FigureComponent> = {
  title: 'Rijkshuisstijl-angular/Figure',
  id: 'rhc-angular-figure',
  component: FigureComponent,
  render: ({ borderEndEndRadius, borderEndStartRadius, borderStartEndRadius, borderStartStartRadius }) => ({
    template: `
    <figure rhc-figure [borderEndEndRadius]=${borderEndEndRadius} [borderEndStartRadius]=${borderEndStartRadius} [borderStartEndRadius]=${borderStartEndRadius} [borderStartStartRadius]=${borderStartStartRadius}>
    <img rhc-image src="./placeholder.jpg" alt="Multicolored tulip field" width="640" height="763" />
    <figcaption rhc-figure-caption>
      <p>Bijschrift (figcaption) van afbeelding.</p>
    </figcaption>
    </figure>`,
    moduleMetadata: {
      imports: [FigureCaptionComponent, ImageComponent],
    },
  }),
  args: {
    borderEndEndRadius: undefined,
    borderEndStartRadius: undefined,
    borderStartEndRadius: undefined,
    borderStartStartRadius: undefined,
  },
  argTypes: {
    borderEndEndRadius: {
      description: 'Bottom right corner radius of the image in pixels',
      type: { name: 'number', required: false },
      control: { type: 'range', min: 0, max: 80, step: 8 },
    },
    borderEndStartRadius: {
      description: 'Bottom left corner radius of the image in pixels',
      type: { name: 'number', required: false },
      control: { type: 'range', min: 0, max: 80, step: 8 },
    },
    borderStartEndRadius: {
      description: 'Top right corner radius of the image in pixels',
      type: { name: 'number', required: false },
      control: { type: 'range', min: 0, max: 80, step: 8 },
    },
    borderStartStartRadius: {
      description: 'Top left corner radius of the image in pixels',
      type: { name: 'number', required: false },
      control: { type: 'range', min: 0, max: 80, step: 8 },
    },
  },
};

export default meta;

export const Default: StoryObj<FigureComponent> = {};
