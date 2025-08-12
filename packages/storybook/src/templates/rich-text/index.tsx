'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import {
  ActionGroup,
  Article,
  Blockquote,
  Button,
  ButtonLink,
  Figure,
  FigureCaption,
  Heading,
  Icon,
  Image,
  Link,
  OrderedList,
  OrderedListItem,
  Paragraph,
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
} from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import SharedDisclaimer from '../shared/disclaimer';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';

export default function Page() {
  return (
    <>
      <SharedHeader />
      <PageBody className="rhc-templates-page rhc-templates-background-color-white">
        <SharedMainPageContent>
          <SharedDisclaimer />
          <Article>
            <div className="rhc-margin-block-end-wrapper">
              <div className="rhc-templates-spacing-2">
                <Heading level={1}>Titel van de pagina</Heading>
                <Paragraph purpose="lead">Hier zou een korte introductie van de pagina kunnen staan.</Paragraph>
                <Figure>
                  <Image alt="Multicolored tulip field" height="763" src="/placeholder.jpg" width="640"></Image>
                  <FigureCaption>Bijschrift (figcaption) van een afbeelding)</FigureCaption>
                </Figure>
              </div>
              <div className="rhc-templates-spacing-2">
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
              <div className="rhc-templates-spacing-2">
                <Heading level={3}>Dit is een H3</Heading>
                <Paragraph>Dit is een paragraaf.</Paragraph>
                <Link href="https://example.com">Een link</Link>
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
              <div className="rhc-templates-spacing-2">
                <Heading level={4}>Dit is een H4</Heading>
                <Paragraph>
                  Dit is een wat langere paragraaf. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci
                  mauris, convallis id nisl vel, accumsan placerat elit. Aliquam sed viverra nunc, sit amet aliquet
                  velit. Sed mollis, felis eu placerat eleifend, libero augue congue sem, at dignissim dui libero ac
                  nisi. Sed bibendum quis eros quis luctus. Curabitur lobortis convallis ante, sit amet eleifend nunc
                  dictum et.
                </Paragraph>

                <Blockquote attribution="- Label">
                  Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
                </Blockquote>
              </div>
              <div className="rhc-templates-spacing-2">
                <Heading level={5}>Dit is een H5</Heading>
                <Paragraph>Dit is een paragraaf.</Paragraph>
              </div>
              <div className="rhc-templates-spacing-2">
                <Separator />

                <Heading level={5}>Document delen</Heading>
                <ActionGroup>
                  <Button appearance="secondary-action-button">
                    Link kopiëren
                    <Icon>
                      <svg
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                        <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                      </svg>
                    </Icon>
                  </Button>
                  <ButtonLink appearance="secondary-action-button" external={true} href="#">
                    E-mail
                    <Icon>
                      <svg
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                      </svg>
                    </Icon>
                  </ButtonLink>
                  <ButtonLink appearance="secondary-action-button" external={true} href="#">
                    Twitter
                    <Icon>
                      <svg
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                      </svg>
                    </Icon>
                  </ButtonLink>
                  <ButtonLink appearance="secondary-action-button" external={true} href="#">
                    LinkedIn
                    <Icon>
                      <svg
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
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
            </div>
          </Article>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
