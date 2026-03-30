---
'@rijkshuisstijl-community/components-react': major
---

fixed ssr rendering issues

Due to how nextjs scans external dependencies for client components the language navigation needs to export each sub component separately and not as a single object with sub components as properties.
The following code snippet shows the old way of exporting the language navigation component and the new way of exporting it.

```tsx
// old way
<LanguageNavigation.Root>
  <LanguageNavigation.Item>...</LanguageNavigation.Item>
</LanguageNavigation.Root>
```

```tsx
// new way
<LanguageNavigationRoot>
  <LanguageNavigationItem>...</LanguageNavigationItem>
</LanguageNavigationRoot>
```
