import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@rijkshuisstijl-community/components-react';
import type { ReactNode } from 'react';

export const DesignTokenTable = ({ children }: { children: ReactNode }) => (
  <Table className="utrecht-table--rhc-breakout-gutter">
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Voorbeeld</TableHeaderCell>
        <TableHeaderCell>Design Token</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>{children}</TableBody>
  </Table>
);
