'use client';

import {
  Article,
  BreadcrumbNav,
  BreadcrumbNavLink,
  Figure,
  FigureCaption,
  Footer,
  Heading,
  Image,
  Paragraph,
  Separator,
  LinkList,
  LinkListLink,
  PageContent,
  PageHeader,
} from '@rijkshuisstijl-community/components-react';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';

export default function Details() {
  return (
    <>
      <PageHeader>
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
      <main className="rhc-main-content">
        <PageContent className="container page-content rhc-page-content rhc-background-color-white">
          <Article>
            <Paragraph>
              De Arbeidstijdenwet geeft regels voor werktijden, pauzes en rusttijden van werknemers. Met deze regels wil
              de Rijksoverheid werknemers beschermen tegen te lange werkdagen. Maar ook de combinatie van werk, privé en
              zorgtaken gemakkelijker maken.
            </Paragraph>
            <Separator></Separator>
            <Heading level={1}>Vraag en antwoord</Heading>
            <LinkList>
              <LinkListLink>Wat zijn de regels bij consignatie (oproepdienst)?</LinkListLink>
              <LinkListLink>Hoe vaak mag ik nachtdienst hebben?</LinkListLink>
              <LinkListLink>Welke brochures zijn er over Arbeidstijdenwet en Arbeidstijdenbesluit?</LinkListLink>
              <LinkListLink>Wanneer geldt de Arbeidstijdenwet niet (of gedeeltelijk) voor mij?</LinkListLink>
              <LinkListLink>Meer vragen en antwoorden</LinkListLink>
            </LinkList>
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
                <Figure>
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
          </Article>
        </PageContent>
      </main>
      <Footer
        heading="De Rijksoverheid. Voor Nederland"
        headingLevel={4}
        columns={[
          {
            heading: 'Service',
            children: [
              <LinkList key="1">
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Contact
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Abonneren
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  RSS
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Vacatures
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Sitemap
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Help
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Archief
                </LinkListLink>
              </LinkList>,
            ],
          },
          {
            heading: 'Over deze site',
            children: (
              <LinkList key="2">
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Over Rijksoverheid.nl
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Wetten en regelingen
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Copyright
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Privacy
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Cookies
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Toegankelijkheid
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Open data
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Kwetsbaarheid melden
                </LinkListLink>
              </LinkList>
            ),
          },
        ]}
      ></Footer>
    </>
  );
}
