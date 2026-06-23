import { Heading, Icon, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { LinkList } from '@utrecht/component-library-react';
import PageLayoutTwoColumnSidenav from '../PageLayoutTwoColumnSidenav';

export default function Page() {
  return (
    <PageLayoutTwoColumnSidenav>
      <div className="rhc-margin-block-end-wrapper">
        <Heading level={1}>Handboek</Heading>
        {/* <Paragraph>Introductie paragraaf</Paragraph> */}
        <LinkList>
          <LinkListLink href="/handboek/huisstijl-vastleggen" icon={<Icon icon="chevron-right" />}>
            Huisstijl vastleggen
          </LinkListLink>
          <LinkListLink href="/handboek/voor-designers" icon={<Icon icon="chevron-right" />}>
            Voor designers
          </LinkListLink>
          <LinkListLink href="/handboek/voor-ontwikkelaars" icon={<Icon icon="chevron-right" />}>
            Voor ontwikkelaars
          </LinkListLink>
          <LinkListLink href="/handboek/voor-contentbeheerders" icon={<Icon icon="chevron-right" />}>
            Voor contentbeheerders
          </LinkListLink>
          <LinkListLink href="/handboek/voor-projectleiders" icon={<Icon icon="chevron-right" />}>
            Voor projectleiders
          </LinkListLink>
          <LinkListLink href="/handboek/richtlijnen" icon={<Icon icon="chevron-right" />}>
            Richtlijnen
          </LinkListLink>
        </LinkList>
      </div>
    </PageLayoutTwoColumnSidenav>
  );
}
