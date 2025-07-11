import { Icon, defaultIconSet as iconSet } from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import '../index.css';

export default function IconSet() {
  const iconIDs = Object.keys(iconSet).sort((a, b) => a.localeCompare(b));

  return (
    <PageBody>
      <div className="rhc-icon-set">
        {iconIDs.map((iconID) => (
          <div className="rhc-icon-set-item" key={iconID}>
            <Icon icon={iconID}></Icon>
            <span>{iconID}</span>
          </div>
        ))}
      </div>
    </PageBody>
  );
}
