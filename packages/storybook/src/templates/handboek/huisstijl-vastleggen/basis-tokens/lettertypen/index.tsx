import {
  Heading,
  Paragraph,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@rijkshuisstijl-community/components-react';
import tokens from '@rijkshuisstijl-community/design-tokens/dist/index.tokens.json';
import { CopyDesignTokenButton } from '../../../design-tokens/CopyDesignTokenButton';
import { FontSample } from '../../../design-tokens/FontSample';
import { LineHeightSample } from '../../../design-tokens/LineHeightSample';
import PageLayoutTwoColumnSidenav from '../../../../PageLayoutTwoColumnSidenav';

export default function Page() {
  return (
    <PageLayoutTwoColumnSidenav>
      <div className="rhc-margin-block-end-wrapper">
        <Heading level={1}>Lettertypes</Heading>
        <Heading level={2}>Lettergrootte</Heading>
        <Table className="utrecht-table--rhc-breakout-gutter">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Voorbeeld</TableHeaderCell>
              <TableHeaderCell>Design Token</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { name: 'sm', value: tokens['rhc']['text']['font-size']['sm'] },
              { name: 'md', value: tokens['rhc']['text']['font-size']['md'] },
              { name: 'lg', value: tokens['rhc']['text']['font-size']['lg'] },
              { name: 'xl', value: tokens['rhc']['text']['font-size']['xl'] },
              { name: '2xl', value: tokens['rhc']['text']['font-size']['2xl'] },
              { name: '3xl', value: tokens['rhc']['text']['font-size']['3xl'] },
            ].map(({ name, value }) => (
              <TableRow key={name}>
                <TableCell className="utrecht-table__cell--rhc-middle">
                  <FontSample
                    className="rhc-font-sample--table-cell"
                    fontFamily={tokens['rhc']['text']['font-family']['sans']}
                    fontSize={value}
                    fontWeight={tokens['rhc']['text']['font-weight']['regular']}
                    lineHeight={tokens['rhc']['text']['line-height']['md']}
                  >
                    <span lang="en">The quick brown fox jumps over the lazy dog.</span>
                  </FontSample>
                </TableCell>
                <TableCell className="utrecht-table__cell--rhc-middle">
                  <CopyDesignTokenButton path={['rhc', 'text', 'font-size', name]} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Heading level={2}>Regelhoogte</Heading>
        <Table className="utrecht-table--rhc-breakout-gutter">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Voorbeeld</TableHeaderCell>
              <TableHeaderCell>Design Token</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(tokens['rhc']['text']['line-height'])
              .filter(([name]) => !['min', 'max'].includes(name))
              .map(([name, value]) => (
                <TableRow key={name}>
                  <TableCell className="utrecht-table__cell--rhc-middle">
                    <LineHeightSample
                      fontFamily={tokens['rhc']['text']['font-family']['sans']}
                      fontSize={tokens['rhc']['text']['font-size']['md']}
                      fontWeight={tokens['rhc']['text']['font-weight']['regular']}
                      lineHeight={value}
                    >
                      <span lang="la">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </span>
                    </LineHeightSample>
                  </TableCell>
                  <TableCell className="utrecht-table__cell--rhc-middle">
                    <CopyDesignTokenButton path={['rhc', 'text', 'line-height', name]} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Heading level={2}>Letterdikte</Heading>
        <Paragraph>
          Er zijn veel font-weight waardes, en het effect kun je alleen goed zien wanneer je een variable font gebruikt.
          De meeste lettertypes ondersteunen alleen 400 en 700, ofwel regular en bold.
        </Paragraph>
        <Table className="utrecht-table--rhc-breakout-gutter">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Voorbeeld</TableHeaderCell>
              <TableHeaderCell>Design Token</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { name: 'thin', value: tokens['rhc']['text']['font-weight']['thin'] },
              { name: 'light', value: tokens['rhc']['text']['font-weight']['light'] },
              { name: 'regular', value: tokens['rhc']['text']['font-weight']['regular'] },
              { name: 'semi-bold', value: tokens['rhc']['text']['font-weight']['semi-bold'] },
              { name: 'bold', value: tokens['rhc']['text']['font-weight']['bold'] },
              { name: 'extra-bold', value: tokens['rhc']['text']['font-weight']['extra-bold'] },
            ].map(({ name, value }) => (
              <TableRow key={name}>
                <TableCell className="utrecht-table__cell--rhc-middle">
                  <FontSample
                    className="rhc-font-sample--table-cell"
                    fontFamily={tokens['rhc']['text']['font-family']['sans']}
                    fontSize={tokens['rhc']['text']['font-size']['xl']}
                    fontWeight={value}
                    lineHeight={tokens['rhc']['text']['line-height']['md']}
                  >
                    <span lang="la">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                  </FontSample>
                </TableCell>
                <TableCell className="utrecht-table__cell--rhc-middle">
                  <CopyDesignTokenButton path={['rhc', 'text', 'font-weight', name]} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </PageLayoutTwoColumnSidenav>
  );
}
