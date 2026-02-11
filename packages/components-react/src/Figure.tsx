/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Figure as UtrechtFigure, FigureProps as UtrechtFigureProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
export { FigureCaption, type FigureCaptionProps } from '@utrecht/component-library-react';
export type FigureProps = UtrechtFigureProps;

export const Figure = ({ className, ...props }: FigureProps) => {
  return <UtrechtFigure className={clsx('rhc-figure', className)} {...props}></UtrechtFigure>;
};
