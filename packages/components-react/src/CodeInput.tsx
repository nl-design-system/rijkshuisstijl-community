import { Textbox } from './Textbox';

export const CodeInput = ({ ...restProps }) => {
  return <Textbox {...restProps} className={'rhc-code-input'} maxLength={1} type="text" />;
};
