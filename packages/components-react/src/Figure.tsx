export { FigureCaption, type FigureCaptionProps } from '@utrecht/component-library-react';
import { Figure as UtrechtFigure, FigureProps as UtrechtFigureProps } from '@utrecht/component-library-react';
import { CSSProperties } from 'react';
import { PropsWithChildren } from 'react';
export interface FigureProps extends UtrechtFigureProps {
  borderEndEndRadius?: string | number;
  borderEndStartRadius?: string | number;
  borderStartEndRadius?: string | number;
  borderStartStartRadius?: string | number;
}

export const Figure = ({
  borderEndEndRadius,
  borderEndStartRadius,
  borderStartEndRadius,
  borderStartStartRadius,
  children,
  ...restProps
}: PropsWithChildren<FigureProps>) => {
  return (
    <UtrechtFigure
      style={
        {
          '--utrecht-figure-img-border-end-end-radius': `${borderEndEndRadius}px`,
          '--utrecht-figure-img-border-end-start-radius': `${borderEndStartRadius}px`,
          '--utrecht-figure-img-border-start-end-radius': `${borderStartEndRadius}px`,
          '--utrecht-figure-img-border-start-start-radius': `${borderStartStartRadius}px`,
        } as unknown as CSSProperties
      }
      {...restProps}
    >
      {children}
    </UtrechtFigure>
  );
};
