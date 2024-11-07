import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { FileInputItem } from '.';

describe('FileInputItem', () => {
  it('renders a visible element', () => {
    const file = new File([], 'example.png', { type: 'image/png' });
    const { container } = render(
      <FileInputItem
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
