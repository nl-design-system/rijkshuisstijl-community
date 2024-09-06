import { TableCaptionProps, TableCaption as UtrechtTableCaption } from '@utrecht/component-library-react';
import { forwardRef, PropsWithChildren } from 'react';

export const TableCaption = forwardRef(({ dir, children, ...restProps }: PropsWithChildren<TableCaptionProps>) => {
  return (
    <UtrechtTableCaption className={dir === 'rtl' ? 'utrecht-table__caption--rtl' : ''} {...restProps}>
      {children}
    </UtrechtTableCaption>
  );
});

TableCaption.displayName = 'TableCaption';
