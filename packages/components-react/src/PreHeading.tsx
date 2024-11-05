import {
  PreHeading as UtrechtPreHeading,
  type PreHeadingProps as UtrechtPreHeadingProps,
} from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactElement } from 'react';
import { HeadingProps } from './Heading';

export interface PreHeadingProps extends UtrechtPreHeadingProps {
  heading: ReactElement<HeadingProps>;
}

export const PreHeading = forwardRef(
  (
    { children, heading, ...restProps }: PropsWithChildren<PreHeadingProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => {
    return (
      <div className={'rhc-heading-container'} {...restProps}>
        {heading}
        <UtrechtPreHeading className={'rhc-pre-heading'} ref={ref}>
          {children}
        </UtrechtPreHeading>
      </div>
    );
  },
);

PreHeading.displayName = 'PreHeading';
