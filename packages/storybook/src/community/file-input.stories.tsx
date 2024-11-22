import {
  AccordionProvider,
  FileInput,
  Heading,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';
import { FormLabel } from '@utrecht/component-library-react';
import readme from './file-input.md?raw';

const meta = {
  title: 'Rijkshuisstijl/FileInput',
  id: 'rhc-fileInput',
  component: FileInput,
  argTypes: {
    buttonAppearance: {
      control: { type: 'select' },
      options: ['primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
  },
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [],
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.',
  },
};

export const MetCustomElementenLijst: Story = {
  args: {
    children: [
      <div key="file-input-example-1">
        <FormLabel>Bestand toevoegen</FormLabel>
        <UnorderedList>
          <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
          <UnorderedListItem>Een bestand mag maximaal 10MB groot zijn.</UnorderedListItem>
          <UnorderedListItem>
            Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.
          </UnorderedListItem>
        </UnorderedList>
      </div>,
    ],
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.',
  },
};

export const MetCustomElementenParagraafEnAccordion: Story = {
  args: {
    children: [
      <div key="file-input-example-2">
        <Heading level={2}>Bestanden uploaden</Heading>
        <Paragraph>Hier kan je meerdere bestanden uploaden. Bestanden mogen niet groter dan 10 MB zijn.</Paragraph>
        <AccordionProvider
          appearance=""
          sections={[
            {
              label: 'Bestandstypen die worden toegestaan.',
              body: [
                <UnorderedList key="ul-2">
                  <UnorderedListItem key="li-4">.doc</UnorderedListItem>
                  <UnorderedListItem key="li-5">.docx</UnorderedListItem>
                  <UnorderedListItem key="li-6">.xlsx</UnorderedListItem>
                  <UnorderedListItem key="li-7">.pdf</UnorderedListItem>
                  <UnorderedListItem key="li-8">.zip</UnorderedListItem>
                  <UnorderedListItem key="li-9">.jpg</UnorderedListItem>
                  <UnorderedListItem key="li-10">.png</UnorderedListItem>
                  <UnorderedListItem key="li-11">.bmp</UnorderedListItem>
                  <UnorderedListItem key="li-12">.gif</UnorderedListItem>
                </UnorderedList>,
              ],
            },
          ]}
        />
      </div>,
    ],
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.',
  },
};

export const MetCallback: Story = {
  args: {
    children: [
      <Paragraph key="p-2">
        Dit component heeft een callbackfunctie genaamd &apos;onFilesChange&apos;. Hiermee kan de parent component op de
        hoogte worden gesteld zodra er een nieuw bestand is toegevoegd. Zie de console voor de waarden.
      </Paragraph>,
    ],
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.',
    onValueChange: (files: File[]) => {
      console.log('Callback bestanden: ', files);
    },
  },
};
