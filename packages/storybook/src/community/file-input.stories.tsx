import { FileInput, UnorderedList, UnorderedListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import { FormLabel } from '@utrecht/component-library-react';
import readme from './file-input.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'FileInput',
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
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma and NL DesignSystem links
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FileInput.tsx',
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

export const DefaultFiles: Story = {
  args: {
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.',
    defaultFiles: [
      new File(['Example content for PDF file'], 'example.pdf', {
        type: 'application/pdf',
      }),
      new File(['Example content for a text file'], 'example.txt', {
        type: 'text/plain',
      }),
    ],
  },
};
