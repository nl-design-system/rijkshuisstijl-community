'use client';

import { Logo, Paragraph } from '@rijkshuisstijl-community/components-react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  Figure,
  FigureCaption,
  Heading,
  Image,
  LinkList,
  LinkListLink,
  PageContent,
  PageFooter,
  PageHeader,
  Separator,
} from '@utrecht/component-library-react/dist/css-module';

export default function Details() {
  return (
    <main>
      <div className="unfinished">
        <PageHeader>
          <Logo organisation="Voorbeeld organisatie" subtitle="Voorbeeld sub-title"></Logo>
          <BreadcrumbNav>
            <BreadcrumbNavLink href="/" rel="home" index={0}>
              Home
            </BreadcrumbNavLink>
            <BreadcrumbNavLink href="/a/" index={1}>
              Onderwerpen
            </BreadcrumbNavLink>
            <BreadcrumbNavLink href="/a/b/" rel="up" index={2}>
              Werktijden
            </BreadcrumbNavLink>
          </BreadcrumbNav>
          <div className="header-image">
            <div className="header-image-textbox">
              <Heading level={1}>Veel bekeken</Heading>
              <LinkList>
                <LinkListLink>Wat zijn de wettelijke regels voor mijn werktijden en rusttijden?</LinkListLink>
                <LinkListLink>Wat zijn de wettelijke regels voor pauzes tijdens mijn werk?</LinkListLink>
              </LinkList>
            </div>
          </div>
          <div className="sub-navigation">
            <LinkList>
              <LinkListLink>Regels voor rijtijden en rusttijden bij wegvervoer</LinkListLink>
              <LinkListLink>Vraag en antwoord</LinkListLink>
              <LinkListLink>Documenten</LinkListLink>
            </LinkList>
          </div>
        </PageHeader>
      </div>

      <PageContent className="container page-content">
        <Paragraph>
          De Arbeidstijdenwet geeft regels voor werktijden, pauzes en rusttijden van werknemers. Met deze regels wil de
          Rijksoverheid werknemers beschermen tegen te lange werkdagen. Maar ook de combinatie van werk, privé en
          zorgtaken gemakkelijker maken.
        </Paragraph>
        <div className="unstarted">
          <Separator></Separator>
        </div>
        <div className="unstarted">
          <Heading level={1}>Vraag en antwoord</Heading>
        </div>
        <div className="unstarted">
          <LinkList>
            <LinkListLink>Wat zijn de regels bij consignatie (oproepdienst)?</LinkListLink>
            <LinkListLink>Hoe vaak mag ik nachtdienst hebben?</LinkListLink>
            <LinkListLink>Welke brochures zijn er over Arbeidstijdenwet en Arbeidstijdenbesluit?</LinkListLink>
            <LinkListLink>Wanneer geldt de Arbeidstijdenwet niet (of gedeeltelijk) voor mij?</LinkListLink>
            <LinkListLink>Meer vragen en antwoorden</LinkListLink>
          </LinkList>
        </div>
        <div className="unstarted">
          <Heading level={1}>Uitgelicht</Heading>
          <div className="image-group">
            <div className="image-group-box">
              <Figure className="unstarted">
                <Image
                  alt="Multicolored tulip field"
                  width="640"
                  height="763"
                  src="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/0bfd32af3f34ff7ce62f4769fbec8895720dde75/proprietary/assets/src/placeholder.jpg"
                ></Image>
                <FigureCaption>Bijschrift (figcaption) van een afbeelding)</FigureCaption>
              </Figure>
            </div>
            <div className="image-group-box">
              <Figure className="unstarted">
                <Image
                  alt="Multicolored tulip field"
                  width="640"
                  height="763"
                  src="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/0bfd32af3f34ff7ce62f4769fbec8895720dde75/proprietary/assets/src/placeholder.jpg"
                ></Image>
                <FigureCaption>Bijschrift (figcaption) van een afbeelding)</FigureCaption>
              </Figure>
            </div>
          </div>
        </div>
      </PageContent>
      <div className="unstarted">
        <PageFooter>
          <Heading level={1} appearance="utrecht-heading-2">
            De Rijksoverheid. Voor Nederland
          </Heading>
          <div className="left-column">
            <Heading level={2} appearance="utrecht-heading-4">
              Service
            </Heading>
            <LinkList>
              <LinkListLink href="#">Contact</LinkListLink>
              <LinkListLink href="#">Abonneren</LinkListLink>
              <LinkListLink href="#">RSS</LinkListLink>
              <LinkListLink href="#">Vacatures</LinkListLink>
              <LinkListLink href="#">Sitemap</LinkListLink>
              <LinkListLink href="#">Help</LinkListLink>
              <LinkListLink href="#">Archief</LinkListLink>
            </LinkList>
          </div>
          <div className="right-column">
            <Heading level={2} appearance="utrecht-heading-4">
              Service
            </Heading>
            <LinkList>
              <LinkListLink href="#">Over Rijksoverheid.nl</LinkListLink>
              <LinkListLink href="#">Wetten en regelingen</LinkListLink>
              <LinkListLink href="#">Copyright</LinkListLink>
              <LinkListLink href="#">Privacy</LinkListLink>
              <LinkListLink href="#">Cookies</LinkListLink>
              <LinkListLink href="#">Toegankelijkheid</LinkListLink>
              <LinkListLink href="#">Open data</LinkListLink>
              <LinkListLink href="#">Kwetsbaarheid melden</LinkListLink>
            </LinkList>
          </div>
        </PageFooter>
      </div>
    </main>
  );
}
