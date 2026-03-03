const patchConfig = require('./.ncurc.patch.cjs');

module.exports = {
  ...patchConfig,
  // zone.js is pinned to ~0.15.x by Angular 20.x peer deps; upgrade together with Angular
  // @storybook/test-runner 0.24+ requires Storybook 10; upgrade together with Storybook
  // eslint-plugin-react-refresh 0.5+ requires ESLint 9; upgrade together with ESLint migration
  reject: [...patchConfig.reject, 'zone.js', '@storybook/test-runner', 'eslint-plugin-react-refresh'],
  target: 'minor',
};
