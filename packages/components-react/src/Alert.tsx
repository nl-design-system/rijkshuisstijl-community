import { Heading, Icon, Paragraph, Alert as UAlert } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
const RhcIcon = ({ icon }: { icon: string }) =>
  icon === 'info' ? (
    <IconInfo></IconInfo>
  ) : icon === 'ok' ? (
    <IconSuccess></IconSuccess>
  ) : icon === 'warning' ? (
    <IconWarning></IconWarning>
  ) : icon === 'error' ? (
    <IconError></IconError>
  ) : (
    <></>
  );
interface AlertProps {
  type?: 'info' | 'ok' | 'warning' | 'error';
  icon?: string;
  heading?: string;
  headingLevel?: number;
  textContent?: string;
}
export const Alert = forwardRef(
  (
    { type, children, icon, heading, headingLevel, textContent, ...restProps }: PropsWithChildren<AlertProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <UAlert ref={ref} {...restProps} type={type} role="alert">
        {children ? (
          children
        ) : (
          <div className="rhc-alert-container">
            <div
              className={clsx({
                'rhc-alert-container__icon': true,
                'rhc-alert-container__icon-ok': type === 'ok',
                'rhc-alert-container__icon-error': type === 'error',
                'rhc-alert-container__icon-warning': type === 'warning',
                'rhc-alert-container__icon-info': type === 'info',
              })}
            >
              {icon && (
                <Icon>
                  <RhcIcon icon={icon} />
                </Icon>
              )}
            </div>
            <div>
              <Heading level={headingLevel || 3}>{heading}</Heading>
              <Paragraph>{textContent}</Paragraph>
            </div>
          </div>
        )}
      </UAlert>
    );
  },
);

Alert.displayName = 'Alert';

const IconInfo = () => {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 6C9 5.44772 9.44771 5 10 5H10.01C10.5623 5 11.01 5.44772 11.01 6C11.01 6.55228 10.5623 7 10.01 7H10C9.44771 7 9 6.55228 9 6Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 10C8 9.44771 8.44771 9 9 9H10C10.5523 9 11 9.44771 11 10V13C11.5523 13 12 13.4477 12 14C12 14.5523 11.5523 15 11 15H10C9.44772 15 9 14.5523 9 14V11C8.44771 11 8 10.5523 8 10Z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconSuccess = () => {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM13.7071 7.29289C14.0976 7.68342 14.0976 8.31658 13.7071 8.70711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289Z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconWarning = () => {
  return (
    <svg viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.37028 2.50583C7.90004 1.5565 8.90224 0.967773 9.98995 0.967773C11.0777 0.967773 12.0799 1.55649 12.6096 2.50581L19.7051 14.7481C19.7287 14.7887 19.7494 14.831 19.767 14.8745C20.1397 15.7958 20.0319 16.8419 19.4793 17.6679C18.9266 18.4938 18.0008 18.9925 17.007 18.9995L17 18.9995H2.99995C2.98168 18.9995 2.96351 18.999 2.94548 18.9981C2.91022 19 2.87452 19.0001 2.83847 18.9982C1.86877 18.9482 0.983242 18.432 0.461945 17.6128C-0.0593516 16.7936 -0.151938 15.7728 0.213468 14.8732C0.230968 14.8301 0.251452 14.7883 0.27477 14.7481L7.37028 2.50583ZM2.94471 17.001C2.963 17 2.98142 16.9995 2.99995 16.9995H16.9959C17.326 16.9962 17.6334 16.8302 17.817 16.5557C17.9904 16.2966 18.0324 15.9726 17.9333 15.6794L10.8748 3.50098L10.865 3.48365C10.6888 3.16533 10.3537 2.96777 9.98995 2.96777C9.62617 2.96777 9.29107 3.16533 9.11495 3.48365L9.10514 3.50098L2.0462 15.6801C1.94885 15.9662 1.98591 16.2823 2.14927 16.5391C2.32303 16.8121 2.61821 16.9842 2.94144 17.0009C2.94253 17.0009 2.94362 17.001 2.94471 17.001ZM9.99996 6.99953C10.5522 6.99953 11 7.44724 11 7.99953V9.99953C11 10.5518 10.5522 10.9995 9.99996 10.9995C9.44767 10.9995 8.99996 10.5518 8.99996 9.99953V7.99953C8.99996 7.44724 9.44767 6.99953 9.99996 6.99953ZM8.99996 13.9995C8.99996 13.4472 9.44767 12.9995 9.99996 12.9995H10.01C10.5622 12.9995 11.01 13.4472 11.01 13.9995C11.01 14.5518 10.5622 14.9995 10.01 14.9995H9.99996C9.44767 14.9995 8.99996 14.5518 8.99996 13.9995Z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconError = () => {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 5C10.5523 5 11 5.44772 11 6V10C11 10.5523 10.5523 11 10 11C9.44771 11 9 10.5523 9 10V6C9 5.44772 9.44771 5 10 5ZM9 14C9 13.4477 9.44771 13 10 13H10.01C10.5623 13 11.01 13.4477 11.01 14C11.01 14.5523 10.5623 15 10.01 15H10C9.44771 15 9 14.5523 9 14Z"
        fill="currentColor"
      />
    </svg>
  );
};
