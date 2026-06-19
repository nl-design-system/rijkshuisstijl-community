'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import { Article, Heading, Link, SideNav, Paragraph } from '@rijkshuisstijl-community/components-react';
import { NavItems } from '../../NavItems';
import { PageBodyContainer, PageBodyContent, PageBodyMain, PageBodySide } from '../../PageBody';
import { navigation } from '../../navigation';
import { Grid } from '@amsterdam/design-system-react';
import '@amsterdam/design-system-css/dist/index.css';
import SharedFooter from '../../../shared/footer';
import SharedHeader from '../../../shared/header';
import '../../index.css';

export default function Page() {
  return (
    <>
      <SharedHeader />
      <PageBodyContainer>
        <PageBodyContent layout="none">
          <PageBodySide>
            <SideNav className="rhc-side-nav" heading="Submenu">
              <NavItems items={navigation} />
            </SideNav>
          </PageBodySide>
          <PageBodyMain>
            <Article>
              <Grid>
                <Grid.Cell
                  className="_ams-item"
                  span={{
                    medium: 10,
                    narrow: 10,
                    wide: 10,
                  }}
                >
                  <div className="rhc-margin-block-end-wrapper">
                    <Heading level={1}>Figma changelog</Heading>
                    <Paragraph>
                      Op deze pagina vind je een overzicht van alle wijzigingen in onze Figma bibliotheken.
                    </Paragraph>

                    <Paragraph>
                      Er komen regelmatig nieuwe versies uit van de design tokens. Lees{' '}
                      <Link href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/proprietary/design-tokens/CHANGELOG.md">
                        de changelog van de design tokens
                      </Link>{' '}
                      om de ontwikkelingen te volgen.
                    </Paragraph>
                  </div>
                </Grid.Cell>
                <Grid.Cell
                  className="_ams-item"
                  span={{
                    medium: 2,
                    narrow: 2,
                    wide: 2,
                  }}
                >
                  versies
                </Grid.Cell>
              </Grid>
            </Article>
          </PageBodyMain>
        </PageBodyContent>
      </PageBodyContainer>
      <SharedFooter />
    </>
  );
}
