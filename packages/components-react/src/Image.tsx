import {
  Image as UtrechtImage,
  type ImageProps as UtrechtImageProps,
} from '@utrecht/component-library-react/dist/css-module';
import { ForwardedRef, forwardRef } from 'react';

export { type UtrechtImageProps as ImageProps };

export const Image = forwardRef(
  ({ className, ...restProps }: UtrechtImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <UtrechtImage {...restProps} photo className={className} ref={ref} />
  ),
);

Image.displayName = 'Image';
