import { Icon } from '@rijkshuisstijl-community/components-react';
import { iconSet } from '@rijkshuisstijl-community/components-react/src/icon-sets/default-icons/icon-set';
import { PageBody } from '@utrecht/page-body-react';
import './index.css';

export default function IconSet() {
  return (
    <>
      <PageBody>
        <div className="rhc-icon-set">
          {Object.keys(iconSet)
            .sort()
            .map((iconID, index) => (
              <div className="rhc-icon-set-item" key={index}>
                <Icon icon={iconID}></Icon>
                <span>{iconID}</span>
              </div>
            ))}
        </div>
      </PageBody>
    </>
  );
}
