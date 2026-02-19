import { Heading } from '@rijkshuisstijl-community/components-react';
import { Icon, flagIconSet as iconSet, registerIconSet } from '@rijkshuisstijl-community/icon-react';
import '../index.css';

registerIconSet(iconSet);

export default function IconSet() {
  const countryCodeConverter = new Intl.DisplayNames(['nl'], { type: 'region' });
  const iconIDs = Object.keys(iconSet).sort((a, b) => a.localeCompare(b));

  return (
    <div className="rhc-icon-set">
      {iconIDs.map((iconID) => (
        <div className="rhc-icon-set-item" key={iconID}>
          <Heading appearanceLevel={5} level={1}>
            {countryCodeConverter.of(iconID.substring(0, 2).toUpperCase())}
          </Heading>
          <Icon icon={iconID}></Icon>
          <span>{iconID}</span>
        </div>
      ))}
    </div>
  );
}
