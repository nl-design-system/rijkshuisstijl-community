import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { FileInput, FileInputProps } from './FileInput';

beforeAll(() => {
  window.URL.createObjectURL = vi.fn((file) => `mocked-url/${(file as File).name}`);
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
    const mockOnFileChange = vi.fn();

    const propsTest: FileInputProps = {
      ...defaultProps,
      onValueChange: mockOnFileChange,
    };

    const { container } = render(<FileInput {...propsTest} />);

    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
    const fileInput = container.querySelector('input');

    expect(fileInput).not.toBeNull();

    await waitFor(() =>
      fireEvent.change(fileInput!, {
        target: { files: [file] },
      }),
    );

    expect(mockOnFileChange).toHaveBeenCalledTimes(1);
    expect(fileInput!.files![0].name).toBe(file.name);
  });

  it('should be able to delete a selected file', async () => {
    const mockOnFileChange = vi.fn();
    const propsTest: FileInputProps = {
      ...defaultProps,
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

    const deleteButton = within(container).getByText('Verwijder');
    expect(deleteButton).not.toBeNull();

    await waitFor(() => fireEvent.click(deleteButton!));
    expect(mockOnFileChange).toHaveBeenCalledTimes(2);
  });

  it('should be able to upload multiple files at once', async () => {
    const mockOnFileChange = vi.fn();

    const propsTest: FileInputProps = {
      ...defaultProps,
      onValueChange: mockOnFileChange,
    };

    const { container } = render(<FileInput {...propsTest} />);

    const fileOne = new File(['dummy content'], 'exampleOne.png', { type: 'image/png' });
    const fileTwo = new File(['dummy content'], 'exampleTwo.png', { type: 'image/png' });

    const fileInput = container.querySelector('input');

    expect(fileInput).not.toBeNull();

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
    const mockOnFileChange = vi.fn();

    const propsTest: FileInputProps = {
      ...defaultProps,
      allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.bmp,.gif',
      onValueChange: mockOnFileChange,
    };

    const { container } = render(<FileInput {...propsTest} />);

    const fileOne = new File(['dummy content'], 'exampleOne.png', { type: 'image/png' });

    const fileInput = container.querySelector('input');

    expect(fileInput).not.toBeNull();

    await waitFor(() => userEvent.upload(fileInput!, fileOne));

    expect(mockOnFileChange).toHaveBeenCalledTimes(0);
  });

  it('should render a link with the correct URL and target attributes for a preview of the selected file', async () => {
    const mockOnFileChange = vi.fn();

    const propsTest: FileInputProps = {
      ...defaultProps,
      onValueChange: mockOnFileChange,
    };

    const { container, getByRole } = render(<FileInput {...propsTest} />);

    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });

    const fileInput = container.querySelector('input');

    expect(fileInput).not.toBeNull();

    await waitFor(() =>
      fireEvent.change(fileInput!, {
        target: { files: [file] },
      }),
    );

    const link = getByRole('link', { name: file.name });

    expect(link).toHaveAttribute('href', 'mocked-url/example.png');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should handle the case when ref is missing or invalid', async () => {
    const mockOnFileChange = vi.fn();

    const propsTest: FileInputProps = {
      ...defaultProps,
      onValueChange: mockOnFileChange,
      ref: { current: null },
    };

    const { container } = render(<FileInput {...propsTest} />);

    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
    const fileInput = container.querySelector('input');

    expect(fileInput).not.toBeNull();

    await waitFor(() =>
      fireEvent.change(fileInput!, {
        target: { files: [file] },
      }),
    );

    expect(mockOnFileChange).toHaveBeenCalledTimes(1);
    expect(fileInput!.files![0].name).toBe(file.name);
  });
});

afterEach(() => cleanup());
