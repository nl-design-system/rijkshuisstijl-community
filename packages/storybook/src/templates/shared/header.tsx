import { Icon, Logo, NavBar, NavBarItemProps, PageHeader, SkipLink } from '@rijkshuisstijl-community/components-react';
import './header.css';
import { useEffect, useState } from 'react';

export default function SharedHeader() {
  const [pathname, setPathname] = useState('');
  useEffect(() => {
    // NB: set the pathname when the component mounts, this is done in a useEffect hook to not error in a server environment
    setPathname(window.location.pathname);
  }, []);

  const items: NavBarItemProps[] = [
    {
      href: '/',
      label: 'Homepage',
      className: pathname === '/' ? 'rhc-nav-bar__link--current' : '',
    },
    {
      href: '/design-tokens/',
      label: 'Design Tokens',
      className: pathname === '/design-tokens/' ? 'rhc-nav-bar__link--current' : '',
    },
    {
      href: '/voorbeelden/',
      label: 'Voorbeelden',
      className: pathname === '/voorbeelden/' ? 'rhc-nav-bar__link--current' : '',
    },
  ].map(({ ...props }) => ({
    ...props,
    id: props.href,
  }));

  return (
    <PageHeader>
      <SkipLink className="rhc-skip-link--visible-on-focus" href="#main" id="top">
        Ga naar hoofdinhoud
      </SkipLink>
      <div className="rhc-page-header-layout">
        <Logo organisation="Rijkshuisstijl Community">
          <Icon className={'dutch-map'} icon={'nederland-map'} />
        </Logo>
        <NavBar
          items={items}
          endItems={[
            {
              id: 'end1',
              target: '_blank',
              href: 'https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/NL-Design-System---Bibliotheek---Rijkshuisstijl-Community',
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
        />
      </div>
    </PageHeader>
  );
}
