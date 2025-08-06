# Icon en inline

Standaard ondersteunt de link een icoon links of rechts van de tekst - zie voorbeelden 'Icon Left' en 'Icon Right'.

Om het icoon goed uit te lijnen is een `display: inline-flex` instelling nodig, die weer niet goed werkt als de link in lopende tekst (een paragraaf) wordt gebruikt. Zodoende wordt helaas het gebruik van een icoon in een link in lopende tekst _niet_ ondersteund.

## Niet

Link in een lopende tekst _met_ icoon

```jsx
<Paragraph>
  Het was in het voorjaar 1345, dat ...
  <Link inline href="ekstern.com">
    ekstern <Icon icon="external" />
  </Link>
  ...Onder die steden, welke vanouds aan de grafelijke kroon...
</Paragraph>
```

## Wel

Link in een lopende tekst zonder icoon

```jsx
<Paragraph>
  Het was in het voorjaar 1345, dat ...
  <Link inline href="ekstern.com">
    ekstern
  </Link>
  ...Onder die steden, welke vanouds aan de grafelijke kroon...
</Paragraph>
```

Losse link

```jsx
<Link inline href="ekstern.com">
  ekstern <Icon icon="external" />
</Link>
```
