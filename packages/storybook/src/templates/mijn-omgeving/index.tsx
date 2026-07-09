'use client';
import {
  AccordionProvider,
  ActionGroup,
  Alert,
  ButtonLink,
  Card,
  Footer,
  Heading,
  HeadingLevel,
  Icon,
  Link,
  MessageList,
  MessageListItem,
  NavigationList,
  NavigationListItem,
  Paragraph,
  Separator,
} from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import { ReactNode } from 'react';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';
import { SharedSideNav } from '../shared/side-nav';
import './index.css';

export { sideNav, useSideNav } from '../shared/side-nav';

export const useCards = ({
  items,
  headingLevel,
}: {
  items: {
    href: string;
    content: ReactNode;
    heading: ReactNode;
    linkLabel: string;
    external?: boolean;
  }[];
  headingLevel: number;
}) => ({
  children: items.map(({ href, content, linkLabel, heading, external }, index) => (
    <Card heading={heading} headingLevel={headingLevel as HeadingLevel} key={index}>
      {content}
      <ActionGroup>
        <ButtonLink appearance={external ? 'subtle-button' : 'primary-action-button'} href={href}>
          {linkLabel}
        </ButtonLink>
      </ActionGroup>
    </Card>
  )),
});

export default function MijnOmgeving() {
  return (
    <>
      <SharedHeader organisation="Rijksoverheid" />
      <PageBody className="utrecht-page-body--rhc-mijn-omgeving">
        <SharedMainPageContent>
          <SharedSideNav currentHref="/mijn-omgeving/" />
          <section className={'rhc-page-main-content'}>
            <Heading level={1}>Welkom Bert Burger</Heading>
            <Alert type="info">
              <Heading appearanceLevel={5} level={2}>
                Optional heading
              </Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur. Purus pulvinar ut volutpat imperdiet iaculis vitae ipsum risus
                faucibus. Varius odio tellus ut iaculis purus quam tristique vitae cras. Phasellus tincidunt enim
                bibendum tristique turpis diam quam proin. Ac et interdum viverra viverra. A nulla pretium massa
                faucibus ullamcorper etiam id in.
              </Paragraph>
            </Alert>
            {/* Full-width card-container (ontwerp): witte kaart met subtiele rand en afgeronde rechterbovenhoek. */}
            <div className="rhc-mijn-omgeving-card">
              <Heading level={2}>Recent</Heading>
              <MessageList>
                <MessageListItem
                  description={'Update: Uw klacht bij gemeente Utrecht'}
                  href={'#'}
                  label={'Gemeente Utrecht'}
                  metaData={'18/06/2024'}
                />
                <MessageListItem description={'Herinnering APK'} href={'#'} label={'RDW'} metaData={'01/06/2024'} />
                <MessageListItem
                  description={'Vergunning uitbouw achter'}
                  href={'#'}
                  label={'Gemeente Den Haag'}
                  metaData={'01/05/2024'}
                />
                <MessageListItem
                  description={'Uw pensioenoverzicht'}
                  href={'#'}
                  label={'Pensioenfonds'}
                  metaData={'03/03/2024'}
                />
              </MessageList>
            </div>
            <div className="rhc-mijn-omgeving-card">
              <Heading level={2}>Wat kan ik waar vinden?</Heading>
              <NavigationList>
                <NavigationListItem
                  description="Uw gegevens, familie en identiteitsbewijs"
                  href="/mijn-omgeving-identiteit/"
                  icon="user"
                  label="Identiteit"
                />
                <NavigationListItem
                  description="Uw inkomen, toeslagen, bijdragen en belastingen"
                  href="/mijn-omgeving-financien/"
                  icon="currency-euro"
                  label="Financiën"
                />
                <NavigationListItem
                  description="Uw pensioen, arbeidsgegevens en uitkeringen"
                  href="/mijn-omgeving-werk/"
                  icon="briefcase"
                  label="Werk"
                />
                <NavigationListItem
                  description="Donorregister en Persoonsgebonden budget"
                  href="/mijn-omgeving-gezondheid/"
                  icon="favoriet"
                  label="Gezondheid"
                />
                <NavigationListItem
                  description="Uw energielabel, kadastrale- en WOZ-gegevens"
                  href="/mijn-omgeving-wonen/"
                  icon="home"
                  label="Wonen"
                />
                <NavigationListItem
                  description="Uw voertuigen"
                  href="/mijn-omgeving-vervoer/"
                  icon="car"
                  label="Vervoer"
                />{' '}
                <NavigationListItem
                  description="Uw diploma’s en studiefinanciering / studieschuld"
                  href="/mijn-omgeving-onderwijs/"
                  icon="backpack"
                  label="Onderwijs"
                />
              </NavigationList>
            </div>
            <div>
              <Heading level={2}>Veelgestelde vragen</Heading>
              <Separator invisible />
              <AccordionProvider
                sections={[
                  {
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
                    label: 'Van welke organisaties kan ik berichten digitaal ontvangen?',
                  },
                  {
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
                    label: 'Wie heeft toegang tot mijn gegevens in MijnOverheid?',
                  },
                  {
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
                    label: 'Ik wil mijn account opzeggen. Kan dat?',
                  },
                ]}
              />
              <Separator invisible />
              <Link className="" href="#">
                Bekijk alle veelgestelde vragen
                <Icon icon={'pijl-naar-rechts'} />
              </Link>
            </div>
          </section>
        </SharedMainPageContent>
      </PageBody>
      {/* GAP: de compacte Page Footer-variant bestaat nog niet (#2649); hier staat de standaard footer. */}
      <Footer tagline="De Rijksoverheid. Voor Nederland" variant="compact">
        <Link href="#">Contact</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Cookies en anti-spam</Link>
        <Link href="#">Toegankelijkheid</Link>
        <Link href="#">Proclaimer</Link>
      </Footer>
    </>
  );
}
