/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

export { FieldsetLegend, type FieldsetLegendProps } from '@utrecht/component-library-react';
import {
  FieldsetLegend,
  Fieldset as UtrechtFieldSet,
  FieldsetProps as UtrechtFieldsetProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref } from 'react';

export interface FieldsetProps extends UtrechtFieldsetProps {
  ref?: Ref<HTMLDivElement>;
  element?: string | 'div' | 'fieldset';
  legend?: ReactNode;
  legendId?: string;
  section?: boolean;
}

export const Fieldset = ({
  ref,
  children,
  legend,
  legendId,
  section,
  disabled,
  invalid,
  ...restProps
}: PropsWithChildren<FieldsetProps>) => {
  return (
    <UtrechtFieldSet
      ref={ref}
      className={clsx({
        'utrecht-form-fieldset--section': section,
      })}
      {...restProps}
    >
      {legend && (
        <FieldsetLegend
          id={legendId}
          className={clsx({
            'utrecht-form-fieldset__legend--disabled': disabled,
            'utrecht-form-fieldset__legend--invalid': invalid,
          })}
        >
          {legend}
        </FieldsetLegend>
      )}
      {children}
    </UtrechtFieldSet>
  );
};
