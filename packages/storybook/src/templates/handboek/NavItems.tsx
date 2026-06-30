import { SideNavItem, SideNavLink, SideNavList } from '@rijkshuisstijl-community/components-react';
import { useEffect, useState } from 'react';
import type { NavItem } from './navigation';

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
  const [clientPath, setClientPath] = useState<string | undefined>();

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
            <SideNavLink current={activePath !== undefined && normalize(activePath) === normalize(href)} href={href}>
              {label}
            </SideNavLink>
            {expanded && <NavItems currentPath={activePath} items={children!} />}
          </SideNavItem>
        );
      })}
    </SideNavList>
  );
};
