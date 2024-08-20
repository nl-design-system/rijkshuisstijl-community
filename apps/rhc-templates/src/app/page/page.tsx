'use client';

import {
  Button,
  ButtonLink,
  Icon,
  LinkList,
  LinkListLink,
  OrderedList,
  OrderedListItem,
  PageContent,
  PageHeader,
  Separator,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
  UnorderedList,
  UnorderedListItem,
  NavBar,
  NavList,
  NavListLinkButton,
  Image,
  Figure,
  FigureCaption,
} from '@utrecht/component-library-react/dist/css-module';
import { ActionGroup, Blockquote, Heading, Link, Logo, Paragraph } from '@rijkshuisstijl-community/components-react';
import { HeadingGroup } from '@utrecht/component-library-react';

export default function Page() {
  return (
    <main className="page">
      <div className="unfinished header">
        <PageHeader>
          <Logo organisation="Voorbeeld organisatie" subtitle="Voorbeeld sub-title"></Logo>
        </PageHeader>
      </div>
      <div className="unstarted">
        {/* wrong spacing, wrong background color, wrong text color, no way to add right aligning link */}
        <NavBar>
          <NavList>
            <NavListLinkButton>
              <a href="">Link 1</a>
            </NavListLinkButton>
            <NavListLinkButton>
              <a href="">Link 2</a>
            </NavListLinkButton>
            <NavListLinkButton>
              <a href="">Link 3</a>
            </NavListLinkButton>
          </NavList>
        </NavBar>
      </div>
      <PageContent className="container page-content">
        <div className="unstarted">
          <HeadingGroup>
            <Heading level={1}>Titel van de pagina (H1)</Heading>
            <Paragraph>Dit is een sub-titel van de H1</Paragraph>
          </HeadingGroup>
        </div>
        <Figure className="unstarted">
          <Image
            alt="Multicolored tulip field"
            width="640"
            height="763"
            src="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/0bfd32af3f34ff7ce62f4769fbec8895720dde75/proprietary/assets/src/placeholder.jpg"
          ></Image>
          <FigureCaption>Bijschrift (figcaption) van een afbeelding)</FigureCaption>
        </Figure>
        <div className="unstarted">
          <Button type="submit" appearance="primary-action-button">
            Primary action button
          </Button>
        </div>
        <Heading level={2}>Dit is een H2</Heading>
        <Paragraph>Dit is een paragraaf.</Paragraph>
        <Paragraph>Opsomming ordered list</Paragraph>
        <div className="unstarted">
          <OrderedList>
            <OrderedListItem>Ordered list item.</OrderedListItem>
            <OrderedListItem>Ordered list item.</OrderedListItem>
            <OrderedListItem>Ordered list item.</OrderedListItem>
          </OrderedList>
        </div>
        <Paragraph>Opsomming unordered list</Paragraph>
        <div className="unstarted">
          <UnorderedList>
            <UnorderedListItem>Unordered list item.</UnorderedListItem>
            <UnorderedListItem>Unordered list item.</UnorderedListItem>
            <UnorderedListItem>Unordered list item.</UnorderedListItem>
          </UnorderedList>
        </div>
        <Paragraph>Opsomming link list</Paragraph>
        <div className="unstarted">
          <LinkList
            icon={() => (
              <Icon>
                <svg viewBox="0 0 1000 1000">
                  <rect fill="currentColor" x="0" y="0" width="1000" height="1000" />
                </svg>
              </Icon>
            )}
            links={[{ href: 'examle.com' }, { href: 'github.com' }]}
          >
            <LinkListLink href="/">Dit is een normale link</LinkListLink>
            <LinkListLink href="/">Dit is een normale link</LinkListLink>
            <LinkListLink href="example.com" external={true}>
              Dit is een externe link
            </LinkListLink>
          </LinkList>
        </div>
        <Heading level={3}>Dit is een H3</Heading>
        <Paragraph>Dit is een paragraaf.</Paragraph>
        <Link external={true} href="example.com">
          Dit is een externe link
        </Link>
        <div className="unstarted">
          <Table>
            <TableCaption>Caption van tabel</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Label</TableHeaderCell>
                <TableHeaderCell>Label</TableHeaderCell>
                <TableHeaderCell>Label</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Label</TableCell>
                <TableCell>Label</TableCell>
                <TableCell>Label</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Label</TableCell>
                <TableCell>Label</TableCell>
                <TableCell>Label</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <Heading level={4}>Dit is een H4</Heading>
        <Paragraph>
          Dit is een wat langere paragraaf. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
          <Link href="/">Dit is een normale link</Link>
        </Paragraph>
        <Blockquote attribution="Label">
          Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
        </Blockquote>
        <Heading level={5}>Dit is een H5</Heading>
        <Paragraph>Dit is een paragraaf.</Paragraph>
        <div className="unstarted">
          <Separator></Separator>
        </div>
        <Heading level={5} appearance="utrecht-heading-6">
          Dit is een H5 met H6 appearance
        </Heading>
        <ActionGroup>
          <Button appearance="secondary-action-button">
            Link kopiëren
            <Icon>
              <svg viewBox="0 0 1000 1000">
                <rect fill="currentColor" x="0" y="0" width="1000" height="1000" />
              </svg>
            </Icon>
          </Button>
          <ButtonLink appearance="secondary-action-button" external={true}>
            E-mail
            <Icon>
              <svg viewBox="0 0 1000 1000">
                <rect fill="currentColor" x="0" y="0" width="1000" height="1000" />
              </svg>
            </Icon>
          </ButtonLink>
          <ButtonLink appearance="secondary-action-button" external={true}>
            Twitter
            <Icon>
              <svg viewBox="0 0 1000 1000">
                <rect fill="currentColor" x="0" y="0" width="1000" height="1000" />
              </svg>
            </Icon>
          </ButtonLink>
          <ButtonLink appearance="secondary-action-button" external={true}>
            LinkedIn
            <Icon>
              <svg viewBox="0 0 1000 1000">
                <rect fill="currentColor" x="0" y="0" width="1000" height="1000" />
              </svg>
            </Icon>
          </ButtonLink>
        </ActionGroup>
      </PageContent>
    </main>
  );
}
