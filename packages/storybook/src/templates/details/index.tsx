import {
  Article,
  Card,
  Footer,
  Heading,
  Hero,
  Icon,
  LinkList,
  LinkListCard,
  LinkListLink,
  Logo,
  NavBar,
  PageHeader,
  Paragraph,
  Separator,
  SubNavBar,
} from '@rijkshuisstijl-community/components-react';
import { ColumnLayout } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';

export default function Details() {
  return (
    <>
      <PageHeader>
        <Logo organisation="Rijkshuisstijl Community">
          <Icon className={'dutch-map'} icon={'nederland-map'} />
        </Logo>
        <NavBar
          items={[
            { id: '1', href: '/', label: 'Rich Text' },
            { id: '2', href: '/form', label: 'Form' },
            { id: '3', href: '/details', label: 'Details' },
            { id: '4', href: '/collage', label: 'Collage' },
            { id: '5', href: '/mijn-omgeving', label: 'Mijn Omgeving' },
          ]}
        ></NavBar>
      </PageHeader>
      <PageBody className="rhc-templates-page">
        <Hero
          className="rhc-hero-details-template"
          imageAlt="Tullip field"
          imageSrc="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg"
        >
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
        <div className="rhc-templates-background-color-white">
          <div className="rhc-templates-main-content">
            <div className="utrecht-page-content rhc-templates-page-content rhc-templates-page-palin">
              <Article>
                <div className="rhc-margin-block-end-wrapper">
                  <Paragraph appearance="lead">
                    De Arbeidstijdenwet geeft regels voor werktijden, pauzes en rusttijden van werknemers. Met deze
                    regels wil de Rijksoverheid werknemers beschermen tegen te lange werkdagen. Maar ook de combinatie
                    van werk, privé en zorgtaken gemakkelijker maken.
                  </Paragraph>
                  <Separator></Separator>
                  <div className="rhc-templates-spacing-3">
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
                  </div>
                  <Separator></Separator>
                  <Heading level={2}>Uitgelicht</Heading>
                  <div className="rhc-templates-card-container">
                    <Card
                      heading="Bijbaan, vakantiewerk en stage door jongeren"
                      href="#"
                      imageAlt="Tullip field"
                      imageSrc="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/0bfd32af3f34ff7ce62f4769fbec8895720dde75/proprietary/assets/src/placeholder.jpg"
                      title="Tekst over de link"
                    ></Card>
                    <Card
                      heading="Vakantiedagen en vakantiegeld"
                      href="#"
                      imageAlt="Tullip field"
                      imageSrc="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/0bfd32af3f34ff7ce62f4769fbec8895720dde75/proprietary/assets/src/placeholder.jpg"
                      title="Tekst over de link"
                    ></Card>
                  </div>
                </div>
              </Article>
            </div>
          </div>
        </div>
      </PageBody>
      <Footer
        appearanceLevel={3}
        heading="De Rijksoverheid. Voor Nederland"
        columns={[
          {
            heading: 'Service',
            children: [
              <LinkList key="1">
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Contact
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Abonneren
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  RSS
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Vacatures
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Sitemap
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Help
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Archief
                </LinkListLink>
              </LinkList>,
            ],
          },
          {
            heading: 'Over deze site',
            children: (
              <LinkList key="2">
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Over Rijksoverheid.nl
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Wetten en regelingen
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Copyright
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Privacy
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Cookies
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Toegankelijkheid
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Open data
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Kwetsbaarheid melden
                </LinkListLink>
              </LinkList>
            ),
          },
        ]}
      />
    </>
  );
}
