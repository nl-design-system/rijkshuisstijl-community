import {
  Article,
  BreadcrumbNav,
  BreadcrumbNavLink,
  Card,
  Footer,
  Heading,
  Icon,
  LinkList,
  LinkListLink,
  Logo,
  NavBar,
  PageHeader,
  Paragraph,
  Separator,
} from '@rijkshuisstijl-community/components-react';
import { Document, RichText } from '@utrecht/component-library-react';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';

export default function Details() {
  return (
    <>
      <div className="rhc-templates-background-color-white">
        <PageHeader>
          <Logo organisation="Rijkshuisstijl Community">
            <Icon className={'dutch-map'} icon={'nederland-map'} />
          </Logo>
        </PageHeader>
      </div>
      <NavBar
        items={[
          { href: '/', label: 'Rich Text' },
          { href: '/form', label: 'Form' },
          { href: '/details', label: 'Details' },
          { href: '/collage', label: 'Collage' },
          { href: '/mijn-omgeving', label: 'Mijn Omgeving' },
        ]}
      ></NavBar>
      <main className="rhc-templates-page">
        <Document>
          <div className="rhc-templates-background-color-white">
            <PageHeader>
              <BreadcrumbNav>
                <BreadcrumbNavLink href="/" index={0} rel="home">
                  Home
                </BreadcrumbNavLink>
                <BreadcrumbNavLink href="/a/" index={1}>
                  Onderwerpen
                </BreadcrumbNavLink>
                <BreadcrumbNavLink href="/a/b/" index={2} rel="up">
                  Werktijden
                </BreadcrumbNavLink>
              </BreadcrumbNav>
              <div>
                <div>
                  <Heading level={1}>Veel bekeken</Heading>
                  <LinkList>
                    <LinkListLink>Wat zijn de wettelijke regels voor mijn werktijden en rusttijden?</LinkListLink>
                    <LinkListLink>Wat zijn de wettelijke regels voor pauzes tijdens mijn werk?</LinkListLink>
                  </LinkList>
                </div>
              </div>
              <div>
                <LinkList>
                  <LinkListLink>Regels voor rijtijden en rusttijden bij wegvervoer</LinkListLink>
                  <LinkListLink>Vraag en antwoord</LinkListLink>
                  <LinkListLink>Documenten</LinkListLink>
                </LinkList>
              </div>
            </PageHeader>
            <main className="rhc-templates-main-content">
              <Article>
                <RichText>
                  <Paragraph>
                    De Arbeidstijdenwet geeft regels voor werktijden, pauzes en rusttijden van werknemers. Met deze
                    regels wil de Rijksoverheid werknemers beschermen tegen te lange werkdagen. Maar ook de combinatie
                    van werk, privé en zorgtaken gemakkelijker maken.
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
                  <div className="rhc-templates-card-container">
                    <Card
                      heading="Bijbaan, vakantiewerk en stage door jongeren"
                      href="#"
                      imageSrc="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/0bfd32af3f34ff7ce62f4769fbec8895720dde75/proprietary/assets/src/placeholder.jpg"
                    ></Card>
                    <Card
                      heading="Vakantiedagen en vakantiegeld"
                      href="#"
                      imageSrc="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/0bfd32af3f34ff7ce62f4769fbec8895720dde75/proprietary/assets/src/placeholder.jpg"
                    ></Card>
                  </div>
                </RichText>
              </Article>
            </main>
          </div>
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
        </Document>
      </main>
    </>
  );
}
