import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/components-css/dist/index.css';

const KeepComponent = () => (
  <div className="rhc-keep rhc-keep--colored-rectangle-pink-inline-start">
    <p className="nl-paragraph">Test</p>
  </div>
);

const meta = {
  title: 'CSS Components/Keep',
  id: 'rhc-keep-css',
  component: KeepComponent,
};

export default meta;

export const Default = {};
