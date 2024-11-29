import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { File as FileComponent } from './File';
beforeAll(() => {
  Object.defineProperty(window, 'URL', {
    value: {
      createObjectURL: jest.fn().mockImplementation((blob: Blob | MediaSource) => `mocked-url/${(blob as File).name}`),
    },
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('FileInputItem', () => {
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

    const fileInputItem = container.querySelector(':only-child');

    expect(fileInputItem).toBeInTheDocument();
    expect(fileInputItem).toBeVisible();
  });
});
