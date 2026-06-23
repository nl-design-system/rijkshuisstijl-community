import { Heading, Link, Paragraph, TableCell, TableRow } from '@rijkshuisstijl-community/components-react';
import tokens from '@rijkshuisstijl-community/design-tokens/dist/index.tokens.json';
import { ColorSample } from '@utrecht/component-library-react';
import { CopyDesignTokenButton } from '../../../design-tokens/CopyDesignTokenButton';
import { DesignTokenTable } from '../../../design-tokens/DesignTokenTable';
import PageLayoutTwoColumnSidenav from '../../../../PageLayoutTwoColumnSidenav';

const colors: { label: string; path: string[]; tokens: { [index: string]: string } }[] = [
  { label: 'Lintblauw', path: ['rhc', 'color', 'lintblauw'], tokens: tokens['rhc']['color']['lintblauw'] },
  { label: 'Paars', path: ['rhc', 'color', 'paars'], tokens: tokens['rhc']['color']['paars'] },
  { label: 'Violet', path: ['rhc', 'color', 'violet'], tokens: tokens['rhc']['color']['violet'] },
  { label: 'Robijnrood', path: ['rhc', 'color', 'robijnrood'], tokens: tokens['rhc']['color']['robijnrood'] },
  { label: 'Roze', path: ['rhc', 'color', 'roze'], tokens: tokens['rhc']['color']['roze'] },
  { label: 'Rood', path: ['rhc', 'color', 'rood'], tokens: tokens['rhc']['color']['rood'] },
  { label: 'Oranje', path: ['rhc', 'color', 'oranje'], tokens: tokens['rhc']['color']['oranje'] },
  { label: 'Donkergeel', path: ['rhc', 'color', 'donkergeel'], tokens: tokens['rhc']['color']['donkergeel'] },
  { label: 'Geel', path: ['rhc', 'color', 'geel'], tokens: tokens['rhc']['color']['geel'] },
  { label: 'Donkerbruin', path: ['rhc', 'color', 'donkerbruin'], tokens: tokens['rhc']['color']['donkerbruin'] },
  { label: 'Bruin', path: ['rhc', 'color', 'bruin'], tokens: tokens['rhc']['color']['bruin'] },
  { label: 'Donkergroen', path: ['rhc', 'color', 'donkergroen'], tokens: tokens['rhc']['color']['donkergroen'] },
  { label: 'Groen', path: ['rhc', 'color', 'groen'], tokens: tokens['rhc']['color']['groen'] },
  { label: 'Mosgroen', path: ['rhc', 'color', 'mosgroen'], tokens: tokens['rhc']['color']['mosgroen'] },
  { label: 'Mintgroen', path: ['rhc', 'color', 'mintgroen'], tokens: tokens['rhc']['color']['mintgroen'] },
  { label: 'Donkerblauw', path: ['rhc', 'color', 'donkerblauw'], tokens: tokens['rhc']['color']['donkerblauw'] },
  { label: 'Hemelblauw', path: ['rhc', 'color', 'hemelblauw'], tokens: tokens['rhc']['color']['hemelblauw'] },
  { label: 'Lichtblauw', path: ['rhc', 'color', 'lichtblauw'], tokens: tokens['rhc']['color']['lichtblauw'] },
  { label: 'Cool Gray', path: ['rhc', 'color', 'cool-grey'], tokens: tokens['rhc']['color']['cool-grey'] },
];

export default function Page() {
  return (
    <PageLayoutTwoColumnSidenav>
      <div className="rhc-margin-block-end-wrapper">
        <Heading level={1}>Kleuren</Heading>
        <div className="rhc-templates-spacing-2">
          <Paragraph>
            Gebruik de design tokens als je de kleuren uit het design system nodig hebt. Lees meer bij{' '}
            <Link href="#thema">Thema</Link> om te lezen je kleuren kunt gebruiken zonder de kleurcodes te kopieëren.
          </Paragraph>
        </div>
        {colors.map(({ label, tokens, path }) => (
          <div key={label} className="rhc-templates-spacing-2">
            <Heading level={2}>{label}</Heading>
            <DesignTokenTable>
              {Object.entries(tokens).map(([name, value]) => (
                <TableRow key={name}>
                  <TableCell className="utrecht-table__cell--rhc-fill utrecht-table__cell--rhc-color-sample">
                    <ColorSample className="rhc-color-sample--table-cell" color={String(value) || ''} />
                  </TableCell>
                  <TableCell className="utrecht-table__cell--rhc-middle">
                    <CopyDesignTokenButton path={[...path, name]} />
                  </TableCell>
                </TableRow>
              ))}
            </DesignTokenTable>
          </div>
        ))}
      </div>
    </PageLayoutTwoColumnSidenav>
  );
}
