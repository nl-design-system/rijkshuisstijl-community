'use client';

import {
  AccordionProvider,
  Alert,
  Article,
  Blockquote,
  Button,
  FormFieldCheckboxGroup,
  FormFieldCheckboxOption,
  FormFieldTextarea,
  Heading,
  IconButton,
  Image,
  Link,
  LinkList,
  LinkListLink,
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
  DataList,
  DataListActions,
  DataListItem,
  DataListKey,
  DataListValue,
  FormField,
  FormFieldErrorMessage,
  OrderedList,
  OrderedListItem,
  Textbox,
  UnorderedListItem,
  FormFieldTextbox,
  FormFieldRadioOption,
} from '@rijkshuisstijl-community/components-react';
import { IconArrowRight, IconCalendarEvent } from '@tabler/icons-react/dist/esm/tabler-icons-react';
import { RichText } from '@utrecht/component-library-react/dist/css-module';

export default function Collage() {
  return (
    <main className="rhc-background-color-white">
      {/*
      <div>
        <BreadcrumbNav>
          <BreadcrumbNavLink href="/" rel="home" index={0}>
            Label
          </BreadcrumbNavLink>
        </BreadcrumbNav>
      </div>
      */}
      <div className="rhc-main-content">
        <Article>
          <RichText>
            {/*
        <div className="unfinished">
          <Avatar label="BK"></Avatar>
        </div>
        */}
            <Heading level={1}>Componenten collage NL Design System</Heading>
            <Image
              alt="Multicolored tulip field"
              width="640"
              height="763"
              src="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/0bfd32af3f34ff7ce62f4769fbec8895720dde75/proprietary/assets/src/placeholder.jpg"
            ></Image>
            <Paragraph lead>
              In het NL Design System verzamelen we principes, handvatten, elementen, patronen en richtlijnen.
            </Paragraph>
            <Paragraph>
              In het NL Design System verzamelen we principes, handvatten, elementen, patronen en richtlijnen. Zo kan de
              hele Nederlandse overheid samenwerken aan een begrijpelijke, gebruiksvriendelijke én toegankelijke online
              dienstverlening.
            </Paragraph>
            <OrderedList>
              <OrderedListItem>Verkies makkelijke korte boven formele lange woorden.</OrderedListItem>
              <OrderedListItem>
                Gebruik korte, eenvoudige zinnen. Probeer niet meer dan 15 woorden per zin te gebruiken, langere zinnen
                kunnen eventueel opgebroken worden in meerdere zinnen.
                <OrderedList>
                  <OrderedListItem>Zorg voor vergelijkbare ervaring.</OrderedListItem>
                  <OrderedListItem>Geef controle.</OrderedListItem>
                </OrderedList>
              </OrderedListItem>
              <OrderedListItem>Maak gebruik van opsommingstekens waar dat mogelijk is.</OrderedListItem>
            </OrderedList>
            <UnorderedList>
              <UnorderedListItem>Verkies makkelijke korte boven formele lange woorden.</UnorderedListItem>
              <UnorderedListItem>
                Gebruik korte, eenvoudige zinnen. Probeer niet meer dan 15 woorden per zin te gebruiken, langere zinnen
                kunnen eventueel opgebroken worden in meerdere zinnen.
                <UnorderedList>
                  <UnorderedListItem>Zorg voor vergelijkbare ervaring.</UnorderedListItem>
                  <UnorderedListItem>Geef controle.</UnorderedListItem>
                </UnorderedList>
              </UnorderedListItem>
              <UnorderedListItem>Maak gebruik van opsommingstekens waar dat mogelijk is.</UnorderedListItem>
            </UnorderedList>
            <Paragraph lead>
              In het NL Design System verzamelen we principes, handvatten, elementen, patronen en richtlijnen.
            </Paragraph>
            <Blockquote attribution="— Pippi Langkous">
              Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan
            </Blockquote>
            <Separator></Separator>
            <Link href="#">
              {`Hello, I'm a link `}
              <IconArrowRight />
            </Link>
            <Button appearance="primary-action-button">Primary button</Button>
            <Button appearance="secondary-action-button">Secondary button</Button>
            <Button>Default button</Button>
            <Button appearance="subtle-button">Subtle button</Button>
            <IconButton label="calendar">
              <IconCalendarEvent />
            </IconButton>
            <FormFieldTextbox label="Name" description="Description"></FormFieldTextbox>
            <FormFieldTextarea label="Label" rows={4} />
            <FormField label="Label">
              <FormFieldRadioOption label="Label"></FormFieldRadioOption>
              <FormFieldRadioOption label="Label"></FormFieldRadioOption>
              <FormFieldRadioOption label="Label"></FormFieldRadioOption>
              <FormFieldRadioOption label="Label"></FormFieldRadioOption>
              <FormFieldRadioOption label="Label"></FormFieldRadioOption>
            </FormField>
            <FormFieldCheckboxGroup label="Label" description="Description">
              <FormFieldCheckboxOption label="Label"></FormFieldCheckboxOption>
              <FormFieldCheckboxOption label="Label"></FormFieldCheckboxOption>
              <FormFieldCheckboxOption label="Label"></FormFieldCheckboxOption>
              <FormFieldCheckboxOption label="Label"></FormFieldCheckboxOption>
            </FormFieldCheckboxGroup>
            <Alert heading="Heading" type="error">
              <Paragraph>
                <LinkList>
                  <LinkListLink href="#">Label</LinkListLink>
                  <LinkListLink href="#">Label</LinkListLink>
                  <LinkListLink href="#">Label</LinkListLink>
                </LinkList>
              </Paragraph>
            </Alert>
            <FormField label="Label" description="Description">
              <FormFieldErrorMessage>Error message</FormFieldErrorMessage>
              <Textbox invalid></Textbox>
            </FormField>
            <DataList>
              <DataListItem>
                <DataListKey>Key</DataListKey>
                <DataListValue>Value</DataListValue>
                <DataListActions>
                  <Link href="#">Label</Link>
                </DataListActions>
              </DataListItem>
              <Separator></Separator>
              <DataListItem>
                <DataListKey>Key</DataListKey>
                <DataListValue>Value</DataListValue>
              </DataListItem>
              <Separator></Separator>
              <DataListItem>
                <DataListKey>Key</DataListKey>
                <DataListValue>Value</DataListValue>
              </DataListItem>
            </DataList>
            <div>
              <Alert
                type="info"
                headingLevel={3}
                textContent="Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"
                heading="Heading"
              />
            </div>
            <div>
              <Alert
                type="error"
                headingLevel={3}
                textContent="Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"
                heading="Heading"
              />
            </div>
            <div>
              <Alert
                type="ok"
                headingLevel={3}
                textContent="Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"
                heading="Heading"
              />
            </div>
            <div>
              <Alert
                textContent="Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"
                type="warning"
                headingLevel={3}
                heading="Heading"
              />
            </div>
            <AccordionProvider
              sections={[
                {
                  label: 'Zorg voor vergelijkbare ervaring',
                  body: 'Body',
                },
                {
                  label: 'Overweeg situatie',
                  body: 'Body',
                },
                {
                  label: 'Wees consistent',
                  body: 'Body',
                },
                {
                  label: 'Geef controle',
                  body: 'Body',
                },
                {
                  label: 'Bied keuze',
                  body: 'Body',
                },
              ]}
            ></AccordionProvider>
            {/*
            <div className="unstarted">
              <BadgeCounter>9</BadgeCounter>
            </div>
            <div className="unstarted">
              <StatusBadge status="neutral">Label</StatusBadge>
            </div>
            <div className="unstarted">
              <StatusBadge status="info">Label</StatusBadge>
            </div>
            <div className="unstarted">
              <StatusBadge status="error">Label</StatusBadge>
            </div>
            <div className="unstarted">
              <StatusBadge status="success">Label</StatusBadge>
            </div>
            <div className="unstarted">
              <StatusBadge status="warning">Label</StatusBadge>
            </div>
            */}
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
            {/*}
        <div className="unstarted">
          <Pagination maxVisiblePages={6} page={1} totalPages={99}></Pagination>
        </div>
        */}
          </RichText>
        </Article>
      </div>
    </main>
  );
}
