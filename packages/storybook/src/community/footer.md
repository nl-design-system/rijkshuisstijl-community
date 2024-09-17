# Rijkshuisstijl Community Footer component

De footer bestaat uit kolommen met als eerste de titel en daarna `LinkList` componenten met handige bronnen.

De kolommen lijsten kunnen worden toegevoegd door middel van properties aan het `<Footer>` component.

```tsx
columns={[
    {
      children: <LinkList><LinkListLink href="#" icon={<UtrechtIconChevronRight />}>Contact</LinkListLink> etc...</LinkList>,
      heading: 'Service'
    }
  ]}
  heading="De Rijksoverheid. Voor Nederland"
```
