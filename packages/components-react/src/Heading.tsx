import { Heading as UtrechtHeading, type HeadingProps as UtrechtHeadingProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5;

export interface HeadingProps extends Omit<UtrechtHeadingProps, 'appearance'> {
  appearanceLevel?: HeadingLevel;
  level: HeadingLevel;
  ref?: Ref<HTMLHeadingElement>;
}

export const Heading = ({
  children,
  appearanceLevel,
  level,
  className,
  ref,
  ...restProps
}: PropsWithChildren<HeadingProps>) => {
  return (
    <UtrechtHeading
      appearance={`utrecht-heading-${appearanceLevel ?? level}`}
      className={clsx('rhc-heading', className)}
      level={level}
      ref={ref}
      {...restProps}
    >
      {children}
    </UtrechtHeading>
  );
};
