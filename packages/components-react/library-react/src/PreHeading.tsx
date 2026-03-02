/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import {
  PreHeading as UtrechtPreHeading,
  type PreHeadingProps as UtrechtPreHeadingProps,
} from '@utrecht/component-library-react';
import { PropsWithChildren, ReactElement, Ref } from 'react';
import { HeadingProps } from './Heading';

export interface PreHeadingProps extends UtrechtPreHeadingProps {
  heading: ReactElement<HeadingProps>;
  ref?: Ref<HTMLParagraphElement>;
}

export const PreHeading = ({ ref, children, heading, ...restProps }: PropsWithChildren<PreHeadingProps>) => {
  return (
    <div className="rhc-heading-container" {...restProps}>
      {heading}
      <UtrechtPreHeading className={'rhc-pre-heading'} ref={ref}>
        {children}
      </UtrechtPreHeading>
    </div>
  );
};

PreHeading.displayName = 'PreHeading';
