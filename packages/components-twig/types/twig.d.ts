declare module '*.twig' {
  // Twig templates are compiled to functions that accept props and return strings
  // We type them as 'any' to work with both string rendering and Storybook's component expectations
  const TwigTemplate: any;
  export default TwigTemplate;
}
