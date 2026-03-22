import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import './index.css';

export const LineHeightSample = ({
  children,
  className,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
}: PropsWithChildren<
  {
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: string;
  } & HTMLAttributes<HTMLDivElement>
>) => (
  <div
    className={clsx('rhc-line-height-sample', className)}
    style={{
      fontFamily,
      fontWeight,
      fontSize,
      lineHeight,
    }}
  >
    {children}
  </div>
);
