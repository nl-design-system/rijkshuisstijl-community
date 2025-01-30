import { Heading, Icon, registerIconSet } from '@rijkshuisstijl-community/components-react';
import { iconSet } from '@rijkshuisstijl-community/components-react/src/icon-sets/flag-icons/icon-set';
import { PageBody } from '@utrecht/page-body-react';
import '../index.css';

registerIconSet(iconSet);

export default function IconSet() {
  const countryCodeConverter = new Intl.DisplayNames(['nl'], { type: 'region' });
  const iconIDs = Object.keys(iconSet).sort((a, b) => a.localeCompare(b));

  return (
    <PageBody>
      <div className="rhc-icon-set">
        {iconIDs.map((iconID) => (
          <div className="rhc-icon-set-item" key={iconID}>
            <Heading appearance="level-5" level={1}>
              {countryCodeConverter.of(iconID.substring(0, 2).toUpperCase())}
            </Heading>
            <Icon icon={iconID}></Icon>
            <span>{iconID}</span>
          </div>
        ))}
      </div>
    </PageBody>
  );
}
