import { Heading } from '@rijkshuisstijl-community/components-react';
import { Code, Paragraph } from '@utrecht/component-library-react';
import { DesignTokenRow } from '../../../design-tokens/DesignTokenRow';
import { DesignTokenTable } from '../../../design-tokens/DesignTokenTable';
import { SpaceSample } from '../../../design-tokens/SpaceSample';
import PageLayoutTwoColumnSidenav from '../../../../PageLayoutTwoColumnSidenav';

type SpacingEntry = { name: string; path: string[] };

const spacingEntries: SpacingEntry[] = [
  { name: 'none', path: ['rhc', 'space', 'none'] },
  { name: '2xs', path: ['rhc', 'space', '2xs'] },
  { name: 'xs', path: ['rhc', 'space', 'xs'] },
  { name: 'sm', path: ['rhc', 'space', 'sm'] },
  { name: 'md', path: ['rhc', 'space', 'md'] },
  { name: 'lg', path: ['rhc', 'space', 'lg'] },
  { name: 'xl', path: ['rhc', 'space', 'xl'] },
  { name: '2xl', path: ['rhc', 'space', '2xl'] },
  { name: '3xl', path: ['rhc', 'space', '3xl'] },
  { name: '4xl', path: ['rhc', 'space', '4xl'] },
  { name: '5xl', path: ['rhc', 'space', '5xl'] },
  { name: 'quarter-lint', path: ['rhc', 'size', 'quarter-lint'] },
  { name: 'half-lint', path: ['rhc', 'size', 'half-lint'] },
  { name: 'lint', path: ['rhc', 'size', 'lint'] },
  { name: '2-lint', path: ['rhc', 'size', '2-lint'] },
  { name: '3-lint', path: ['rhc', 'size', '3-lint'] },
];

export default function Page() {
  return (
    <PageLayoutTwoColumnSidenav>
      <div className="rhc-margin-block-end-wrapper">
        <Heading level={1}>Ruimte</Heading>
        <Paragraph>
          Gebruik deze tokens in CSS voor bijvoorbeeld <Code>padding</Code>, <Code>margin</Code> en <Code>gap</Code>.
        </Paragraph>
        <DesignTokenTable>
          {spacingEntries.map(({ name, path }) => (
            <DesignTokenRow key={name} path={path}>
              <SpaceSample value={`var(--${path.join('-')})`} />
            </DesignTokenRow>
          ))}
        </DesignTokenTable>
      </div>
    </PageLayoutTwoColumnSidenav>
  );
}
