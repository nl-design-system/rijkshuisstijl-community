import * as prettier from 'prettier';
import pluginHTML from 'prettier/plugins/html';
import { useEffect, useState } from 'react';

interface Props {
  ugly: string;
}

export function Prettify({ ugly }: Props): string {
  const [prettySrc, setPrettySrc] = useState('');
  useEffect(() => {
    const prettify = async () => {
      const pretty = await prettier.format(ugly, {
        parser: 'html',
        plugins: [pluginHTML],
      });
      setPrettySrc(pretty);
    };

    prettify();
  }, []);

  return prettySrc;
}
