import {
  AccordionProvider,
  ActionGroup,
  Alert,
  Blockquote,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  Checkbox,
  CheckboxGroup,
  CodeInputGroup,
  ColumnLayout,
  DataBadgeButton,
  DataSummary,
  DataSummaryItem,
  DotBadge,
  Drawer,
  Figure,
  FigureCaption,
  FileInput,
  FormField,
  FormFieldCheckboxGroup,
  FormFieldCheckboxOption,
  FormFieldRadio,
  FormFieldRadioGroup,
  FormFieldSelect,
  FormFieldTextarea,
  FormFieldTextInput,
  Heading,
  Icon,
  Image,
  LanguageNavigation,
  Link,
  LinkList,
  LinkListLink,
  Logo,
  NumberBadge,
  OrderedList,
  OrderedListItem,
  PageNumberNavigation,
  Paragraph,
  PreHeading,
  RadioGroup,
  RoundedCorner,
  Separator,
  SideNav,
  SideNavItem,
  SideNavLink,
  SkipLink,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Textarea,
  TextInput,
  Toggletip,
  UnorderedList,
  UnorderedListItem,
} from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconChevronRight } from '@tabler/icons-react';
import { RadioButton, Select, SelectOption } from '@utrecht/component-library-react';
import clsx from 'clsx';
import type { JSXElementConstructor, ReactNode } from 'react';
import { HTMLImage } from './HTMLImage';
import './ComponentIllustration.css';

const alertStory = {
  component: Alert,
  args: {
    type: 'info',
    children: (
      <>
        <Heading level={3}>Heading</Heading>
        <Paragraph key="paragraph">
          Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
        </Paragraph>
      </>
    ),
  },
  parameters: {
    layout: 'block',
  },
};

const accordionStory = {
  component: AccordionProvider,
  args: {
    sections: [
      {
        label: 'Lorem ipsum standaard',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        expanded: true,
      },
      {
        label: 'Hipster lorem ipsum',
        body: "Humblebrag mixtape sus, cornhole woke mlkshk cardigan twee cronut. Health goth vape adaptogen actually vegan, viral austin kinfolk trust fund paleo PBR&B literally skateboard woke. Echo park ugh fit cupping affogato, lyft asymmetrical portland live-edge franzen you probably haven't heard of them meh VHS chambray. Narwhal fam prism slow-carb yes plz. Fam edison bulb kitsch disrupt deep v big mood, JOMO church-key pop-up chicharrones pork belly glossier. Pinterest freegan swag mumblecore prism.",
        expanded: false,
      },
      {
        label: 'Nederlandse lorem ipsum',
        body: 'De volle maan, tragisch dien avond, was reeds vroeg, nog in den laatsten dagschemer opgerezen als een immense, bloedroze bol, vlamde als een zonsondergang laag achter de tamarindeboomen der Lange Laan en steeg, langzaam zich louterende van hare tragische tint, in een vagen hemel op. Een doodsche stilte spande alom als een sluier van zwijgen, of, na de lange middagsiësta, de avondrust zonder overgang van leven begon.',
        expanded: false,
      },
    ],
  },
  parameters: {
    layout: 'block',
  },
};

const actionGroupStory = {
  component: ActionGroup,
  args: {
    children: [
      <Button key="button-1" purpose="primary">Primary button</Button>,
      <Button key="button-2" purpose="secondary">Secondary button</Button>,
    ],
  },
  parameters: {
    layout: 'center',
  },
};

const buttonStory = {
  component: Button,
  args: {
    purpose: 'primary',
    children: 'Click me!',
  },
  parameters: {
    layout: 'center',
  },
};

const blockquoteStory = {
  component: Blockquote,
  args: {
    children: '“Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod”',
  },
  parameters: {
    layout: 'block',
  },
};

const breadcrumbNavigationStory = {
  component: BreadcrumbNav,
  args: {
    children: [
      <BreadcrumbNavLink href="/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator key="icon">
        <Icon icon={'chevron-right'} />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="/a/" index={1} key="label">
        Label
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator key="icon-2">
        <Icon icon={'chevron-right'} />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="/a/b/" index={2} key="label-2">
        Label
      </BreadcrumbNavLink>,
    ],
  },
  parameters: {
    layout: 'center',
  },
};

