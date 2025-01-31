import { Heading as CandidateHeading, type HeadingProps as CandidateHeadingProps } from '@nl-design-system-candidate/heading-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5;

export interface HeadingProps extends Omit<CandidateHeadingProps, 'appearance'> {
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
    <CandidateHeading
      appearance={`level-${appearanceLevel ?? level}`}
      className={clsx('rhc-heading', className)}
      level={level}
      ref={ref}
      {...restProps}
    >
      {children}
    </CandidateHeading>
  );
};
