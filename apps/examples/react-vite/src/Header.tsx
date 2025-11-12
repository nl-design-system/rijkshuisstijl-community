import { NavBar, type NavBarItemProps, PageHeader} from '@rijkshuisstijl-community/components-react';

export function Header() {
//   let currentPath = '';
//   if ('/' === '/') {
//     currentPath = 'rhc-nav-bar__link--current';
//   } else {
//     currentPath = '';
//   }

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
    }, {
      id: 'start5',
      href: '/',
      label: 'Regelingen',
    },
  ];

  return (
    <PageHeader>
        <NavBar
            items ={items}
        />
    </PageHeader>
  )
}
