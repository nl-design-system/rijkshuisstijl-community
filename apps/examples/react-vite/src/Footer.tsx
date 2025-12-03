import { LinkList, LinkListLink, Icon, Footer as RhcFooter, Paragraph } from "@rijkshuisstijl-community/components-react";

export function Footer() {
  return (
    <RhcFooter
      appearanceLevel={3}
      background="primary-filled"
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
                  Over deze organisatie
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                  Wetten en regelingen
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                  Copyright
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                  Privacy
                </LinkListLink>
              </LinkList>
            </>
          ),
          heading: 'Over deze site',
        },
      ]}
    />
  );
}
