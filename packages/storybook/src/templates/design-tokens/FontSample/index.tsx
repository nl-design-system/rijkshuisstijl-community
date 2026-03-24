import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import './index.css';

export const FontSample = ({
  children,
  className,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
}: PropsWithChildren<
  {
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: string;
  } & HTMLAttributes<HTMLDivElement>
>) => (
  <div className={clsx('rhc-font-sample', className)} style={{ fontFamily, fontWeight, fontSize, lineHeight }}>
    {children}
  </div>
);
