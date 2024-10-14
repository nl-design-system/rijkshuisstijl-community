import { ChangeEvent, ForwardedRef, forwardRef, PropsWithChildren, useRef, useState } from 'react';
import { Button, ButtonProps } from './Button';
import { FileInputItem } from './FileInputItem';

export interface FileInputProps extends Omit<ButtonProps, 'appearance'> {
  buttonText: string;
  buttonAppearance?: ButtonProps['appearance'];
  maxFileSizeInBytes: number;
  allowedFileTypes: string;
  fileSizeErrorMessage: string;
  fileTypeErrorMessage: string;
  onValueChange?: (callbackFiles: File[]) => void; // eslint-disable-line no-unused-vars
}

export const FileInput = forwardRef(
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
    }: PropsWithChildren<FileInputProps>,
    ref: ForwardedRef<HTMLDivElement>,
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
        <Button
          appearance={buttonAppearance ?? 'secondary-action-button'}
          onClick={() => inputElement.current && inputElement.current.click()}
        >
          {buttonText}
        </Button>
        <div className="rhc-file-input__items-container">
          {files.map((item: File) => {
            return (
              <FileInputItem
                allowedFileTypes={allowedFileTypes}
                file={item}
                fileSizeErrorMessage={fileSizeErrorMessage}
                fileTypeErrorMessage={fileTypeErrorMessage}
                key={files.indexOf(item)}
                maxFileSizeInBytes={maxFileSizeInBytes}
                onDelete={(fileToRemove: File) => setFiles(files.filter((file) => file !== fileToRemove))}
              />
            );
          })}
        </div>
      </div>
    );
  },
);

FileInput.displayName = 'FileInput';
