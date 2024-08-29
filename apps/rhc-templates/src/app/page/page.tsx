'use client';

import {
  ButtonLink,
  Icon,
  NavBar,
  NavList,
  NavListLinkButton,
  PageContent,
  PageHeader,
} from '@utrecht/component-library-react/dist/css-module';
import {
  ActionGroup,
  Blockquote,
  Button,
  Figure,
  FigureCaption,
  Heading,
  Image,
  Link,
  Logo,
  Paragraph,
  Separator,
  OrderedList,
  OrderedListItem,
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
} from '@rijkshuisstijl-community/components-react';

export default function Page() {
  return (
    <main className="page">
      <div className="rhc-background-color-white">
        <PageHeader>
          <Logo organisation="Rijkshuisstijl Community"></Logo>
        </PageHeader>
      </div>
      <div className="unstarted rhc-background-color-lint-blauw">
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
      <div className="rhc-main-content">
        <PageContent className="rhc-page-content rhc-background-color-white">
          <div className="rhc-spacing-2">
            <Heading level={1}>Titel van de pagina</Heading>
            <Paragraph lead>Hier zou een korte introductie van de pagina kunnen staan.</Paragraph>
            <Figure>
              <Image
                alt="Multicolored tulip field"
                width="640"
                height="763"
                src="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/0bfd32af3f34ff7ce62f4769fbec8895720dde75/proprietary/assets/src/placeholder.jpg"
              ></Image>
              <FigureCaption>Bijschrift (figcaption) van een afbeelding)</FigureCaption>
            </Figure>
          </div>
          <div className="rhc-spacing-2">
            <Heading level={2}>Dit is een H2</Heading>
            <Paragraph>Dit is een paragraaf.</Paragraph>
            <Paragraph>Opsomming ordered list</Paragraph>
            <OrderedList>
              <OrderedListItem>Ordered list item.</OrderedListItem>
              <OrderedListItem>Ordered list item.</OrderedListItem>
              <OrderedListItem>Ordered list item.</OrderedListItem>
            </OrderedList>
            <Paragraph>Opsomming unordered list</Paragraph>
            <UnorderedList>
              <UnorderedListItem>Unordered list item.</UnorderedListItem>
              <UnorderedListItem>Unordered list item.</UnorderedListItem>
              <UnorderedListItem>Unordered list item.</UnorderedListItem>
            </UnorderedList>
          </div>
          <div className="rhc-spacing-2">
            <Heading level={3}>Dit is een H3</Heading>
            <Paragraph>Dit is een paragraaf.</Paragraph>
            <Link external={true} externalLabel="example external label" href="example.com">
              Een externe link
            </Link>
            <div>
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
          </div>
          <div className="rhc-spacing-2">
            <Heading level={4}>Dit is een H4</Heading>
            <Paragraph>
              Dit is een wat langere paragraaf. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci mauris,
              convallis id nisl vel, accumsan placerat elit. Aliquam sed viverra nunc, sit amet aliquet velit. Sed
              mollis, felis eu placerat eleifend, libero augue congue sem, at dignissim dui libero ac nisi. Sed bibendum
              quis eros quis luctus. Curabitur lobortis convallis ante, sit amet eleifend nunc dictum et.
            </Paragraph>
            <Blockquote attribution="- Label">
              Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
            </Blockquote>
          </div>
          <div className="rhc-spacing-2">
            <Heading level={5}>Dit is een H5</Heading>
            <Paragraph>Dit is een paragraaf.</Paragraph>
          </div>
          <div className="rhc-spacing-2">
            <Separator />

            <Heading level={5}>Document delen</Heading>
            <ActionGroup>
              <Button appearance="secondary-action-button">
                Link kopiëren
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                  </svg>
                </Icon>
              </Button>
              <ButtonLink appearance="secondary-action-button" external={true}>
                E-mail
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </Icon>
              </ButtonLink>
              <ButtonLink appearance="secondary-action-button" external={true}>
                Twitter
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </Icon>
              </ButtonLink>
              <ButtonLink appearance="secondary-action-button" external={true}>
                LinkedIn
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </Icon>
              </ButtonLink>
            </ActionGroup>
          </div>
        </PageContent>
      </div>
    </main>
  );
}
