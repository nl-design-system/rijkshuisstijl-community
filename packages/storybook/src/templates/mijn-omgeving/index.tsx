'use client';
import {
  AccordionProvider,
  ActionGroup,
  ButtonLink,
  Card,
  Heading,
  HeadingLevel,
  Icon,
  Link,
  MessageList,
  MessageListItem,
  NavigationList,
  NavigationListItem,
  NumberBadge,
  RHCIconID,
  Separator,
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavList,
} from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import { Fragment, ReactNode } from 'react';
import SharedDisclaimer from '../shared/disclaimer';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';
import './index.css';

export const sideNav: {
  id: string;
  items: {
    href: string;
    icon: RHCIconID;
    label: string;
    numberBadgeValue?: number;
    numberBadgeLabel?: string;
  }[];
}[] = [
  {
    id: '1',
    items: [{ href: '/mijn-omgeving/', icon: 'home', label: 'Overzicht' }],
  },
  {
    id: '2',
    items: [
      {
        href: '/mijn-omgeving-berichtenbox/',
        icon: 'mail',
        label: 'Berichtenbox',
        numberBadgeValue: 4,
        numberBadgeLabel: '4 berichten',
      },
      { href: '#', icon: 'inbox', label: 'MijnZaken' },
    ],
  },
  {
    id: '3',
    items: [
      { href: '/mijn-omgeving-identiteit/', icon: 'user', label: 'Identiteit' },
      { href: '/mijn-omgeving-financien/', icon: 'currency-euro', label: 'Financiën' },
      { href: '/mijn-omgeving-werk/', icon: 'briefcase', label: 'Werk' },
      { href: '/mijn-omgeving-gezondheid/', icon: 'favoriet', label: 'Gezondheid' },
      { href: '/mijn-omgeving-wonen/', icon: 'home', label: 'Wonen' },
      { href: '/mijn-omgeving-vervoer/', icon: 'car', label: 'Vervoer' },
      { href: '/mijn-omgeving-onderwijs/', icon: 'school', label: 'Onderwijs' },
    ],
  },
  {
    id: '4',
    items: [{ href: '/mijn-omgeving-instellingen/', icon: 'instellingen', label: 'Instellingen' }],
  },
];

export const useSideNav = ({ items }: { items: typeof sideNav }) => ({
  children: items.map(({ id, items }, index) => (
    <Fragment key={id}>
      {index >= 1 ? <Separator invisible /> : null}
      <SideNavList key={index}>
        {items.map(({ href, icon, label, numberBadgeLabel, numberBadgeValue }) => (
          <SideNavItem key={href}>
            <SideNavLink href={href} icon={icon}>
              {label}
              {numberBadgeLabel && numberBadgeValue ? (
                <NumberBadge label={numberBadgeLabel}>{numberBadgeValue}</NumberBadge>
              ) : null}
            </SideNavLink>
          </SideNavItem>
        ))}
      </SideNavList>
    </Fragment>
  )),
});

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
      <SharedHeader />
      <PageBody className="utrecht-page-body--rhc-mijn-omgeving">
        <SharedMainPageContent>
          <SharedDisclaimer />
          <SideNav className="rhc-side-nav" heading="Submenu" {...useSideNav({ items: sideNav })} />
          <section className={'rhc-page-main-content'}>
            <Heading level={1}>Welkom Bert Burger</Heading>
            <div>
              <Heading level={2}>Recent</Heading>
              <Separator invisible />
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
            <div>
              <Heading level={2}>Wat kan ik waar vinden?</Heading>
              <Separator invisible />
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
      <SharedFooter isLightTheme={true} />
    </>
  );
}
