import { ColumnLayout, PageFooterProps, PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { Heading } from './Heading';

interface FooterProps extends PageFooterProps {
  heading?: ReactNode;
  appearanceLevel?: 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5' | 'level-6';
  columns?: ColumnProps[];
  background?: 'primary-filled' | 'primary-outlined';
}

interface ColumnProps {
  heading: ReactNode;
  appearanceLevel?: 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5' | 'level-6';
  children: ReactNode;
}

const MAX_APPEARANCE_LEVEL = 'level-6' as const;

const getValidAppearanceLevel = (level: 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5' | 'level-6') => {
  const levelNumber = parseInt(level.replace('level-', ''), 2);
  const maxNumber = parseInt(MAX_APPEARANCE_LEVEL.replace('level-', ''), 2);
  return levelNumber > maxNumber ? MAX_APPEARANCE_LEVEL : level;
};

export const Footer = forwardRef(
  (
    {
      className,
      heading,
      appearanceLevel = 'level-2',
      columns,
      children,
      background,
      ...restProps
    }: PropsWithChildren<FooterProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
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
            <Heading appearance={getValidAppearanceLevel(appearanceLevel)} level={heading ? 2 : 3}>
              {heading}
            </Heading>
          </div>
        )}
        <ColumnLayout>
          {columns?.map(
            (
              { heading: columnHeading, appearanceLevel: columnAppearanceLevel = 'level-3', children }: ColumnProps,
              index: number,
            ) => (
              <div className="rhc-page-footer__section" key={index}>
                <Heading appearance={getValidAppearanceLevel(columnAppearanceLevel)} level={heading ? 3 : 2}>
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
  ),
);

Footer.displayName = 'Footer';
