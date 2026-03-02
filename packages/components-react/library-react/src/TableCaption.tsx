/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import {
  TableCaption as UtrechtTableCaption,
  TableCaptionProps as UtrechtTableCaptionProps,
} from '@utrecht/component-library-react';
import { PropsWithChildren, Ref } from 'react';

interface TableCaptionProps extends UtrechtTableCaptionProps {
  ref?: Ref<HTMLTableCaptionElement>;
}

export const TableCaption = ({ ref, dir, children, ...restProps }: PropsWithChildren<TableCaptionProps>) => (
  <UtrechtTableCaption className={dir === 'rtl' ? 'utrecht-table__caption--rtl' : ''} ref={ref} {...restProps}>
    {children}
  </UtrechtTableCaption>
);

TableCaption.displayName = 'TableCaption';
