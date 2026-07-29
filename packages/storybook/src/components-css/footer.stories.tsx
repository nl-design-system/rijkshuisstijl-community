import '@rijkshuisstijl-community/footer-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';

export const Footer = () => (
  <div className="rhc-footer">
    <div className="rhc-section">
      <div className="rhc-grid">
        <div className="rhc-grid__cell--span-3">1</div>
        <div className="rhc-grid__cell--span-3">2</div>
        <div className="rhc-grid__cell--span-3">3</div>
        <div className="rhc-grid__cell--span-3">4</div>
      </div>
    </div>
  </div>
);

export default {
  component: Footer,
  title: 'Footer',
  id: 'rhc-footer',
};
