import { Icon, Logo, NavBar, PageHeader, SkipLink } from '@rijkshuisstijl-community/components-react';
import './header.css';
import { useEffect } from 'react';

// TODO change this temporary hacky solution to a decent one after demo
export default function SharedHeader() {
  useEffect(() => {
    const pathname = window.location.pathname;
    document.querySelectorAll('.rhc-nav-bar__link').forEach(($link) => {
      $link.classList.toggle('rhc-nav-bar__link--current', $link.getAttribute('href') === pathname);
    });
  }, []);
  return (
    <>
      <SkipLink className="rhc-skip-link--visible-on-focus" href="#main" id="top">
        Ga naar hoofdinhoud
      </SkipLink>
      <PageHeader>
        <Logo organisation="Rijkshuisstijl Community">
          <Icon className={'dutch-map'} icon={'nederland-map'} />
        </Logo>
        <NavBar
          endItems={[
            {
              id: 'end1',
              target: '_blank',
              href: 'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?m=auto',
              label: 'Figma',
            },
            {
              id: 'end2',
              target: '_blank',
              href: 'https://github.com/nl-design-system/rijkshuisstijl-community',
              label: 'GitHub',
            },
            { id: 'end3', target: '_blank', href: 'https://rijkshuisstijl-community.vercel.app/', label: 'Storybook' },
          ]}
          items={[
            { id: 'start1', href: '/', label: 'Homepage' },
            { id: 'start2', href: '/rich-text/', label: 'Rich Text' },
            { id: 'start3', href: '/form/', label: 'Form' },
            { id: 'start4', href: '/details/', label: 'Details' },
            { id: 'start5', href: '/collage/', label: 'Collage' },
            { id: 'start6', href: '/mijn-omgeving/', label: 'Mijn Omgeving' },
            { id: 'start7', href: '/componenten/', label: 'Componenten' },
          ]}
        ></NavBar>
      </PageHeader>
    </>
  );
}
