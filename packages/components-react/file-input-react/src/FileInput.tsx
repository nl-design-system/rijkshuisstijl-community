/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Button, ButtonProps, type ButtonPurpose } from '@rijkshuisstijl-community/button-react';
import { File } from '@rijkshuisstijl-community/file-react';
import { Paragraph } from '@rijkshuisstijl-community/paragraph-react';
import { ChangeEvent, PropsWithChildren, Ref, useEffect, useRef, useState } from 'react';

type ButtonAppearance = 'primary-action-button' | 'secondary-action-button' | 'subtle-button';

const PURPOSE_BY_APPEARANCE: Record<ButtonAppearance, ButtonPurpose> = {
  'primary-action-button': 'primary',
  'secondary-action-button': 'secondary',
  'subtle-button': 'subtle',
};

export interface FileInputProps extends Omit<ButtonProps, 'appearance' | 'ref'> {
  ref?: Ref<HTMLInputElement>;
  buttonText: string;
  /** Wordt vertaald naar de overeenkomstige `purpose` van de Button. */
  buttonAppearance?: ButtonAppearance;
  maxFileSizeInBytes: number;
  allowedFileTypes: string;
  fileSizeErrorMessage: string;
  fileTypeErrorMessage: string;
  onValueChange?: (callbackFiles: File[]) => void;
  defaultFiles?: File[];
}

export const FileInput = ({
  ref,
  children,
  buttonText,
  maxFileSizeInBytes,
  allowedFileTypes,
  buttonAppearance,
  fileSizeErrorMessage,
  fileTypeErrorMessage,
  onValueChange,
  defaultFiles,
}: PropsWithChildren<FileInputProps>) => {
  const [files, setFiles] = useState<File[]>([]);
  const inputElement = useRef<HTMLInputElement>(null);

  const onChange = (newFiles: FileList | null) => {
    if (newFiles) {
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      if (onValueChange) {
        onValueChange(updatedFiles);
      }
    }
  };

  const onDelete = (fileToRemove: File) => {
    const updatedFiles = files.filter((file) => file !== fileToRemove);

    setFiles(updatedFiles);
    if (onValueChange) {
      onValueChange(updatedFiles);
    }
  };

  useEffect(() => {
    if (defaultFiles) {
      setFiles(defaultFiles);
    }
  }, [defaultFiles]);

  return (
    <div className="rhc-file-input" ref={ref}>
      {children}
      <input
        multiple
        accept={allowedFileTypes}
        ref={inputElement}
        style={{ display: 'none' }}
        type="file"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.files);
        }}
      />
      <div className="rhc-file-input__button-feedback-container">
        <Button
          purpose={buttonAppearance ? PURPOSE_BY_APPEARANCE[buttonAppearance] : 'secondary'}
          onClick={() => inputElement?.current?.click()}
        >
          {buttonText}
        </Button>
        {files.length === 0 && <Paragraph className="rhc-file-input__feedback">Geen bestand gekozen</Paragraph>}
      </div>
      <div className="rhc-file-input__files-container">
        {files.map((item: File) => {
          return (
            <File
              allowedFileTypes={allowedFileTypes}
              file={item}
              fileSizeErrorMessage={fileSizeErrorMessage}
              fileTypeErrorMessage={fileTypeErrorMessage}
              key={files.indexOf(item)}
              maxFileSizeInBytes={maxFileSizeInBytes}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

FileInput.displayName = 'FileInput';
