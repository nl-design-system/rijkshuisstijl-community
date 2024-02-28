/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import {
  Article,
  ButtonGroup,
  ButtonLink,
  Document,
  Figure,
  FigureCaption,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Image,
  Link,
  OrderedList,
  OrderedListItem,
  Paragraph,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import { PropsWithChildren } from 'react';
import { IconEnd, IconExterneLink, IconMail } from './icon';
import '../../../components-css/logo/index.scss';
import './index.scss';

interface NldocPageProps {
  lang?: string;
}

const Blockquote = ({ children }: PropsWithChildren<{}>) => <blockquote>{children}</blockquote>;

export const NldocPage = ({ lang }: NldocPageProps) => {
  return (
    <>
      <Article className="nldoc-rich-text nldoc-rich-text--force" lang={lang}>
        <Heading1>Dit is een H1</Heading1>
        <Paragraph>Dit is een caption</Paragraph>
        <Paragraph>Dit is een paragraph</Paragraph>
        <Figure>
          <Image src="/hofvijver.png" photo />
          <FigureCaption>Dit is een beschrijving van het beeld</FigureCaption>
        </Figure>
        <Heading2>Dit is een H2</Heading2>
        <Paragraph>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis
          ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi
          erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Paragraph>
        <OrderedList>
          <OrderedListItem>Crass mattis</OrderedListItem>
          <OrderedListItem>Crass mattis</OrderedListItem>
          <OrderedListItem>Crass mattis</OrderedListItem>
        </OrderedList>
        <UnorderedList>
          <UnorderedListItem>Crass mattis</UnorderedListItem>
          <UnorderedListItem>Crass mattis</UnorderedListItem>
          <UnorderedListItem>Crass mattis</UnorderedListItem>
        </UnorderedList>
        <Heading3>Dit is een H3</Heading3>
        <Paragraph>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis
          ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi
          erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Paragraph>
        <Paragraph>
          <Link href="https://example.com/" external>
            Dit is een externe link
          </Link>
        </Paragraph>
        <Table>
          <TableCaption>Dit is een tabel</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Header</TableHeaderCell>
              <TableHeaderCell>Header 2</TableHeaderCell>
              <TableHeaderCell>Aenean eu leo quam. Pellentesque ornare sem.</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Label</TableCell>
              <TableCell>Label</TableCell>
              <TableCell>Label</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Label</TableCell>
              <TableCell>Label</TableCell>
              <TableCell>Aenean eu leo quam. Pellentesque ornare sem.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Heading4>Dit is een H4</Heading4>
        <Paragraph>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis
          ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi
          erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Paragraph>
        <Blockquote>
          <Paragraph>Dit is een quote!</Paragraph>
          <Paragraph>
            <cite>Luuk van der Horst</cite>
          </Paragraph>
        </Blockquote>
        <Heading5>Dit is een H5</Heading5>
        <Paragraph>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis
          ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi
          erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Paragraph>
      </Article>
      <Heading2 id="share-heading">Document delen</Heading2>
      <ButtonGroup aria-labelledby="share-heading">
        <ButtonLink href="https://example.com/">
          Link kopieeren{' '}
          <IconEnd>
            <IconExterneLink />
          </IconEnd>
        </ButtonLink>
        <ButtonLink href="https://example.com/">
          E-mail{' '}
          <IconEnd>
            <IconMail />
          </IconEnd>
        </ButtonLink>
        <ButtonLink href="https://example.com/">
          Twitter <IconEnd>X</IconEnd>
        </ButtonLink>
        <ButtonLink href="https://example.com/">
          LinkedIn{' '}
          <IconEnd>
            <IconExterneLink />
          </IconEnd>
        </ButtonLink>
      </ButtonGroup>
    </>
  );
};

const meta = {
  title: 'NLdoc/Pagina',
  id: 'nldoc-page',
  component: NldocPage,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  decorators: [(Story) => <Document className="rhc-theme">{Story()}</Document>],
  render: NldocPage,
} as Meta<typeof NldocPage>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