const checkboxStory = {
  component: Checkbox,
  args: {
    checked: true,
  },
  parameters: {
    layout: 'center',
  },
};

const checkboxGroupStory = {
  component: CheckboxGroup,
  args: {
    children: [
      <FormFieldCheckboxOption key="checkbox-1" label="Checkbox 1" />,
      <FormFieldCheckboxOption key="checkbox-2" label="Checkbox 2" />,
      <FormFieldCheckboxOption key="checkbox-3" label="Checkbox 3" />,
    ],
  },
  parameters: {
    layout: 'center',
  },
};

const codeInputGroupStory = {
  component: CodeInputGroup,
  args: {
    pattern: '[0-9]',
    inputMode: 'numeric',
    codeLength: 6,
    value: '',
  },
  parameters: {
    layout: 'center',
  },
};

const dataBadgeButtonStory = {
  component: DataBadgeButton,
  args: {
    children: 'Categorie',
  },
  parameters: {
    layout: 'center',
  },
};

const columnLayoutStory = {
  component: ColumnLayout,
  args: {
    children: (
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
    ),
  },
  parameters: {
    layout: 'page-body',
  },
};

const dataSummaryStory = {
  component: DataSummary,
  args: {
    appearance: 'column',
    children: [
      <>
        <DataSummaryItem itemKey="Soort" itemValue="Reuzenpanda" />
        <DataSummaryItem href="#" itemKey="Rijk" itemValue="Animalia (Dieren)">
          Bekijk alle dieren
          <Icon icon="externe-link" />
        </DataSummaryItem>
        <DataSummaryItem itemKey="Klasse" itemValue="Mammalia (Zoogdieren)" />
      </>,
    ],
  },
  parameters: {
    layout: 'block',
  },
};

const dotBadgeStory = {
  component: DotBadge,
  args: {},
  parameters: {
    layout: 'center',
  },
};

