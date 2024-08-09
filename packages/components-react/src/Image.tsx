import { Image as UtrechtImage } from '@utrecht/component-library-react/dist/css-module';
import { ForwardedRef, forwardRef, ImgHTMLAttributes } from 'react';

export const Image = forwardRef(
  ({ className, ...restProps }: ImgHTMLAttributes<HTMLImageElement>, ref: ForwardedRef<HTMLImageElement>) => (
    <UtrechtImage {...restProps} ref={ref} photo className={className} />
  ),
);

Image.displayName = 'Image';
