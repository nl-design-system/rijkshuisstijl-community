import * as prettier from 'prettier';
import pluginHTML from 'prettier/plugins/html';
import { use } from 'react';

interface Props {
  ugly: string;
}

export function Prettify({ ugly }: Props): string {
  const prettify = async () => {
    return prettier.format(ugly, {
      parser: 'html',
      plugins: [pluginHTML],
    });
  };

  return use(prettify());
}
