import { Footer, LinkList, LinkListLink, Paragraph } from '@rijkshuisstijl-community/components-react';
import { Icon } from '@rijkshuisstijl-community/icon-react';
import './footer.css';

export default function SharedFooter({ isLightTheme }: { isLightTheme?: boolean }) {
  return (
    <>
      <Footer
        appearanceLevel={4}
        background={isLightTheme ? 'primary-outlined' : 'primary-filled'}
        backtotop={true}
        className="rhc-sr-only"
        heading="Footer"
        columns={[
          {
            heading: 'Disclaimer',
            children: (
              <>
                <Paragraph>
                  Dit is geen officiële website van de makers van de Rijkshuisstijl. Dit project wordt niet gesteund
                  door het Ministerie van Algemene Zaken.
                </Paragraph>
                <LinkList key="1">
                  <LinkListLink
                    href="https://www.rijkshuisstijl.nl/"
                    icon={<Icon icon={'chevron-right'} />}
                    target="_blank"
                  >
                    De officiële Rijkshuisstijl website
                  </LinkListLink>
                </LinkList>
              </>
            ),
          },
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
          {
            heading: 'Contact',
            children: (
              <LinkList key="3">
                <LinkListLink
                  href="https://praatmee.codefor.nl/"
                  icon={<Icon icon={'chevron-right'} />}
                  target="_blank"
                >
                  Slack #nl-design-system-developers (Code for NL)
                </LinkListLink>
                <LinkListLink
                  href="https://github.com/nl-design-system/rijkshuisstijl-community/discussions/1505"
                  icon={<Icon icon={'chevron-right'} />}
                  target="_blank"
                >
                  Rijkshuisstijl styling discussies
                </LinkListLink>
                <LinkListLink
                  href="https://github.com/nl-design-system/rijkshuisstijl-community/graphs/contributors"
                  icon={<Icon icon={'chevron-right'} />}
                  target="_blank"
                >
                  Contributors op GitHub
                </LinkListLink>
                <LinkListLink
                  href="https://nldesignsystem.nl/project/kernteam/"
                  icon={<Icon icon={'chevron-right'} />}
                  target="_blank"
                >
                  NL Design System kernteam
                </LinkListLink>
              </LinkList>
            ),
          },
        ]}
      />
    </>
  );
}
