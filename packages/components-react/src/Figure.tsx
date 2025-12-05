export { FigureCaption, type FigureCaptionProps } from '@utrecht/component-library-react';
import { Figure as UtrechtFigure, FigureProps as UtrechtFigureProps } from '@utrecht/component-library-react';
import { PropsWithChildren } from 'react';
export type FigureProps = UtrechtFigureProps;

export const Figure = ({ children, ...props }: PropsWithChildren<FigureProps>) => {
  return <UtrechtFigure {...props}>{children}</UtrechtFigure>;
};
