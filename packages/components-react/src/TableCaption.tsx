import { TableCaptionProps, TableCaption as UtrechtTableCaption } from '@utrecht/component-library-react/dist';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export const TableCaption = forwardRef(
  (
    { dir, children, ...restProps }: PropsWithChildren<TableCaptionProps>,
    ref: ForwardedRef<HTMLTableCaptionElement>,
  ) => {
    return (
      <UtrechtTableCaption className={dir === 'rtl' ? 'utrecht-table__caption--rtl' : ''} ref={ref} {...restProps}>
        {children}
      </UtrechtTableCaption>
    );
  },
);

TableCaption.displayName = 'TableCaption';
