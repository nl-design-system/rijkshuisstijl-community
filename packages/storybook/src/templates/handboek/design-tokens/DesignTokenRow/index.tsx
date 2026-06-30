import { TableCell, TableRow } from '@rijkshuisstijl-community/components-react';
import type { ReactNode } from 'react';
import { CopyDesignTokenButton } from '../CopyDesignTokenButton';

export const DesignTokenRow = ({ children, path }: { children: ReactNode; path: string[] }) => (
  <TableRow>
    <TableCell className="utrecht-table__cell--rhc-middle">{children}</TableCell>
    <TableCell className="utrecht-table__cell--rhc-middle">
      <CopyDesignTokenButton path={path} />
    </TableCell>
  </TableRow>
);
