'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import { CodeBlock } from '@nl-design-system-candidate/code-block-react';
import {
  Article,
  Heading,
  Link,
  Paragraph,
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavList,
} from '@rijkshuisstijl-community/components-react';
import { Code, URLData } from '@utrecht/component-library-react';
import { PageBodyContainer, PageBodyContent, PageBodyMain } from './PageBody';
import { navigation } from './navigation';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import './index.css';

export default function Page() {
  return (
    <>
      <SharedHeader />
      <PageBodyContainer>
        <PageBodyContent layout="side-nav">
          <SideNav className="rhc-side-nav" heading="Submenu">
            <SideNavList>
              {navigation.map(({ href, label }) => (
                <SideNavItem key={href}>
                  <SideNavLink href={href}>{label}</SideNavLink>
                </SideNavItem>
              ))}
            </SideNavList>
          </SideNav>
          <PageBodyMain>
            <Article>
              <div
                className="rhc-margin-block-end-wrapper"
                style={{ display: 'flex', flexDirection: 'column', rowGap: 'var(--rhc-space-200)' }}
              >
                <Heading level={1}>Design Tokens</Heading>
                <Paragraph purpose="lead">
                  Met design tokens kun je veel sneller voldoen aan de huisstijl, omdat alle mogelijke opties al
                  beschikbaar zijn gemaakt in handige bestandjes voor developers en designers.
                </Paragraph>
                <Paragraph>
                  Vroeger was een huisstijlgids de bron om kleurcodes te kopiëren. De nieuwe werkwijze is: vind de
                  juiste design token, en koppel die in je design en code.
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Groot voordeel: het design kan zich dan automatisch aanpassen, door een extra set design tokens.
                    Bijvoorbeeld kleuren voor dark mode. Of fluid design, met kleine letters en compactere layout voor
                    kleine schermen, en grote letters en een ruime layout voor groter schermen.
                  </Paragraph>
                  <Paragraph>
                    Ook handig: er zijn regelmatig updates aan de design tokens, en de designs kunnen dan zonder veel
                    moeite de verbeteringen toepassen.
                  </Paragraph>
                  <Heading level={2}>Code</Heading>
                  In CSS gebruik je design tokens door een CSS variable te gebruiken in plaats van een gekopieerde
                  waarde. Door de voorspelbare namen in het design system, is het vaak ook makkelijker in gebruik.
                  Bijvoorbeeld:
                </Paragraph>
                <CodeBlock>
                  {`.example-card {
    background: var(--rhc-color-lintblauw-50);
    border-radius: var(--rhc-border-radius-md);
    border: 1px solid var(--rhc-color-lintblauw-100);
    color: var(--rhc-color-lintblauw-500);
    font-family: var(--rhc-text-font-family-sans);
    font-size: var(--rhc-text-font-size-lg);
    font-weight: var(--rhc-text-font-weight-regular);
    line-height: var(--rhc-text-font-size-md);
    padding: var(--rhc-space-400);
}`}
                </CodeBlock>
                <Paragraph>
                  De waarde van elke design token wordt aangeleverd in een CSS-bestand van het design system. Een
                  prototype met HTML, ziet er bijvoorbeeld zo uit:
                </Paragraph>
                <CodeBlock>
                  {`<!DOCTYPE html>
<html class="rhc-theme" lang="en" dir="ltr">
  <head>
    <link
      rel="stylesheet"
      href="https://unpkg.com/@rijkshuisstijl-community/design-tokens/dist/index.css"
    />
  </head>
  <body>
    <div class="example-card">Hello, world!</div>
  </body>
</html>`}
                </CodeBlock>
                <Heading level={3}>Installatie</Heading>
                <Paragraph>
                  Installeer de laatste versie van design tokens in je project met npm of pnpm. Op deze manier kun je
                  ook makkelijk updaten naar nieuwe versies:
                </Paragraph>
                <CodeBlock>{`npm install @rijkshuisstijl-communty/design-tokens@latest`}</CodeBlock>
                <Paragraph>Of:</Paragraph>
                <CodeBlock>{`pnpm add @rijkshuisstijl-communty/design-tokens@latest`}</CodeBlock>
                <Paragraph>
                  Bekijk de npm package:{' '}
                  <Link href="https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens">
                    @rijkshuisstijl-community/design-tokens
                  </Link>
                </Paragraph>
                <Heading level={2}>Design</Heading>
                <Paragraph>
                  Lees het{' '}
                  <Link href="https://nldesignsystem.nl/handboek/designer/figma-stappenplan/">Figma Stappenplan</Link>{' '}
                  bij NL Design System over hoe je in het algemeen de Figma bibliotheek koppelt aan design tokens. Op
                  deze manier kun je ook de{' '}
                  <Link href="https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj">
                    Rijkshuisstijl Community Bibliotheek in Figma
                  </Link>{' '}
                  koppelen aan de design tokens. Gebruik de volgende URL als sync provider in{' '}
                  <Link href="https://tokens.studio">Tokens Studio</Link>:
                </Paragraph>
                <Paragraph>
                  <Link href="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/refs/heads/main/proprietary/design-tokens/figma/figma.tokens.json">
                    <Code>
                      <URLData>
                        https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/refs/heads/main/proprietary/design-tokens/figma/figma.tokens.json
                      </URLData>
                    </Code>
                  </Link>
                </Paragraph>
                <Paragraph>
                  Bekijk de Design Tokens JSON op GitHub, als je die wilt kopiëren:{' '}
                  <Link href="https://github.com/nl-design-system/rijkshuisstijl-community/tree/main/proprietary/design-tokens/figma/figma.tokens.json">
                    <Code>figma.tokens.json</Code> in de rijkshuisstijl-community repository
                  </Link>
                  .
                </Paragraph>
                <Heading level={2}>Changelog</Heading>
                <Paragraph>
                  Er komen regelmatig nieuwe versies uit van de design tokens. Lees{' '}
                  <Link href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/proprietary/design-tokens/CHANGELOG.md">
                    de changelog van de design tokens
                  </Link>{' '}
                  om de ontwikkelingen te volgen.
                </Paragraph>
              </div>
            </Article>
          </PageBodyMain>
        </PageBodyContent>
      </PageBodyContainer>
      <SharedFooter />
    </>
  );
}
