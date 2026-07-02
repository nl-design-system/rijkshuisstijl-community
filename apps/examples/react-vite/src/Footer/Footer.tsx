import { Icon, LinkList, LinkListLink, Footer as RhcFooter } from '@rijkshuisstijl-community/components-react';
import './Footer.css';

export function Footer() {
  return (
    <RhcFooter
      className="rhc-page-footer__layout"
      columns={[
        {
          heading: 'Over de Rijkshuisstijl Community',
          children: (
            <LinkList>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                NLDS Rijkshuisstijl Bibliotheek in Figma
              </LinkListLink>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                NLDS Rijkshuisstijl Templates in Figma
              </LinkListLink>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                Rijkshuisstijl Community Design Tokens
              </LinkListLink>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                Rijkshuisstijl Community Storybook
              </LinkListLink>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                Over de Rijkshuisstijl Community Sprint op NL Design System
              </LinkListLink>
            </LinkList>
          ),
        },
        {
          heading: 'Contact',
          children: (
            <LinkList>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                Slack #nl-design-system-developers<br></br>(Code for NL)
              </LinkListLink>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                Rijkshuisstijl styling discussies
              </LinkListLink>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                Contributors op Github
              </LinkListLink>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                NL Design System Kernteam
              </LinkListLink>
            </LinkList>
          ),
        },
      ]}
    />
  );
}
