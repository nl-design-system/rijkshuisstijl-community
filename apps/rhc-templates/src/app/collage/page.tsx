'use client';

import { AccordionProvider } from '@rijkshuisstijl-community/components-react';
import { Avatar, Pagination } from '@amsterdam/design-system-react';
import {
  IconAlertTriangle,
  IconArrowRight,
  IconCalendarEvent,
  IconCircleCheck,
  IconExclamationCircle,
  IconInfoCircle,
} from '@tabler/icons-react/dist/esm/tabler-icons-react';
import {
  Alert,
  BadgeCounter,
  Blockquote,
  BreadcrumbNav,
  BreadcrumbNavLink,
  Button,
  Checkbox,
  DataList,
  DataListActions,
  DataListItem,
  DataListKey,
  DataListValue,
  FormField,
  FormFieldErrorMessage,
  FormLabel,
  Heading,
  Image,
  Link,
  LinkList,
  LinkListLink,
  OrderedList,
  OrderedListItem,
  Paragraph,
  RadioButton,
  Separator,
  StatusBadge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Textarea,
  Textbox,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';

export default function Collage() {
  return (
    <>
      <div className="unfinished">
        <BreadcrumbNav>
          <BreadcrumbNavLink href="/" rel="home" index={0}>
            Label
          </BreadcrumbNavLink>
        </BreadcrumbNav>
      </div>
      <div className="unfinished">
        <Avatar label="BK"></Avatar>
      </div>
      <div className="unstarted">
        <Heading level={1}>Componenten collage NL Design System</Heading>
      </div>
      <div className="unstarted">
        <Image
          alt="Multicolored tulip field"
          width="640"
          height="763"
          src="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/0bfd32af3f34ff7ce62f4769fbec8895720dde75/proprietary/assets/src/placeholder.jpg"
        ></Image>
      </div>
      <div className="unstarted">
        <Paragraph lead>
          In het NL Design System verzamelen we principes, handvatten, elementen, patronen en richtlijnen.
        </Paragraph>
      </div>
      <div className="unstarted">
        <Paragraph>
          In het NL Design System verzamelen we principes, handvatten, elementen, patronen en richtlijnen. Zo kan de
          hele Nederlandse overheid samenwerken aan een begrijpelijke, gebruiksvriendelijke én toegankelijke online
          dienstverlening.
        </Paragraph>
      </div>
      <div className="unstarted">
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
      </div>
      <div className="unstarted">
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
      </div>
      <div className="unstarted">
        <Paragraph lead>
          In het NL Design System verzamelen we principes, handvatten, elementen, patronen en richtlijnen.
        </Paragraph>
      </div>
      <div className="unstarted">
        <Blockquote attribution="Pippi Langkous">Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan</Blockquote>
      </div>
      <div className="unstarted">
        <Separator></Separator>
      </div>
      <div className="unstarted">
        <Link href="#">
          {`Hello, I'm a link `}
          <IconArrowRight />
        </Link>
      </div>
      <div className="unstarted">
        <Button appearance="primary-action-button">Primary button</Button>
      </div>
      <div className="unstarted">
        <Button appearance="secondary-action-button">Secondary button</Button>
      </div>
      <div className="unstarted">
        <Button>Default button</Button>
      </div>
      <div className="unstarted">
        <Button appearance="subtle-button">Subtle button</Button>
      </div>
      <div className="unstarted">
        <Button appearance="subtle-button">
          <IconCalendarEvent />
        </Button>
      </div>
      <div className="unstarted">
        <FormField label="Name" description="Description">
          <Textbox></Textbox>
        </FormField>
      </div>
      <div className="unstarted">
        <FormField label="Label">
          <Textarea rows={4}></Textarea>
        </FormField>
      </div>
      <div className="unstarted">
        <FormField label="Label" description="Description">
          <div className="rhc-radio-button__group">
            <RadioButton></RadioButton>
            <FormLabel>Label</FormLabel>
            <RadioButton></RadioButton>
            <FormLabel>Label</FormLabel>
            <RadioButton></RadioButton>
            <FormLabel>Label</FormLabel>
            <RadioButton></RadioButton>
            <FormLabel>Label</FormLabel>
          </div>
        </FormField>
      </div>
      <div className="unstarted">
        <FormField label="Label" description="Description">
          <div className="rhc-radio-button__group">
            <Checkbox></Checkbox>
            <FormLabel>Label</FormLabel>
            <Checkbox></Checkbox>
            <FormLabel>Label</FormLabel>
            <Checkbox></Checkbox>
            <FormLabel>Label</FormLabel>
            <Checkbox></Checkbox>
            <FormLabel>Label</FormLabel>
          </div>
        </FormField>
      </div>
      <div className="unstarted">
        <Alert type="error" icon={<IconExclamationCircle />}>
          <Heading level={1}>Heading</Heading>
          <Paragraph>
            <LinkList>
              <LinkListLink href="#">Label</LinkListLink>
              <LinkListLink href="#">Label</LinkListLink>
              <LinkListLink href="#">Label</LinkListLink>
            </LinkList>
          </Paragraph>
        </Alert>
      </div>
      <div className="unstarted">
        <FormField label="Label" description="Description">
          <FormFieldErrorMessage>
            <IconExclamationCircle />
            Error message
          </FormFieldErrorMessage>
          <Textbox invalid></Textbox>
        </FormField>
      </div>
      <div className="unstarted">
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
      </div>
      <div className="unstarted">
        <Alert type="info" icon={<IconInfoCircle />}>
          <Heading level={1}>Heading</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>
        </Alert>
      </div>
      <div className="unstarted">
        <Alert type="error" icon={<IconExclamationCircle />}>
          <Heading level={1}>Heading</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>
        </Alert>
      </div>
      <div className="unstarted">
        <Alert type="ok" icon={<IconCircleCheck />}>
          <Heading level={1}>Heading</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>
        </Alert>
      </div>
      <div className="unstarted">
        <Alert type="warning" icon={<IconAlertTriangle />}>
          <Heading level={1}>Heading</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>
        </Alert>
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
      <div className="unstarted">
        <Pagination maxVisiblePages={6} page={1} totalPages={99}></Pagination>
      </div>
    </>
  );
}
