import { ChangeEvent, ForwardedRef, forwardRef, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Button, ButtonProps } from './Button';
import { File } from './File';
import { Paragraph } from './Paragraph';

export interface FileInputProps extends Omit<ButtonProps, 'appearance'> {
  ref: ForwardedRef<HTMLDivElement>;
  buttonText: string;
  buttonAppearance?: ButtonProps['appearance'];
  maxFileSizeInBytes: number;
  allowedFileTypes: string;
  fileSizeErrorMessage: string;
  fileTypeErrorMessage: string;
  // eslint-disable-next-line no-unused-vars
  onValueChange?: (callbackFiles: File[]) => void;
  defaultFiles?: File[];
}

const FileInput = forwardRef<HTMLDivElement, PropsWithChildren<FileInputProps>>(
  (
    {
      children,
      buttonText,
      maxFileSizeInBytes,
      allowedFileTypes,
      buttonAppearance,
      fileSizeErrorMessage,
      fileTypeErrorMessage,
      onValueChange,
      defaultFiles,
    },
    ref,
  ) => {
    const [files, setFiles] = useState<File[]>([]);
    const inputElement = useRef<HTMLInputElement | null>(null);

    const onChange = (newFiles: FileList | null) => {
      if (newFiles) {
        const updatedFiles = [...files, ...Array.from(newFiles)];
        setFiles(updatedFiles);
        if (onValueChange) {
          onValueChange(updatedFiles);
        }
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
            appearance={buttonAppearance ?? 'secondary-action-button'}
            onClick={() => inputElement?.current?.click()}
          >
            {buttonText}
          </Button>
          {files.length === 0 && <Paragraph className="rhc-file-input__feedback">Geen bestand gekozen</Paragraph>}
        </div>
        <div className="rhc-file-input__files-container">
          {files.map((item: File) => (
            <File
              allowedFileTypes={allowedFileTypes}
              file={item}
              fileSizeErrorMessage={fileSizeErrorMessage}
              fileTypeErrorMessage={fileTypeErrorMessage}
              key={item.name} // Using unique file name for key
              maxFileSizeInBytes={maxFileSizeInBytes}
              onDelete={(fileToRemove: File) => setFiles(files.filter((file) => file !== fileToRemove))}
            />
          ))}
        </div>
      </div>
    );
  },
);

FileInput.displayName = 'FileInput';

export { FileInput };
