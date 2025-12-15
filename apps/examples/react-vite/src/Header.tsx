import { Icon, Logo, NavBar, type NavBarItemProps, PageHeader } from '@rijkshuisstijl-community/components-react';

export function Header() {
  const items: NavBarItemProps[] = [
    {
      id: 'start1',
      href: '/',
      label: 'Homepage',
      className: 'rhc-nav-bar__link--current',
    },
    {
      id: 'start2',
      href: '/',
      label: 'Koop',
    },
    {
      id: 'start3',
      href: '/',
      label: 'Documentatie',
    },
    {
      id: 'start4',
      href: '/',
      label: 'Communicatie',
    },
    {
      id: 'start5',
      href: '/',
      label: 'Regelingen',
    },
  ];

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

        <NavBar items={items} />
      </PageHeader>
    </>
  );
}
