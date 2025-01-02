import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FileInput, FileInputProps } from './FileInput';

beforeAll(() => {
  window.URL.createObjectURL = jest.fn((file) => `mocked-url/${(file as File).name}`);
});

describe('File Input tests', () => {
  const defaultProps: FileInputProps = {
    ref: { current: document.createElement('input') },
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.',
  };

  it('renders the FileInput element', () => {
    const { container } = render(<FileInput {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toBeInTheDocument();
    expect(field?.className).toEqual('rhc-file-input');
  });

  it('should be able to upload one file', async () => {
    const mockOnFileChange = jest.fn();

    const propsTest: FileInputProps = {
      ref: { current: document.createElement('input') },
      buttonText: 'Bestanden kiezen',
      maxFileSizeInBytes: 10_485_760,
      allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
      fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
      fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.',
      onValueChange: mockOnFileChange,
    };

    const { container } = render(<FileInput {...propsTest} />);

    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
    const fileInput = container.querySelector('input');

    await waitFor(() =>
      fireEvent.change(fileInput!, {
        target: { files: [file] },
      }),
    );

    expect(mockOnFileChange).toHaveBeenCalledTimes(1);
    expect(fileInput!.files![0].name).toBe(file.name);
  });

  it('should be able to upload multiple files in once', async () => {
    const mockOnFileChange = jest.fn();

    const propsTest: FileInputProps = {
      ref: { current: document.createElement('input') },
      buttonText: 'Bestanden kiezen',
      maxFileSizeInBytes: 10_485_760,
      allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
      fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
      fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.',
      onValueChange: mockOnFileChange,
    };

    const { container } = render(<FileInput {...propsTest} />);

    const fileOne = new File(['dummy content'], 'exampleOne.png', { type: 'image/png' });
    const fileTwo = new File(['dummy content'], 'exampleTwo.png', { type: 'image/png' });

    const fileInput = container.querySelector('input');

    await waitFor(() =>
      fireEvent.change(fileInput!, {
        target: { files: [fileOne, fileTwo] },
      }),
    );

    expect(mockOnFileChange).toHaveBeenCalledTimes(1);
    expect(fileInput!.files![0].name).toBe(fileOne.name);
    expect(fileInput!.files![1].name).toBe(fileTwo.name);
  });

  it('should not accept files not in the list', async () => {
    const mockOnFileChange = jest.fn();

    const propsTest: FileInputProps = {
      ref: { current: document.createElement('input') },
      buttonText: 'Bestanden kiezen',
      maxFileSizeInBytes: 10_485_760,
      allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.bmp,.gif', // Removed .png from allow list
      fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
      fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.',
      onValueChange: mockOnFileChange,
    };

    const { container } = render(<FileInput {...propsTest} />);

    const fileOne = new File(['dummy content'], 'exampleOne.png', { type: 'image/png' });

    const fileInput = container.querySelector('input');

    await waitFor(() => userEvent.upload(fileInput!, fileOne));

    expect(mockOnFileChange).toHaveBeenCalledTimes(0);
  });

  it('should render a link with the correct URL and target attributes for a preview of the selected file', async () => {
    const mockOnFileChange = jest.fn();

    const propsTest: FileInputProps = {
      ...defaultProps,
      onValueChange: mockOnFileChange,
    };

    const { container, getByRole } = render(<FileInput {...propsTest} />);

    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });

    const fileInput = container.querySelector('input');

    await waitFor(() =>
      fireEvent.change(fileInput!, {
        target: { files: [file] },
      }),
    );

    const link = getByRole('link', { name: file.name });

    expect(link).toHaveAttribute('href', 'mocked-url/example.png');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
