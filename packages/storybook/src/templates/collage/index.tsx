import {
  AccordionProvider,
  Alert,
  Article,
  Blockquote,
  Button,
  CodeInput,
  FormField,
  FormFieldCheckboxGroup,
  FormFieldCheckboxOption,
  FormFieldRadio,
  FormFieldTextarea,
  FormFieldTextInput,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  LinkList,
  LinkListLink,
  Logo,
  NavBar,
  OrderedList,
  OrderedListItem,
  PageHeader,
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
  TextInput,
  UnorderedList,
  UnorderedListItem,
} from '@rijkshuisstijl-community/components-react';
import { IconArrowRight, IconCalendarEvent } from '@tabler/icons-react/dist/esm/tabler-icons-react';
import { PageBody } from '@utrecht/page-body-react';

export default function Collage() {
  return (
    <>
      <PageHeader>
        <Logo organisation="Rijkshuisstijl Community">
          <Icon className={'dutch-map'} icon={'nederland-map'} />
        </Logo>
        <NavBar
          items={[
            { id: '1', href: '/', label: 'Rich Text' },
            { id: '2', href: '/form', label: 'Form' },
            { id: '3', href: '/details', label: 'Details' },
            { id: '4', href: '/collage', label: 'Collage' },
            { id: '5', href: '/mijn-omgeving', label: 'Mijn Omgeving' },
          ]}
        ></NavBar>
      </PageHeader>
      <PageBody className="rhc-templates-page">
        <div className="rhc-templates-background-color-white">
          <div className="rhc-templates-main-content">
            <div className="utrecht-page-content rhc-templates-page-content">
              <Article>
                <div className="rhc-margin-block-end-wrapper">
                  <Heading level={1}>Componenten collage NL Design System</Heading>
                  <Image
                    alt="Multicolored tulip field"
                    height="763"
                    src="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/0bfd32af3f34ff7ce62f4769fbec8895720dde75/proprietary/assets/src/placeholder.jpg"
                    width="640"
                  ></Image>
                  <Paragraph appearance="lead">
                    In het NL Design System verzamelen we principes, handvatten, elementen, patronen en richtlijnen.
                  </Paragraph>
                  <Paragraph>
                    In het NL Design System verzamelen we principes, handvatten, elementen, patronen en richtlijnen. Zo
                    kan de hele Nederlandse overheid samenwerken aan een begrijpelijke, gebruiksvriendelijke én
                    toegankelijke online dienstverlening.
                  </Paragraph>
                  <OrderedList>
                    <OrderedListItem>Verkies makkelijke korte boven formele lange woorden.</OrderedListItem>
                    <OrderedListItem>
                      Gebruik korte, eenvoudige zinnen. Probeer niet meer dan 15 woorden per zin te gebruiken, langere
                      zinnen kunnen eventueel opgebroken worden in meerdere zinnen.
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
                      Gebruik korte, eenvoudige zinnen. Probeer niet meer dan 15 woorden per zin te gebruiken, langere
                      zinnen kunnen eventueel opgebroken worden in meerdere zinnen.
                      <UnorderedList>
                        <UnorderedListItem>Zorg voor vergelijkbare ervaring.</UnorderedListItem>
                        <UnorderedListItem>Geef controle.</UnorderedListItem>
                      </UnorderedList>
                    </UnorderedListItem>
                    <UnorderedListItem>Maak gebruik van opsommingstekens waar dat mogelijk is.</UnorderedListItem>
                  </UnorderedList>
                  <Paragraph appearance="lead">
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
                  <FormFieldTextInput description="Description" label="Name" />
                  <FormFieldTextarea label="Label" rows={4} />
                  <FormField
                    description="Form Field Radio Options"
                    descriptionId="description-id"
                    errorMessageId="error-id"
                    invalid={false}
                    label="Label"
                    statusId="status-id"
                    input={
                      <>
                        <FormFieldRadio label="Option 1" name="group1" value="option1" />
                        <FormFieldRadio label="Option 2" name="group1" value="option2" />
                        <FormFieldRadio label="Option 3" name="group1" value="option3" />
                        <FormFieldRadio label="Option 4" name="group1" value="option4" />
                      </>
                    }
                  />
                  <FormFieldCheckboxGroup description="Description" label="Label">
                    <FormFieldCheckboxOption label="Label"></FormFieldCheckboxOption>
                    <FormFieldCheckboxOption label="Label"></FormFieldCheckboxOption>
                    <FormFieldCheckboxOption label="Label"></FormFieldCheckboxOption>
                    <FormFieldCheckboxOption label="Label"></FormFieldCheckboxOption>
                  </FormFieldCheckboxGroup>
                  <Alert heading="Heading" headingLevel={2} type="error">
                    <LinkList>
                      <LinkListLink href="#">Label</LinkListLink>
                      <LinkListLink href="#">Label</LinkListLink>
                      <LinkListLink href="#">Label</LinkListLink>
                    </LinkList>
                  </Alert>
                  <FormField
                    description="Description"
                    descriptionId="description-id"
                    errorMessage="Error message"
                    errorMessageId="error-id"
                    id="input-error-id"
                    input={<TextInput invalid id="input-error-id" />}
                    invalid={true}
                    label="Label"
                    statusId="status-id"
                  />
                  {/* Will be replaced with <SummaryList/> */}
                  {/* <DataList>
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
                  </DataList> */}
                  <div>
                    <Alert
                      heading="Heading"
                      headingLevel={2}
                      textContent="Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"
                      type="info"
                    />
                  </div>
                  <div>
                    <Alert textContent="Hier zou een korte introductie kunnen staan." type="info"></Alert>
                  </div>
                  <div>
                    <Alert
                      heading="Heading"
                      headingLevel={2}
                      textContent="Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"
                      type="error"
                    />
                  </div>
                  <div>
                    <Alert
                      heading="Heading"
                      headingLevel={2}
                      textContent="Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"
                      type="ok"
                    />
                  </div>
                  <div>
                    <Alert
                      heading="Heading"
                      headingLevel={2}
                      textContent="Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"
                      type="warning"
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
                  <CodeInput
                    numberOfDigits={6}
                    onChange={(value: String) => {
                      console.log('onchange: ', value);
                    }}
                  />
                </div>
              </Article>
            </div>
          </div>
        </div>
      </PageBody>
    </>
  );
}
