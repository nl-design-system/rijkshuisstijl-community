import { Heading, TableCell, TableRow } from '@rijkshuisstijl-community/components-react';
import tokens from '@rijkshuisstijl-community/design-tokens/dist/index.tokens.json';
import { BorderRadiusSample } from '../../../design-tokens/BorderRadiusSample';
import { CopyDesignTokenButton } from '../../../design-tokens/CopyDesignTokenButton';
import { DesignTokenTable } from '../../../design-tokens/DesignTokenTable';
import PageLayoutTwoColumnSidenav from '../../../../PageLayoutTwoColumnSidenav';

export default function Page() {
  return (
    <PageLayoutTwoColumnSidenav>
      <div className="rhc-margin-block-end-wrapper">
        <Heading level={1}>Afrondingen</Heading>
        <DesignTokenTable>
          {/* TODO: Sort border-radius values from small to large */}
          {/* TODO: Probably reuse logic from github.com/nl-design-system/theme-wizard to compare `px` and `rem` values */}
          {Object.entries(tokens['rhc']['border-radius'])
            .sort(([, valueA], [, valueB]) => Number.parseFloat(`${valueA}`) - Number.parseFloat(`${valueB}`))
            .map(([name, value]) => (
              <TableRow key={name}>
                <TableCell className="utrecht-table__cell--rhc-middle">
                  <BorderRadiusSample value={`${value}`} />
                </TableCell>
                <TableCell className="utrecht-table__cell--rhc-middle">
                  <CopyDesignTokenButton path={['rhc', 'border-radius', name]} />
                </TableCell>
              </TableRow>
            ))}
          {[
            { name: 'quarter-lint', value: tokens['rhc']['size']['quarter-lint'] },
            { name: 'half-lint', value: tokens['rhc']['size']['half-lint'] },
            { name: 'lint', value: tokens['rhc']['size']['lint'] },
            { name: '2-lint', value: tokens['rhc']['size']['2-lint'] },
            { name: '3-lint', value: tokens['rhc']['size']['3-lint'] },
          ].map(({ name, value }) => (
            <TableRow key={name}>
              <TableCell className="utrecht-table__cell--rhc-middle">
                <BorderRadiusSample value={value} />
              </TableCell>
              <TableCell className="utrecht-table__cell--rhc-middle">
                <CopyDesignTokenButton path={['rhc', 'size', name]} />
              </TableCell>
            </TableRow>
          ))}
        </DesignTokenTable>
      </div>
    </PageLayoutTwoColumnSidenav>
  );
}
