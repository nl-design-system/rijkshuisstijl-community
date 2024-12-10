/* eslint-disable react/display-name */
import Twig from 'twig';

interface TwigTemplateProps {
  [index: string]: string | number;
}

export interface TwigRendererProps extends TwigTemplateProps {
  template: string;
}

export const TwigRenderer = ({ template, ...props }: TwigRendererProps) => {
  const attrs: { [index: string]: string } = {};
  const dataAttributes = Object.entries(props).reduce((dataSet, [key, value]) => {
    (dataSet as any)[`data-${key}`] = value;
    return dataSet;
  }, attrs);
  return <rhc-twig template={template} {...dataAttributes} />;
};

export const createTwigComponent =
  <T,>(template: string) =>
  ({ ...props }: T) => <TwigRenderer template={template} {...props} />;

/**
 * Example usage:
 * <rhc-twig template="...twig template..." data-exampleValue="42"></rhc-twig>
 */
export class RhcTwigElement extends HTMLElement {
  static tagName = 'rhc-twig';
  static define = () => customElements.define(RhcTwigElement.tagName, RhcTwigElement);

  connectedCallback() {
    const template = this.getAttribute('template');

    const renderer = Twig.twig({
      data: template,
    });

    this.innerHTML = renderer.render(this.dataset);
  }
}

RhcTwigElement.define();
