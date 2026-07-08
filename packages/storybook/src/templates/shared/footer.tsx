import { Footer, Icon, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';

export default function SharedFooter({ isLightTheme }: Readonly<{ isLightTheme?: boolean }>) {
  return (
    <Footer
      appearanceLevel={4}
      background={isLightTheme ? 'primary-outlined' : 'primary-filled'}
      backtotop={true}
      tagline="NL Design System voor de rijksoverheid"
      columns={[
        {
          appearanceLevel: 3,
          heading: 'Over de Rijkshuisstijl Community',
          children: [
            <LinkList key="2">
              <LinkListLink
                href="https://github.com/nl-design-system/rijkshuisstijl-community"
                icon={<Icon icon={'chevron-right'} />}
                target="_blank"
              >
                Rijkshuisstijl Community op GitHub
              </LinkListLink>
              <LinkListLink
                href="https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/NL-Design-System---Bibliotheek---Rijkshuisstijl-Community"
                icon={<Icon icon={'chevron-right'} />}
                target="_blank"
              >
                NLDS Rijkshuisstijl Bibliotheek in Figma
              </LinkListLink>
              <LinkListLink
                href="https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NL-Design-System---Templates---Rijkshuisstijl"
                icon={<Icon icon={'chevron-right'} />}
                target="_blank"
              >
                NLDS Rijkshuisstijl Templates in Figma
              </LinkListLink>
              <LinkListLink
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/proprietary/design-tokens/README.md"
                icon={<Icon icon={'chevron-right'} />}
                target="_blank"
              >
                Rijkshuisstijl Community Design Tokens
              </LinkListLink>
              <LinkListLink
                href="https://rijkshuisstijl-community.vercel.app/"
                icon={<Icon icon={'chevron-right'} />}
                target="_blank"
              >
                Rijkshuisstijl Community Storybook
              </LinkListLink>
              {/* TODO: onderstaande link updaten zodra nieuwe community sprint pagina live is, huidige is oude pagina */}
              <LinkListLink
                href="https://nldesignsystem.nl/community/community-sprints/"
                icon={<Icon icon={'chevron-right'} />}
                target="_blank"
              >
                Over de Rijkshuisstijl Community Sprint op NL Design System
              </LinkListLink>
            </LinkList>,
          ],
        },
      ]}
    />
  );
}
