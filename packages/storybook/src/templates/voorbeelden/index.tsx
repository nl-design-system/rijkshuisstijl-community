'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import {
  Article,
  CardAsLink,
  ColumnLayout,
  Heading,
  Hero,
  LinkList,
  LinkListCard,
  LinkListLink,
  Paragraph,
  Separator,
  SubNavBar,
} from '@rijkshuisstijl-community/components-react';
import { Icon } from '@rijkshuisstijl-community/icon-react';
import { PageBody } from '@utrecht/page-body-react';
import SharedDisclaimer from '../shared/disclaimer';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';
import '../details/index.css';

export default function Details() {
  return (
    <>
      <SharedHeader />
      <PageBody className="rhc-templates-page rhc-templates-background-color-white">
        <Hero className="rhc-hero-details-template" imageAlt="Tullip field" imageSrc="/placeholder.jpg">
          <LinkListCard heading="Veel bekeken" headingLevel={2}>
            <LinkListLink href="/mijn-omgeving/" icon={<Icon icon="chevron-right" />}>
              Mijn Omgeving voorbeeldpagina
            </LinkListLink>
            <LinkListLink href="/form/" icon={<Icon icon="chevron-right" />}>
              Formulier voorbeeldpagina
            </LinkListLink>
            <LinkListLink href="/rich-text/" icon={<Icon icon="chevron-right" />}>
              Rich Text voorbeeldpagina
            </LinkListLink>
            <LinkListLink href="/details/" icon={<Icon icon="chevron-right" />}>
              Details voorbeeldpagina
            </LinkListLink>
            <LinkListLink href="/collage/" icon={<Icon icon="chevron-right" />}>
              Collage voorbeeldpagina
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
                {
                  "We hebben een aantal voorbeeldpagina's gemaakt, waar je kunt zien wat er mogelijk is met de componenten van Rijkshuisstijl Community."
                }
              </Paragraph>
              <Separator />
              <Heading level={2}>Vraag en antwoord</Heading>
              <ColumnLayout>
                <div className="rhc-linklist-collection">
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
                  </LinkList>
                  <LinkList>
                    <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                      Wanneer geldt de Arbeidstijdenwet niet (of gedeeltelijk) voor mij?
                    </LinkListLink>
                    <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                      Meer vragen en antwoorden
                    </LinkListLink>
                  </LinkList>
                </div>
              </ColumnLayout>
              <Separator />
              <Heading level={2}>Uitgelicht</Heading>
              <div className="rhc-card-as-link-group">
                <CardAsLink
                  heading="Bijbaan, vakantiewerk en stage door jongeren"
                  href="#"
                  imageAlt="Tullip field"
                  imageSrc="/placeholder.jpg"
                  linkLabel="Lees meer"
                  title="Tekst over de link"
                ></CardAsLink>
                <CardAsLink
                  heading="Vakantiedagen en vakantiegeld"
                  href="#"
                  imageAlt="Tullip field"
                  imageSrc="/placeholder.jpg"
                  linkLabel="Lees meer"
                  title="Tekst over de link"
                ></CardAsLink>
              </div>
            </div>
          </Article>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
