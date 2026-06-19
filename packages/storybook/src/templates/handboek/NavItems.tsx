import { SideNavItem, SideNavLink, SideNavList } from '@rijkshuisstijl-community/components-react';
import type { NavItem } from './navigation';

const normalize = (path: string) => path.replace(/\/$/, '');

const isAncestorActive = (href: string, currentPath: string) =>
  normalize(currentPath).startsWith(normalize(href));

export const NavItems = ({
  items,
  currentPath = typeof window !== 'undefined' ? window.location.pathname : undefined,
}: {
  items: NavItem[];
  currentPath?: string;
}) => (
  <SideNavList>
    {items.map(({ href, label, children }) => {
      const expanded =
        children && children.length > 0 && currentPath !== undefined && isAncestorActive(href, currentPath);
      return (
        <SideNavItem key={href} {...(children && children.length > 0 ? { 'aria-expanded': Boolean(expanded) } : {})}>
          <SideNavLink href={href} current={currentPath !== undefined && normalize(currentPath) === normalize(href)}>
            {label}
          </SideNavLink>
          {expanded && <NavItems items={children!} currentPath={currentPath} />}
        </SideNavItem>
      );
    })}
  </SideNavList>
);
