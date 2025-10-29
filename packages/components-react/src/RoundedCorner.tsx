import clsx from 'clsx';
import { ComponentPropsWithoutRef, CSSProperties, ElementType } from 'react';

type Size = 'sm' | 'md' | 'lg';
type Corner = 'start-start' | 'start-end' | 'end-start' | 'end-end';

type SuggestedTokens = {
  '--rhc-rounded-corner-radius': CSSProperties['borderRadius'];
  '--rhc-rounded-corner-overflow': CSSProperties['overflow'];
};

type OverwriteTokens = Partial<SuggestedTokens & Record<string, string>>;

export type RoundedCornerProps<T extends ElementType> = {
  size?: Size; // We need to make size optional as otherwise --rhc-rounded-corner-radius will always be overridden by size class
  corner: Corner;
  as?: T;
  overwriteTokens?: OverwriteTokens;
} & ComponentPropsWithoutRef<T>;

export const RoundedCorner = <T extends ElementType = 'div'>({
  size,
  corner,
  as,
  overwriteTokens,
  ...props
}: RoundedCornerProps<T>) => {
  const className = clsx(
    'rhc-rounded-corner',
    {
      [`rhc-rounded-corner--size-${size}`]: size,
      [`rhc-rounded-corner--corner-${corner}`]: corner,
    },
    props['className'],
  );
  const Component = as || 'div';
  return <Component {...props} className={className} style={{ ...overwriteTokens, ...props['style'] }} />;
};
