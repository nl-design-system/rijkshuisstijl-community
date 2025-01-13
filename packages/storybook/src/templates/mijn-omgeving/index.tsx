import {
  AccordionProvider,
  Footer,
  Heading,
  Icon,
  Link,
  LinkList,
  LinkListLink,
  Logo,
  MessageList,
  MessageListItem,
  NavBar,
  NavigationList,
  NavigationListItem,
  NumberBadge,
  PageContent,
  PageHeader,
  Separator,
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavList,
} from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';

export default function MijnOmgeving() {
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
      <PageBody className="rhc-templates-page  rhc-templates-background-color-white">
        <PageContent className="rhc-templates-page-container">
          <SideNav className={'rhc-side-nav'}>
            <SideNavList>
              <SideNavItem>
                <SideNavLink href="/#" icon="mail">
                  Berichtenbox
                </SideNavLink>
              </SideNavItem>
              <SideNavItem>
                <SideNavLink href="/#" icon="inbox">
                  MijnZaken
                  <NumberBadge>2</NumberBadge>
                </SideNavLink>
              </SideNavItem>
            </SideNavList>
            <Separator invisible />
            <SideNavList>
              <SideNavItem>
                <SideNavLink href="/#" icon="user">
                  Identiteit
                </SideNavLink>
              </SideNavItem>
              <SideNavItem>
                <SideNavLink href="/#" icon="currency-euro">
                  Financiën
                </SideNavLink>
              </SideNavItem>
              <SideNavItem>
                <SideNavLink href="/#" icon="briefcase">
                  Werk
                </SideNavLink>
              </SideNavItem>
              <SideNavItem>
                <SideNavLink href="/#" icon="favoriet">
                  Gezondheid
                </SideNavLink>
              </SideNavItem>
              <SideNavItem>
                <SideNavLink href="/#" icon="home">
                  Wonen
                </SideNavLink>
              </SideNavItem>
              <SideNavItem>
                <SideNavLink href="/#" icon="car">
                  Vervoer
                </SideNavLink>
              </SideNavItem>
              <SideNavItem>
                <SideNavLink href="/#" icon="school">
                  Onderwijs
                </SideNavLink>
              </SideNavItem>
            </SideNavList>
            <Separator invisible />
            <SideNavList>
              <SideNavItem>
                <SideNavLink href="/#" icon="instellingen">
                  Instellingen
                </SideNavLink>
              </SideNavItem>
            </SideNavList>
          </SideNav>
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
                  href={'#'}
                  icon="user"
                  label="Identiteit"
                />
                <NavigationListItem
                  description="Uw inkomen, toeslagen, bijdragen en belastingen"
                  href={'#'}
                  icon="currency-euro"
                  label="Financiën"
                />
                <NavigationListItem
                  description="Uw pensioen, arbeidsgegevens en uitkeringen"
                  href={'#'}
                  icon="briefcase"
                  label="Werk"
                />{' '}
                <NavigationListItem
                  description="Donorregister en Persoonsgebonden budget"
                  href={'#'}
                  icon="favoriet"
                  label="Gezondheid"
                />{' '}
                <NavigationListItem
                  description="Uw energielabel, kadastrale- en WOZ-gegevens"
                  href={'#'}
                  icon="home"
                  label="Wonen"
                />{' '}
                <NavigationListItem description="Uw voertuigen" href={'#'} icon="car" label="Vervoer" />{' '}
                <NavigationListItem
                  description="Uw diploma’s en studiefinanciering / studieschuld"
                  href={'#'}
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
        </PageContent>
      </PageBody>
      <Footer
        appearanceLevel={4}
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
