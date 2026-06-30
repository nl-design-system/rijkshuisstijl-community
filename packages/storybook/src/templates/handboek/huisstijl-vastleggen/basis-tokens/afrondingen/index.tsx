import { Heading } from '@rijkshuisstijl-community/components-react';
import tokens from '@rijkshuisstijl-community/design-tokens/dist/index.tokens.json';
import PageLayoutTwoColumnSidenav from '../../../../PageLayoutTwoColumnSidenav';
import { BorderRadiusSample } from '../../../design-tokens/BorderRadiusSample';
import { DesignTokenRow } from '../../../design-tokens/DesignTokenRow';
import { DesignTokenTable } from '../../../design-tokens/DesignTokenTable';

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
              <DesignTokenRow key={name} path={['rhc', 'border-radius', name]}>
                <BorderRadiusSample value={`${value}`} />
              </DesignTokenRow>
            ))}
          {[
            { name: 'quarter-lint', value: tokens['rhc']['size']['quarter-lint'] },
            { name: 'half-lint', value: tokens['rhc']['size']['half-lint'] },
            { name: 'lint', value: tokens['rhc']['size']['lint'] },
            { name: '2-lint', value: tokens['rhc']['size']['2-lint'] },
            { name: '3-lint', value: tokens['rhc']['size']['3-lint'] },
          ].map(({ name, value }) => (
            <DesignTokenRow key={name} path={['rhc', 'size', name]}>
              <BorderRadiusSample value={value} />
            </DesignTokenRow>
          ))}
        </DesignTokenTable>
      </div>
    </PageLayoutTwoColumnSidenav>
  );
}
