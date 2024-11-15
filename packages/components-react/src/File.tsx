import { Button } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { Alert } from './Alert';
import { Icon } from './icon/Icon';

interface FileProps {
  file: File;
  onDelete: any;
  maxFileSizeInBytes: number;
  allowedFileTypes: string;
  fileSizeErrorMessage: string;
  fileTypeErrorMessage: string;
}

export const File = ({
  file,
  onDelete,
  maxFileSizeInBytes,
  allowedFileTypes,
  fileSizeErrorMessage,
  fileTypeErrorMessage,
}: FileProps) => {
  const extractFileTypeShort = (fileType: string): string => fileType.split('/')[1];
  let error: boolean = false;
  let errorMessage: string = '';

  const checkFileSize = (file: File) =>
    file.size <= maxFileSizeInBytes || ((errorMessage = fileSizeErrorMessage), (error = true), false);

  const checkFileType = (file: File) =>
    allowedFileTypes.split(',').includes(`.${extractFileTypeShort(file.type)}`) ||
    ((errorMessage = fileTypeErrorMessage), (error = true), false);

  const formatBytes = (bytes: number): string => {
    const kilobytes: number = bytes / 1024;
    const megabytes: number = kilobytes / 1024;

    return megabytes >= 1 ? `${megabytes.toFixed(1)} MB` : `${kilobytes.toFixed(1)} KB`;
  };

  return (
    <div
      className={clsx('rhc-file', {
        'rhc-file--error': checkFileSize(file) === false || checkFileType(file) === false,
      })}
    >
      <div className="rhc-file-input__inner-container">
        <div className="rhc-file-input__inner-container__sub">
          <span className="rhc-file--name">{file.name}</span>
          <span className="rhc-file--subtitle">
            ({extractFileTypeShort(file.type)}, {formatBytes(file.size)})
          </span>
        </div>
        <span>
          <Button appearance="subtle-button" onClick={() => onDelete(file)}>
            <Icon icon="verwijderen" />
            Verwijder
          </Button>
        </span>
      </div>
      {error && <Alert textContent={errorMessage} type="error" />}
    </div>
  );
};
