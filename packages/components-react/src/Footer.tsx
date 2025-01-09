import { ColumnLayout, PageFooterProps, PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref } from 'react';
import { Heading } from './Heading';

interface FooterProps extends PageFooterProps {
  heading?: ReactNode;
  appearanceLevel?: number;
  columns?: ColumnProps[];
  background?: 'primary-filled' | 'primary-outlined';
  ref?: Ref<HTMLDivElement>;
}

interface ColumnProps {
  heading: ReactNode;
  appearanceLevel?: number;
  children: ReactNode;
}

const MAX_APPEARANCE_HEADING_LEVEL = 6;

export const Footer = ({
  ref,
  className,
  heading,
  appearanceLevel = 2,
  columns,
  children,
  background,
  ...restProps
}: PropsWithChildren<FooterProps>) => (
  <UtrechtPageFooter
    {...restProps}
    ref={ref}
    className={clsx(
      'rhc-page-footer',
      background === 'primary-outlined' || background === 'primary-filled' ? `rhc-footer--${background}` : '',
      className,
    )}
  >
    <div className="rhc-page-footer__content">
      {heading && (
        <div className="rhc-page-footer__title" key={'heading'}>
          <Heading
            appearance={`utrecht-heading-${appearanceLevel >= MAX_APPEARANCE_HEADING_LEVEL ? MAX_APPEARANCE_HEADING_LEVEL : appearanceLevel}`}
            level={2}
          >
            {heading}
          </Heading>
        </div>
      )}
      <ColumnLayout>
        {columns?.map(
          (
            { heading: columnHeading, appearanceLevel: columnAppearanceLevel = 3, children }: ColumnProps,
            index: number,
          ) => (
            <div className="rhc-page-footer__section" key={index}>
              <Heading
                appearance={`utrecht-heading-${columnAppearanceLevel >= MAX_APPEARANCE_HEADING_LEVEL ? MAX_APPEARANCE_HEADING_LEVEL : columnAppearanceLevel}`}
                level={heading ? 3 : 2}
              >
                {columnHeading}
              </Heading>
              {children}
            </div>
          ),
        )}
        {children}
      </ColumnLayout>
    </div>
  </UtrechtPageFooter>
);

Footer.displayName = 'Footer';
