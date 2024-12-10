/* eslint-disable react/display-name */
import Twig from 'twig';

interface TwigTemplateProps {
  [index: string]: string | number;
}

export interface TwigRendererProps extends TwigTemplateProps {
  template: string;
}

export const TwigRenderer = ({ template, ...props }: TwigRendererProps) => {
  const renderer = Twig.twig({
    data: template,
  });
  const html = renderer.render(props);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export const createTwigComponent =
  <T,>(template: string) =>
  ({ ...props }: T) => <TwigRenderer template={template} {...props} />;
