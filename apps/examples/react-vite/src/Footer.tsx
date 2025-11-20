import { LinkList, LinkListLink, Icon, Paragraph, Footer as RhcFooter } from "@rijkshuisstijl-community/components-react";

export function Footer() {
  return (
    // <div>
    //     Footer
    // </div>
    <RhcFooter
      appearanceLevel={3}
      background="primary-filled"
      backtotop
      columns={[
        {
          appearanceLevel: 3,
          children: (
            <LinkList>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                Contact
              </LinkListLink>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                Abonneren
              </LinkListLink>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                RSS
              </LinkListLink>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                Vacatures
              </LinkListLink>
              <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                Sitemap
              </LinkListLink>
            </LinkList>
          ),
          heading: 'Service',
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
      subFooter={
        <LinkList>
          <LinkListLink href="#">Privacy</LinkListLink>
        </LinkList>
      }
    />
  );
}
