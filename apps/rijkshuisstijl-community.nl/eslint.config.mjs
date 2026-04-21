import nextConfig from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextConfig,
  {
    ignores: ['dist/**'],
  },
];

export default config;
