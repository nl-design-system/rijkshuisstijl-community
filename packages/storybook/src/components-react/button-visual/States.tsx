import { Button } from '@rijkshuisstijl-community/components-react';
import { Fragment } from 'react';

const appearances = ['default', 'primary-action', 'secondary-action', 'subtle'];

export const InteractiveStates = () => (
  <>
    {appearances.map((appearance) => (
      <Fragment key={appearance}>
        <Button appearance={`${appearance}-button`} className="utrecht-button--active" key={`active-${appearance}`}>
          Active Button ({appearance})
        </Button>
        <Button
          appearance={`${appearance}-button`}
          className="utrecht-button--focus utrecht-button--focus-visible"
          key={`focus-${appearance}`}
        >
          Focus Button ({appearance})
        </Button>
        <Button appearance={`${appearance}-button`} className="utrecht-button--hover" key={`hover-${appearance}`}>
          Hover Button ({appearance})
        </Button>
      </Fragment>
    ))}
  </>
);

export const PropertyStates = () => (
  <>
    {appearances.map((appearance) => (
      <Fragment key={appearance}>
        <Button disabled appearance={`${appearance}-button`} key={`disabled-${appearance}`}>
          Disabled Button ({appearance})
        </Button>
        <Button busy appearance={`${appearance}-button`} key={`busy-${appearance}`}>
          Busy Button ({appearance})
        </Button>
        <Button pressed appearance={`${appearance}-button`} key={`pressed-${appearance}`}>
          Pressed Button ({appearance})
        </Button>
      </Fragment>
    ))}
  </>
);
