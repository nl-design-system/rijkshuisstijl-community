import { Heading, Link, Paragraph } from '@rijkshuisstijl-community/components-react';
import { Grid } from '@amsterdam/design-system-react';
import '@amsterdam/design-system-css/dist/index.css';
import PageLayoutTwoColumnSidenav from '../../../PageLayoutTwoColumnSidenav';

export default function Page() {
  return (
    <PageLayoutTwoColumnSidenav>
      <Grid>
        <Grid.Cell className="_ams-item" span={{ medium: 6, narrow: 3, wide: 10 }}>
          <div className="rhc-margin-block-end-wrapper">
            <Heading level={1}>Figma changelog</Heading>
            <Paragraph>Op deze pagina vind je een overzicht van alle wijzigingen in onze Figma bibliotheken.</Paragraph>
            <Paragraph>
              Er komen regelmatig nieuwe versies uit van de design tokens. Lees{' '}
              <Link href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/proprietary/design-tokens/CHANGELOG.md">
                de changelog van de design tokens
              </Link>{' '}
              om de ontwikkelingen te volgen.
            </Paragraph>
          </div>
        </Grid.Cell>
        <Grid.Cell className="_ams-item" span={{ medium: 2, narrow: 1, wide: 2 }}>
          versies
        </Grid.Cell>
      </Grid>
    </PageLayoutTwoColumnSidenav>
  );
}
