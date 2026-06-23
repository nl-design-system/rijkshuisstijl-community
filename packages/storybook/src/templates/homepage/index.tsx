'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import { Grid } from '@amsterdam/design-system-react';
import { ButtonLink, Card, CardAsLink, Heading, Paragraph, Separator } from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import '@amsterdam/design-system-css/dist/index.css';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';

export default function Page() {
  return (
    <>
      <SharedHeader />
      <PageBody className="utrecht-page-body--rhc-tinted rhc-templates-spacing-2">
        <SharedMainPageContent>
          <section className="rhc-templates-spacing-2" id="intro">
            <Grid paddingVertical="x-large">
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 8,
                  narrow: 4,
                  wide: 8,
                }}
              >
                <div className="rhc-margin-block-end-wrapper">
                  <Heading level={1}>De Rijkshuisstijl, toegankelijk gebouwd op het NL Design System</Heading>
                  <Paragraph>
                    De Rijkshuisstijl Community vertaalt de Rijkshuisstijl naar herbruikbare, toegankelijke front-end
                    componenten — gebouwd bovenop de fundamenten van NL Design System. Eén technische basis, met het
                    eigen uiterlijk en de unieke onderdelen van de Rijksoverheid.
                  </Paragraph>
                  <Paragraph>
                    <ButtonLink appearance="primary-action-button" href="/handboek/">
                      Aan de slag
                    </ButtonLink>
                    {/* <ButtonLink appearance="subtle-button" href="#nl-design-system">
                      Bekijk hoe het werkt
                    </ButtonLink> */}
                  </Paragraph>
                </div>
              </Grid.Cell>
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 4,
                  narrow: 4,
                  wide: 4,
                }}
              ></Grid.Cell>
            </Grid>
          </section>
        </SharedMainPageContent>
      </PageBody>
      <PageBody>
        <SharedMainPageContent>
          <section className="rhc-templates-spacing-1" id="nl-design-system">
            <Heading level={2}>Wat is NL Design System?</Heading>
            <Paragraph>
              NL Design System is een samenwerkingsverband van overheidsorganisaties die samen bouwen aan herbruikbare,
              toegankelijke en gebruiksvriendelijke componenten, patronen en richtlijnen voor digitale dienstverlening.
              Geen kant-en-klaar pakket, maar een groeiende verzameling bouwstenen die in de praktijk worden getoetst —
              met als doel een Hall of Fame van componenten die écht werken.
            </Paragraph>
            <Grid paddingVertical="x-large">
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <Card
                  href="https://nldesignsystem.nl/project/"
                  linkLabel="Bekijk Over NL Design System"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Over NL Design System
                    </Heading>
                  }
                >
                  <Paragraph>
                    De basiswaarden voor kleur, typografie, ruimte en meer, waarmee elke organisatie zijn eigen
                    huisstijl kan toepassen.
                  </Paragraph>
                </Card>
              </Grid.Cell>
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <Card
                  href="https://nldesignsystem.nl/componenten/"
                  linkLabel="Bekijk Componenten"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Componenten
                    </Heading>
                  }
                >
                  <Paragraph>
                    Herbruikbare, toegankelijke bouwstenen voor formulieren, navigatie, tabellen en meer.
                  </Paragraph>
                </Card>
              </Grid.Cell>
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <Card
                  href="https://nldesignsystem.nl/richtlijnen/"
                  linkLabel="Bekijk Richtlijnen en Toegankelijkheid (WCAG)"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Richtlijnen en Toegankelijkheid (WCAG)
                    </Heading>
                  }
                >
                  <Paragraph>
                    Componenten en richtlijnen die voldoen aan de toegankelijkheidseisen voor de overheid.
                  </Paragraph>
                </Card>
              </Grid.Cell>
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <Card
                  href="https://nldesignsystem.nl/community/"
                  linkLabel="Bekijk Open community"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Open community
                    </Heading>
                  }
                >
                  <Paragraph>Open source, zonder licentiekosten, met ruimte om op elk niveau mee te doen.</Paragraph>
                </Card>
              </Grid.Cell>
            </Grid>

            <ButtonLink href="https://nldesignsystem.nl/" target="_blank">
              Bekijk NL Design System
            </ButtonLink>
          </section>
          <Separator />
          <section className="rhc-templates-spacing-1" id="richtlijnen">
            <Heading level={2}>Waar begin je met de Rijkshuisstijl?</Heading>
            <Paragraph>
              Of je nu websites bouwt, designs maakt, content beheert of projecten leidt — hier vind je de juiste
              ingang.
            </Paragraph>
            <Grid paddingVertical="x-large">
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <Card
                  href="/handboek/voor-ontwikkelaars"
                  linkLabel="Bekijk Voor ontwikkelaars"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Als je bouwt
                    </Heading>
                  }
                >
                  <Paragraph>
                    Aan de slag met onze componenten, gebaseerd op NL Design System, in jouw codebase.
                  </Paragraph>
                </Card>
              </Grid.Cell>
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <Card
                  href="/handboek/voor-designers"
                  linkLabel="Bekijk Voor designers"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Als je ontwerpt
                    </Heading>
                  }
                >
                  <Paragraph>Gebruik onze Figma-bibliotheek met Rijkshuisstijl-componenten en design tokens.</Paragraph>
                </Card>
              </Grid.Cell>
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <Card
                  href="/handboek/voor-contentbeheerders"
                  linkLabel="Bekijk Voor contentbeheerders"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Als je content beheert
                    </Heading>
                  }
                >
                  <Paragraph>Richtlijnen voor toegankelijke en consistente content binnen de Rijkshuisstijl.</Paragraph>
                </Card>
              </Grid.Cell>
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <Card
                  href="/handboek/voor-projectleiders"
                  linkLabel="Bekijk Voor projectleiders"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Als je projecten leidt
                    </Heading>
                  }
                >
                  <Paragraph>Herbruikbare oplossingen die tijd en budget besparen voor jouw organisatie.</Paragraph>
                </Card>
              </Grid.Cell>
            </Grid>
          </section>
          <Separator />
          <section className="rhc-templates-spacing-1" id="componenten">
            <Heading level={2}>Gebruik de Rijkshuisstijl</Heading>
            <Paragraph>
              Net als NL Design System bieden we documentatie, componenten en voorbeelden — met de Rijkshuisstijl als
              laag erbovenop.
            </Paragraph>
            <Grid paddingVertical="x-large">
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <CardAsLink
                  href="#"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Richtlijnen
                    </Heading>
                  }
                >
                  <Paragraph>Stijlrichtlijnen voor typografie, kleuren en iconen volgens de Rijkshuisstijl.</Paragraph>
                </CardAsLink>
              </Grid.Cell>
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <CardAsLink
                  href="#"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Componenten
                    </Heading>
                  }
                >
                  <Paragraph>
                    Herbruikbare componenten, gebouwd op NL Design System, met Rijkshuisstijl-uiterlijk.
                  </Paragraph>
                </CardAsLink>
              </Grid.Cell>
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <CardAsLink
                  href="#"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Voorbeelden
                    </Heading>
                  }
                >
                  <Paragraph>Patronen en templates voor veelvoorkomende Rijksoverheid-scenario&apos;s.</Paragraph>
                </CardAsLink>
              </Grid.Cell>
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <CardAsLink
                  href="https://nldesignsystem.nl/"
                  target="_blank"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      NL Design System ↗
                    </Heading>
                  }
                >
                  <Paragraph>Het fundament waarop onze componenten en richtlijnen zijn gebouwd.</Paragraph>
                </CardAsLink>
              </Grid.Cell>
            </Grid>
          </section>
          {/* <Separator /> */}
          {/* <section id="laatste-updates" className="rhc-templates-spacing-1">
            <Heading level={2}>De laatste updates</Heading>
            <Heading appearanceLevel={3} level={3}>
              Update van 9 juni 2026
            </Heading>
            <Paragraph>
              Een korte terugblik op de afgelopen periode: nieuwe componenten die zijn toegevoegd aan de Rijkshuisstijl
              Community, de laatste ontwikkelingen rondom tooling en toegankelijkheid, en wat er de komende tijd op de
              planning staat.
            </Paragraph>
            <ButtonLink href="#updates">Eerdere updates</ButtonLink>
          </section> */}
          <Separator />
          <section className="rhc-templates-spacing-1" id="over">
            <Heading level={2}>Bouw mee met de Rijkshuisstijl Community</Heading>
            <Paragraph>
              De Rijkshuisstijl Community groeit door de inbreng van Rijksoverheidsorganisaties die hun componenten,
              kennis en ervaring delen. Of je nu een nieuw component hebt ontwikkeld, een verbetering signaleert of
              gewoon wilt meedenken — er is een plek om bij te dragen, op het niveau dat bij jouw organisatie past.
            </Paragraph>
            <Grid paddingVertical="x-large">
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <Card
                  className="rhc-card-as-link-no-link"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Bouw mee aan componenten
                    </Heading>
                  }
                >
                  <Paragraph>
                    Heeft jouw organisatie al componenten gebouwd op de Rijkshuisstijl? Draag ze bij zodat anderen ze
                    kunnen hergebruiken.
                  </Paragraph>
                </Card>
              </Grid.Cell>
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <Card
                  className="rhc-card-as-link-no-link"
                  linkLabel="Bekijk op GitHub"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Sluit aan bij de Open Hour
                    </Heading>
                  }
                >
                  <Paragraph>
                    Praat mee tijdens de Rijkshuisstijl Community Open Hour en deel ervaringen met andere organisaties.
                  </Paragraph>
                </Card>
              </Grid.Cell>
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <Card
                  className="rhc-card-as-link-no-link"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Denk mee over richtlijnen
                    </Heading>
                  }
                >
                  <Paragraph>
                    Geef feedback op de Rijkshuisstijl-richtlijnen en help mee om ze actueel en bruikbaar te houden.
                  </Paragraph>
                </Card>
              </Grid.Cell>
              <Grid.Cell
                className="_ams-item"
                span={{
                  medium: 3,
                  narrow: 3,
                  wide: 3,
                }}
              >
                <Card
                  className="rhc-card-as-link-no-link"
                  href="https://github.com/nl-design-system/rijkshuisstijl-community"
                  linkLabel="Bekijk op GitHub"
                  heading={
                    <Heading appearanceLevel={4} level={3}>
                      Draag bij op GitHub
                    </Heading>
                  }
                >
                  <Paragraph>
                    Open source en zonder licentiekosten: meld een issue, doe een pull request of help bij het testen.
                  </Paragraph>
                </Card>
              </Grid.Cell>
            </Grid>
          </section>
          {/* <Separator /> */}
          {/* <section id="community" className="rhc-templates-spacing-1">
            <Heading level={2}>Wie doen er al mee?</Heading>
            <Paragraph>Onderdeel van de bredere NL Design System community.</Paragraph>
            <Paragraph>Rijksoverheid · Logius · RVO · UWV · Belastingdienst · + jouw organisatie</Paragraph>
          </section>
          <Separator /> */}
          {/* <section id="updates" className="rhc-templates-spacing-2">
            <Heading level={2}>Blijf op de hoogte</Heading>
            <div className="rhc-card-as-link-group">
              <CardAsLink
                href="#"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Open Hour
                  </Heading>
                }
              >
                <Paragraph>
                  Sluit aan bij de Rijkshuisstijl Community Open Hour om kennis en ervaringen te delen.
                </Paragraph>
              </CardAsLink>
              <CardAsLink
                href="https://github.com/nl-design-system/rijkshuisstijl-community"
                target="_blank"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    GitHub ↗
                  </Heading>
                }
              >
                <Paragraph>Volg de ontwikkeling en draag bij aan onze repository.</Paragraph>
              </CardAsLink>
              <CardAsLink
                href="https://nldesignsystem.nl/events/heartbeat/aanmelden/"
                target="_blank"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Heartbeat ↗
                  </Heading>
                }
              >
                <Paragraph>
                  De 2-wekelijkse bijeenkomst van NL Design System, waar ook onze updates aan bod komen.
                </Paragraph>
              </CardAsLink>
            </div>
          </section> */}
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
