import { Image as UtrechtImage, type ImageProps as UtrechtImageProps } from '@utrecht/component-library-react';
import { Ref } from 'react';

export interface ImageProps extends UtrechtImageProps {
  ref?: Ref<HTMLImageElement>;
}

export const Image = ({ ref, className, ...restProps }: ImageProps) => (
  <UtrechtImage {...restProps} photo className={className} ref={ref} />
);

Image.displayName = 'Image';
