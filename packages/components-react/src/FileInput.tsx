import {
  FileInput as AmsterdamFileInput,
  type FileInputProps as AmsterdamFileInputProps,
} from '@amsterdam/design-system-react';
import '@rijkshuisstijl-community/components-css/index.scss';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

export { type AmsterdamFileInputProps as FileInputProps };

export const FileInput = forwardRef(
  ({ className, ...restProps }: AmsterdamFileInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <AmsterdamFileInput {...restProps} ref={ref} className={clsx('rhc-file-input', className)}></AmsterdamFileInput>
  ),
);

FileInput.displayName = 'FileInput';
