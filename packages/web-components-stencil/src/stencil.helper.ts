const kebabToCamelCase = (kebab: string) => {
  return kebab.replace(/-([a-z])/g, (match) => match[1].toUpperCase());
};

export const handleProps = (host: HTMLElement) => {
  const props: Record<string, any> = {};

  Array.from(host.attributes).forEach((attr) => {
    const key = kebabToCamelCase(attr.name);
    props[key] = attr.value;
  });

  return { ...props };
};
