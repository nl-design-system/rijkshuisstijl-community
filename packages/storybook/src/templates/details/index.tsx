'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import {
  Article,
  ColumnLayout,
  Heading,
  Hero,
  Icon,
  LinkList,
  LinkListCard,
  LinkListLink,
  Paragraph,
  Separator,
  SubNavBar,
} from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import SharedDisclaimer from '../shared/disclaimer';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';
import Uitgelicht from '../shared/uitgelicht';
import './index.css';

export default function Details() {
  return (
    <>
      <SharedHeader />
      <PageBody>
        <Hero className="rhc-hero-details-template" imageAlt="Tulip field" imageSrc="/placeholder.jpg">
          <LinkListCard heading="Veel bekeken" headingLevel={2}>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Wat zijn de wettelijke regels voor mijn werktijden en rusttijden?
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
              Wat zijn de wettelijke regels voor pauzes tijdens mijn werk?
            </LinkListLink>
          </LinkListCard>
        </Hero>
        <SubNavBar
          className="rhc-subnavbar-details-template"
          columns={[
            [
              {
                href: '#',
                label: 'Regels voor rijtijden en rusttijden bij wegvervoer',
                id: 'regels-rijtijden',
              },
              {
                href: '#',
                label: 'Vraag en antwoord',
                id: 'vraag-antwoord',
              },
            ],
            [
              {
                href: '#',
                label: 'Documenten',
                id: 'documenten',
              },
            ],
          ]}
        />
        <SharedMainPageContent>
          <SharedDisclaimer />
          <Article>
            <div className="rhc-templates-spacing-1">
              <Paragraph purpose="lead">
                De Arbeidstijdenwet geeft regels voor werktijden, pauzes en rusttijden van werknemers. Met deze regels
                wil de Rijksoverheid werknemers beschermen tegen te lange werkdagen. Maar ook de combinatie van werk,
                privé en zorgtaken gemakkelijker maken.
              </Paragraph>
              <Separator />
              <Heading level={2}>Vraag en antwoord</Heading>
              <ColumnLayout>
                <LinkList>
                  <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                    Wat zijn de regels bij consignatie?
                  </LinkListLink>
                  <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                    Hoe vaak mag ik nachtdienst hebben?
                  </LinkListLink>
                  <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                    Welke brochures zijn er over Arbeidstijdenwet?
                  </LinkListLink>
                  <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                    Wanneer geldt de Arbeidstijdenwet niet (of gedeeltelijk) voor mij?
                  </LinkListLink>
                  <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                    Meer vragen en antwoorden
                  </LinkListLink>
                </LinkList>
              </ColumnLayout>
              <Separator />
              <Uitgelicht />
            </div>
          </Article>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
