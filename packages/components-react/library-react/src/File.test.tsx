import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { File as FileComponent } from './File';
beforeAll(() => {
  Object.defineProperty(window, 'URL', {
    value: {
      createObjectURL: vi.fn().mockImplementation((blob: Blob | MediaSource) => `mocked-url/${(blob as File).name}`),
    },
  });
});

afterAll(() => {
  vi.restoreAllMocks();
});

describe('FileComponent', () => {
  it('renders a visible element', () => {
    const file = new File([], 'example.png', { type: 'image/png' });
    const { container } = render(
      <FileComponent
        allowedFileTypes={''}
        file={file}
        fileSizeErrorMessage={''}
        fileTypeErrorMessage={''}
        maxFileSizeInBytes={0}
        onDelete={undefined}
      />,
    );

    const fileComponent = container.querySelector(':only-child');

    expect(fileComponent).toBeInTheDocument();
    expect(fileComponent).toBeVisible();
  });

  it('shows the correct error message when a wrong file type is uploaded', () => {
    const file = new File([], 'example.txt', { type: 'text/plain' });
    const fileTypeErrorMessage = 'Dit bestandstype wordt niet toegestaan.';
    render(
      <FileComponent
        allowedFileTypes=".png,.jpg"
        file={file}
        fileSizeErrorMessage=""
        fileTypeErrorMessage={fileTypeErrorMessage}
        maxFileSizeInBytes={10485760}
        onDelete={vi.fn()}
      />,
    );

    const alertElement = screen.getByText(fileTypeErrorMessage);
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toBeVisible();
  });

  it('shows the correct error message when the file is too big', () => {
    const largeFile = new File([], 'largefile.png', { type: 'image/png' });
    Object.defineProperty(largeFile, 'size', { value: 11 * 1024 * 1024 });
    const fileSizeErrorMessage = 'Dit bestand is groter dan 10 MB.';
    render(
      <FileComponent
        allowedFileTypes=".png,.jpg"
        file={largeFile}
        fileSizeErrorMessage={fileSizeErrorMessage}
        fileTypeErrorMessage=""
        maxFileSizeInBytes={10485760}
        onDelete={vi.fn()}
      />,
    );

    const alertElement = screen.getByText(fileSizeErrorMessage);
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toBeVisible();
  });

  it('renders the correct link for the file for preview', () => {
    const file = new File([], 'example.png', { type: 'image/png' });
    render(
      <FileComponent
        allowedFileTypes=".png,.jpg"
        file={file}
        fileSizeErrorMessage=""
        fileTypeErrorMessage=""
        maxFileSizeInBytes={10485760}
        onDelete={vi.fn()}
      />,
    );

    const linkElement = screen.getByRole('link', { name: /example.png/i });
    expect(linkElement).toHaveAttribute('href', 'mocked-url/example.png');
  });
});

afterEach(() => cleanup());
