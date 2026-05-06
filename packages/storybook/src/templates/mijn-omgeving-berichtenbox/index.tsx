'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file
import {
  AccordionProvider,
  Heading,
  Icon,
  Link,
  MessageList,
  MessageListItem,
  Separator,
  SideNav,
} from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import { sideNav, useSideNav } from '../mijn-omgeving';
import SharedDisclaimer from '../shared/disclaimer';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';
import '../mijn-omgeving/index.css';

export default function MijnOmgeving() {
  return (
    <>
      <SharedHeader />
      <PageBody className="utrecht-page-body--rhc-mijn-omgeving">
        <SharedMainPageContent>
          <SharedDisclaimer />
          <SideNav className="rhc-side-nav" heading="Submenu" {...useSideNav({ items: sideNav })} />
          <section className={'rhc-page-main-content'}>
            <Heading level={1}>Berichtenbox</Heading>
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
              <Link className="" href="#">
                Bekijk aangesloten organisaties
                <Icon icon={'pijl-naar-rechts'} />
              </Link>
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
