import {
  Image as UtrechtImage,
  type ImageProps as UtrechtImageProps,
} from '@utrecht/component-library-react/dist/css-module';
import { ForwardedRef, forwardRef } from 'react';

export { type UtrechtImageProps as ImageProps };

export const Image = forwardRef(
  ({ className, ...restProps }: UtrechtImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <UtrechtImage {...restProps} ref={ref} photo className={className} />
  ),
);

Image.displayName = 'Image';
