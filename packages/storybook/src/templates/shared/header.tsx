import { Icon, Logo, NavBar, PageHeader, SkipLink } from '@rijkshuisstijl-community/components-react';

export default function SharedHeader() {
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
          items={[
            { id: '', href: '/', label: 'Homepage' },
            { id: '1', href: '/rich-text', label: 'Rich Text' },
            { id: '2', href: '/form', label: 'Form' },
            { id: '3', href: '/details', label: 'Details' },
            { id: '4', href: '/collage', label: 'Collage' },
            { id: '5', href: '/mijn-omgeving', label: 'Mijn Omgeving' },
            { id: '6', href: '/', label: 'Componenten' },
          ]}
        ></NavBar>
      </PageHeader>
    </>
  );
}
