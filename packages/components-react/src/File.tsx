/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Alert } from '@rijkshuisstijl-community/alert-react';
import clsx from 'clsx';
import { Button } from './Button';
import { Icon } from './Icon';
import { Link } from './Link';
import { Paragraph } from './Paragraph';

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

  const checkFileType = (file: File) => {
    const trimmedTypes = allowedFileTypes
      .trim()
      .split(',')
      .map((type) => type.trim());

    return (
      trimmedTypes.includes(`.${extractFileTypeShort(file.type)}`) ||
      ((errorMessage = fileTypeErrorMessage), (error = true), false)
    );
  };

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
      <div className="rhc-file__inner-container">
        <div className="rhc-file__inner-container__sub">
          <Link href={URL.createObjectURL(file)} target="_blank">
            <span className="rhc-file__name">{file.name}</span>
          </Link>
          <span className="rhc-file__subtitle">
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
      {error && (
        <Alert type="error">
          <Paragraph>{errorMessage}</Paragraph>
        </Alert>
      )}
    </div>
  );
};
