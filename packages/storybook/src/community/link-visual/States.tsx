import { Link } from '@rijkshuisstijl-community/components-react';

export const VisualStates = () => (
  <>
    <Link href="#">Link</Link>
    <Link className="nl-link--hover" href="#">
      Hover link
    </Link>
    <Link className="nl-link--active" href="#">
      Active link
    </Link>
    <Link className="nl-link--focus nl-link--focus-visible" href="#">
      Focus link
    </Link>
    <Link className="nl-link--focus-visited" href="#">
      Visited link
    </Link>
  </>
);
