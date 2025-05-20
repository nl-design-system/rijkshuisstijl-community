import { Image as UtrechtImage, type ImageProps as UtrechtImageProps } from '@utrecht/component-library-react';
import { Ref } from 'react';

export interface ImageProps extends UtrechtImageProps {
  ref?: Ref<HTMLImageElement>;
  alt?: string;
  presentation?: boolean;
}

export const Image = ({ ref, className, alt, presentation, ...restProps }: ImageProps) => {
  if (!presentation && !alt) {
    console.warn('Images must always have an alt-text, unless the image is presentational.');
    return null;
  }

  return <UtrechtImage alt={presentation ? '' : alt} {...restProps} photo className={className} ref={ref} />;
};

Image.displayName = 'Image';
