declare module '*.twig' {
  // Twig templates are compiled to functions that accept props and return strings
  // We type them as 'any' for ease of use with Storybook's component expectations
  const TwigTemplate: any;
  export default TwigTemplate;
}
