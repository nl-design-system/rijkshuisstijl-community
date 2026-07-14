/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Heading, HeadingLevel } from '@rijkshuisstijl-community/heading-react';
import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, ReactNode, Ref } from 'react';

export interface QuoteProps extends HTMLAttributes<HTMLDivElement> {
  /** Optional bold heading rendered above the body. */
  heading?: ReactNode;
  /** Semantic heading level (h1-h6). Defaults to 2. */
  headingLevel?: HeadingLevel;
  /** Visual heading level, when it should differ from the semantic level. */
  headingAppearanceLevel?: HeadingLevel;
  ref?: Ref<HTMLDivElement>;
}

export const Quote = ({
  ref,
  heading,
  headingLevel = 2,
  headingAppearanceLevel = headingLevel,
  className,
  children,
  ...restProps
}: PropsWithChildren<QuoteProps>) => {
  return (
    <div className={clsx('rhc-quote', className)} ref={ref} {...restProps}>
      {heading && (
        <Heading appearanceLevel={headingAppearanceLevel} className="rhc-quote__heading" level={headingLevel}>
          {heading}
        </Heading>
      )}
      <div className="rhc-quote__content">{children}</div>
    </div>
  );
};

Quote.displayName = 'Quote';
