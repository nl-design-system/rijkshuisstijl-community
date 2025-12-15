import { LinkList, LinkListLink, Icon, Footer as RhcFooter, Paragraph } from "@rijkshuisstijl-community/components-react";
import './Footer.css';

export function Footer() {
  return (
    
    <RhcFooter className='rhc-page-footer__layout'
      appearanceLevel={3}
      background="primary-filed"
      backtotop
      columns={[
        {
          appearanceLevel: 3,
          children: (
            <>
            <Paragraph>
              Dit is geen officiële website van de makers van de Rijkshuisstijl. Dit project wordt niet gesteund door het Ministerie van Algemene Zaken.
            </Paragraph>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                De officiele Rijkshuisstijl website
              </LinkListLink>
            </>
          ),
          heading: 'Disclaimer',
        },
        {
          appearanceLevel: 3,
          children: (
            <>
              <LinkList>
                <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                  Slack #nl-design-system-developers<br>
                  </br>(Code for NL)
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
            </>
          ),
          heading: 'Contact',
        },

        {
          appearanceLevel: 3,
          children: (
            <>
              <LinkList>
                <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                  NLDS Rijkshuisstijl Bibliotheek in Figma
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                  NLLDS Rijkshuisstijl Templates in Figma 
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
            </>
          ),
          heading: 'Over de Rijkshuisstijl Community',
        },
      ]}
    />
  );
}
