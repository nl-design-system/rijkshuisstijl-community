import { SideNavItem, SideNavLink, SideNavList } from '@rijkshuisstijl-community/components-react';
import type { NavItem } from './navigation';
import { useEffect, useState } from 'react';

const normalize = (path: string) => path.replace(/\/$/, '');

const isAncestorActive = (href: string, currentPath: string) =>
  normalize(currentPath).startsWith(normalize(href));

export const NavItems = ({
  items,
  currentPath,
}: {
  items: NavItem[];
  currentPath?: string;
}) => {
  const [clientPath, setClientPath] = useState<string | undefined>(undefined);

  useEffect(() => {
    setClientPath(globalThis.location.pathname);
  }, []);

  const activePath = currentPath ?? clientPath;

  return (
    <SideNavList>
      {items.map(({ href, label, children }) => {
        const expanded =
          children && children.length > 0 && activePath !== undefined && isAncestorActive(href, activePath);
        return (
          <SideNavItem key={href} {...(children && children.length > 0 ? { 'aria-expanded': Boolean(expanded) } : {})}>
            <SideNavLink href={href} current={activePath !== undefined && normalize(activePath) === normalize(href)}>
              {label}
            </SideNavLink>
            {expanded && <NavItems items={children!} currentPath={activePath} />}
          </SideNavItem>
        );
      })}
    </SideNavList>
  );
};
