import { Icon, Logo, NavBar , PageHeader } from '@rijkshuisstijl-community/components-react';

import './index.css'

export function Header() {
  return (
    <>
      <PageHeader>
        <Logo
          organisation="Rijkshuisstijl Community"
          style={{
            '--rhc-logo-color': '#154273',
            '--rhc-logo-image-background-color': '#ffffff',
            '--rhc-logo-image-color': '#154273',
          }}
          subtitle=""
        >
          <Icon icon="nederland-map" />
        </Logo>
        <NavBar className='rhc-nav-bar'
        endItems={[
    {
      href: '/',
      id: 'end-first-link',
      label: 'Figma'
    },
    {
      href: '/',
      id: 'end-second-link',
      label: 'Github'
    },
    {
      href: '/',
      id: 'end-third-link',
      label: 'Storybook'
    }
  ]}
  items={[
    {
      href: '/',
      id: 'first-link',
      label: 'Homepage'
    },
    {
      href: '/',
      id: 'second-link',
      label: 'Componenten'
    },
    {
      href: '/',
      id: 'third-link',
      label: 'Voorbeelden'
    }
  ]}
    
        />
      </PageHeader>
    </>
  );
}
