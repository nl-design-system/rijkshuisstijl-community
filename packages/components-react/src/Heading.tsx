/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import {
  Heading as CandidateHeading,
  type HeadingProps as CandidateHeadingProps,
} from '@nl-design-system-candidate/heading-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';

export const headingLevels = [1, 2, 3, 4, 5] as const;

export type HeadingLevel = (typeof headingLevels)[number];

export interface HeadingProps extends Omit<CandidateHeadingProps, 'appearance'> {
  appearanceLevel?: HeadingLevel;
  level: HeadingLevel;
  ref?: Ref<HTMLHeadingElement>;
}

export const Heading = ({
  children,
  level,
  appearanceLevel = level,
  className,
  ref,
  ...restProps
}: PropsWithChildren<HeadingProps>) => {
  return (
    <CandidateHeading
      appearance={`level-${appearanceLevel}`}
      className={clsx('rhc-heading', className)}
      level={level}
      ref={ref}
      {...restProps}
    >
      {children}
    </CandidateHeading>
  );
};