const drawerStory = {
  component: Drawer,
  args: {
    style: {
      position: 'relative',
    },
    children: [
      <Heading key="drawer-heading" level={1}>Lorem ipsum</Heading>,
      <Paragraph key="drawer-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
    open: true,
  },
  parameters: {
    layout: 'window',
  },
};

const fileInputStory = {
  component: FileInput,
  args: {
    children: [],
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
  },
  parameters: {
    layout: 'center',
  },
};

const formFieldStory = {
  component: FormField,
  args: {
    label: 'Onderwerp',
    input: (
      <FormFieldRadioGroup>
        <FormFieldRadio inputInvalid label="Option 1" name="radio-demo" value="option1" />
        <FormFieldRadio inputInvalid label="Option 3" name="radio-demo" value="option3" />
        <FormFieldRadio inputInvalid label="Option 2" name="radio-demo" value="option2" />
      </FormFieldRadioGroup>
    ),
    statusId: 'status',
    errorMessageId: 'error',
    descriptionId: 'description',
    errorMessage: 'Dit is een foutmelding',
    invalid: true,
  },
  parameters: {
    layout: 'block',
  },
};

const formFieldRadioGroupStory = {
  component: FormFieldRadioGroup,
  args: {
    children: (
      <>
        <FormFieldRadio inputInvalid label="Option 1" name="radio-demo" value="option1" />
        <FormFieldRadio inputInvalid label="Option 3" name="radio-demo" value="option3" />
        <FormFieldRadio inputInvalid label="Option 2" name="radio-demo" value="option2" />
      </>
    ),
  },
  parameters: {
    layout: 'block',
  },
};

const formFieldCheckboxGroupStory = {
  component: FormFieldCheckboxGroup,
  args: {
    children: (
      <>
        <FormFieldCheckboxOption key="checkbox-1" label="Checkbox 1" />
        <FormFieldCheckboxOption key="checkbox-2" label="Checkbox 2" />
        <FormFieldCheckboxOption key="checkbox-3" label="Checkbox 3" />
      </>
    ),
  },
  parameters: {
    layout: 'block',
  },
};

const formFieldSelectStory = {
  component: FormFieldSelect,
  args: {
    label: 'kies een optie',
    name: 'select',
    errorMessage: '',
    required: false,
    disabled: false,
    invalid: false,
    options: ['optie 1', 'optie 2', 'optie 3'],
    defaultValue: 'optie 2',
  },
  parameters: {
    layout: 'block',
  },
};

const formFieldTextInputStory = {
  component: FormFieldTextInput,
  args: {
    name: 'email',
    label: 'E-mailadres',
    description: 'Bijvoorbeeld: naam@voorbeeld.nl',
  },
  parameters: {
    layout: 'block',
  },
};

const formFieldTextAreaStory = {
  component: FormFieldTextarea,
  args: {
    name: 'subject',
    label: 'Onderwerp',
  },
  parameters: {
    layout: 'block',
  },
};

const figureStory = {
  component: Figure,
  args: {
    children: [
      <RoundedCorner key="figure-rounded-corner" position="start-end" size="md">
        <Image alt="Multicolored tulip field" src="/placeholder.jpg" width={640} />
      </RoundedCorner>,
      <FigureCaption key="figure-caption">{'Bijschrift (figcaption) van afbeelding.'}</FigureCaption>,
    ],
  },
  parameters: {
    layout: 'block',
  },
};

const headingStory = {
  component: Heading,
  args: {
    children: 'Koptekst',
    level: 1,
  },
  parameters: {
    layout: 'block',
  },
};

const iconStory = {
  component: Icon,
  args: {
    children: <IconChevronRight />,
  },
  parameters: {
    layout: 'center',
  },
};

const imageStory = {
  component: Image,
  args: {
    alt: 'Multicolored tulip field',
    src: '/placeholder.jpg',
    width: 640,
  },
  parameters: {
    layout: 'block',
  },
};

const languageNavigationStory = {
  component: LanguageNavigation,
  args: {
    defaultSelectedLanguage: 'Nederlands',
    children: (
      <>
        <LanguageNavigation.Trigger />
        <LanguageNavigation.Content>
          <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
        </LanguageNavigation.Content>
      </>
    ),
  },
  parameters: {
    layout: 'center',
  },
};

const linkStory = {
  component: Link,
  args: {
    href: 'https://rijkshuisstijl.nl/',
    children: 'rijkshuisstijl.nl',
  },
  parameters: {
    layout: 'center',
  },
};

const linkListStory = {
  component: LinkList,
  args: {
    children: (
      <>
        <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
          Over Rijksoverheid.nl
        </LinkListLink>
        <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
          Copyright
        </LinkListLink>
        <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
          Privacy
        </LinkListLink>
        <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
          Cookies
        </LinkListLink>
      </>
    ),
  },
  parameters: {
    layout: 'center',
  },
};

const logoStory = {
  component: Logo,
  args: {
    organisation: 'Title',
    subtitle: 'Subtitle',
  },
  parameters: {
    layout: 'center',
  },
};

const numberBadgeStory = {
  component: NumberBadge,
  args: {
    children: '42',
  },
  parameters: {
    layout: 'center',
  },
};

const orderedListStory = {
  component: OrderedList,
  args: {
    children: [
      <OrderedListItem key="ordered-list-item-1">Boter</OrderedListItem>,
      <OrderedListItem key="ordered-list-item-2">Kaas</OrderedListItem>,
      <OrderedListItem key="ordered-list-item-3">Eieren</OrderedListItem>,
    ],
  },
  parameters: {
    layout: 'block',
  },
};

const paragraphStory = {
  component: Paragraph,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  parameters: {
    layout: 'block',
  },
};

const pageNumberNavigationStory = {
  component: PageNumberNavigation,
  args: {
    linkTemplate: (page: number) => `/${page}`,
    maxVisiblePages: 5,
    page: 1,
    totalPages: 10,
  },
  parameters: {
    layout: 'center',
  },
};

const preHeadingStory = {
  component: PreHeading,
  args: {
    children: 'Pre-heading tekst',
  },
  parameters: {
    layout: 'center',
  },
};

const radioButtonStory = {
  component: RadioButton,
  args: {
    checked: false,
  },
  parameters: {
    layout: 'center',
  },
};

const radioGroupStory = {
  component: RadioGroup,
  args: {
    children: (
      <>
        <FormFieldRadio label="Option 1" name="radio-demo" value="option1" />
        <FormFieldRadio label="Option 3" name="radio-demo" value="option3" />
        <FormFieldRadio label="Option 2" name="radio-demo" value="option2" />
      </>
    ),
  },
  parameters: {
    layout: 'center',
  },
};

const separatorStory = {
  component: Separator,
  args: {
    style: {
      inlineSize: '200px',
    },
  },
  parameters: {
    layout: 'center',
  },
};

const selectStory = {
  component: Select,
  args: {
    children: [
      <SelectOption id="optie1" key="option-1" value="optie 1">
        optie 1
      </SelectOption>,
      <SelectOption id="optie2" key="option-2" value="optie 2">
        optie 2
      </SelectOption>,
      <SelectOption id="optie3" key="option-3" value="optie 3">
        optie 3
      </SelectOption>,
    ],
  },
  parameters: {
    layout: 'center',
  },
};

const sideNavigationStory = {
  component: SideNav,
  args: {
    children: (
      <>
        <SideNavItem>
          <SideNavLink href="/#" icon="activiteit">
            Mijn taken
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="/#" icon="mail">
            Mijn berichten
            <NumberBadge>2</NumberBadge>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="/#" icon="bewerken">
            Mijn lopende zaken
          </SideNavLink>
        </SideNavItem>
      </>
    ),
  },
  parameters: {
    layout: 'center',
  },
};

const skipLinkStory = {
  component: SkipLink,
  args: {
    style: {
      position: 'static',
    },
    href: '#main',
    children: 'Direct naar de inhoud',
  },
  parameters: {
    layout: 'center',
  },
};

const tableStory = {
  component: Table,
  args: {
    children: [
      <TableHeader key="thead-1">
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>,

      <TableBody key="tbody-1">
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
      </TableBody>,
    ],
  },
  parameters: {
    layout: 'block',
  },
};

const textAreaStory = {
  component: Textarea,
  args: {
    value: 'Hello, world!',
  },
  parameters: {
    layout: 'center',
  },
};

const textInputStory = {
  component: TextInput,
  args: {
    value: 'Hello, world!',
  },
  parameters: {
    layout: 'center',
  },
};

const toggletipStory = {
  component: Toggletip,
  args: {},
  parameters: {
    layout: 'center',
  },
};

const unorderedListStory = {
  component: UnorderedList,
  args: {
    children: [
      <UnorderedListItem key="unordered-list-item-1">Boter</UnorderedListItem>,
      <UnorderedListItem key="unordered-list-item-2">Kaas</UnorderedListItem>,
      <UnorderedListItem key="unordered-list-item-3">Eieren</UnorderedListItem>,
    ],
  },
  parameters: {
    layout: 'block',
  },
};

interface ExampleOptions {
  layout?: string;
}

type ExampleComponent = ({ title, labelId }: { title: string; labelId: string }) => ReactNode;

/**
 * Every design system component needs an example image that demonstrates the component
 * in the overview of all components. This utility can render such an image based on the
 * Storybook story for that component.
 */
const storyRenderer = (meta: Meta, story: StoryObj, options: ExampleOptions = {}): ExampleComponent => {
  const Component: JSXElementConstructor<{}> = meta.component as any as JSXElementConstructor<{}>;
  const defaultArgs = meta.args || {};
  const args = story.args || {};
  const { layout } = options;

  const CustomExampleComponent = ({ title, labelId }: { title: string; labelId: string }) => (
    <HTMLImage label={`Voorbeeld van de component "${title}"`} labelId={labelId}>
      <div
        className={clsx('rhc-component-example', {
          'rhc-component-example--center': layout === 'center',
          'rhc-component-example--block': layout === 'block',
          'rhc-component-example--page-body': layout === 'page-body',
          'rhc-component-example--window': layout === 'window',
          'rhc-component-example--graph-paper-lines': true,
        })}
      >
        <div className="rhc-component-example__content">
          <Component {...defaultArgs} {...args}></Component>
        </div>
      </div>
    </HTMLImage>
  );

  CustomExampleComponent.displayName = 'CustomExampleComponent';

  return CustomExampleComponent;
};

const simpleStoryRenderer = (story: Meta & StoryObj) => storyRenderer(story, story, story.parameters);

export const mapping: { [index: string]: ExampleComponent } = {
  ['Alert']: simpleStoryRenderer(alertStory),
  ['Accordion']: simpleStoryRenderer(accordionStory),
  ['Action Group']: simpleStoryRenderer(actionGroupStory),
  ['Button']: simpleStoryRenderer(buttonStory),
  ['Blockquote']: simpleStoryRenderer(blockquoteStory),
  ['Breadcrumb Navigation']: simpleStoryRenderer(breadcrumbNavigationStory),
  // ['Card']: storyRenderer(cardMeta, cardStory),
  // ['Card as Link']: storyRenderer(cardAsLinkMeta, cardAsLinkStory),
  ['Checkbox']: simpleStoryRenderer(checkboxStory),
  ['Checkbox Group']: simpleStoryRenderer(checkboxGroupStory),
  ['Code Input Group']: simpleStoryRenderer(codeInputGroupStory),
  ['Column Layout']: simpleStoryRenderer(columnLayoutStory),
  ['Data Badge Button']: simpleStoryRenderer(dataBadgeButtonStory),
  ['Data Summary']: simpleStoryRenderer(dataSummaryStory),
  ['Dot Badge']: simpleStoryRenderer(dotBadgeStory),
  ['Drawer']: simpleStoryRenderer(drawerStory),
  ['File Input']: simpleStoryRenderer(fileInputStory),
  ['Form Field']: simpleStoryRenderer(formFieldStory),
  ['Form Field Checkbox Group']: simpleStoryRenderer(formFieldRadioGroupStory),
  ['Form Field Radio Group']: simpleStoryRenderer(formFieldCheckboxGroupStory),
  ['Form Field Select']: simpleStoryRenderer(formFieldSelectStory),
  ['Form Field Textarea']: simpleStoryRenderer(formFieldTextAreaStory),
  ['Form Field Text Input']: simpleStoryRenderer(formFieldTextInputStory),
  ['Figure']: simpleStoryRenderer(figureStory),
  ['Heading']: simpleStoryRenderer(headingStory),
  ['Icon']: simpleStoryRenderer(iconStory),
  ['Image']: simpleStoryRenderer(imageStory),
  ['Language Navigation']: simpleStoryRenderer(languageNavigationStory),
  ['Logo']: simpleStoryRenderer(logoStory),
  ['Link']: simpleStoryRenderer(linkStory),
  ['Link List']: simpleStoryRenderer(linkListStory),
  ['Number Badge']: simpleStoryRenderer(numberBadgeStory),
  ['Paragraph']: simpleStoryRenderer(paragraphStory),
  ['Pre-heading']: simpleStoryRenderer(preHeadingStory),
  ['Page Number Navigation']: simpleStoryRenderer(pageNumberNavigationStory),
  ['Radio Button']: simpleStoryRenderer(radioButtonStory),
  ['Radio Group']: simpleStoryRenderer(radioGroupStory),
  ['Select']: simpleStoryRenderer(selectStory),
  ['Separator']: simpleStoryRenderer(separatorStory),
  ['Skip Link']: simpleStoryRenderer(skipLinkStory),
  ['Side Navigation']: simpleStoryRenderer(sideNavigationStory),
  ['Table']: simpleStoryRenderer(tableStory),
  ['Text Area']: simpleStoryRenderer(textAreaStory),
  ['Text Input']: simpleStoryRenderer(textInputStory),
  ['Toggletip']: simpleStoryRenderer(toggletipStory),
  ['Ordered List']: simpleStoryRenderer(orderedListStory),
  ['Unordered List']: simpleStoryRenderer(unorderedListStory),
  // ['Data Summary']: storyRenderer(dataSummaryMeta, dataSummaryStories),
};
