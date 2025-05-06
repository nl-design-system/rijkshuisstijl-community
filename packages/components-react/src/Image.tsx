import { Image as UtrechtImage, type ImageProps as UtrechtImageProps } from '@utrecht/component-library-react';
import { Ref } from 'react';

export interface ImageProps extends UtrechtImageProps {
  ref?: Ref<HTMLImageElement>;
  alt: string;
}

export const Image = ({ ref, className, alt, ...restProps }: ImageProps) =>
  <UtrechtImage alt={alt} {...restProps} photo className={className} ref={ref} />;

Image.displayName = 'Image';
