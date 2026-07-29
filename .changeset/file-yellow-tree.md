---
'@rijkshuisstijl-community/design-tokens': major
---
- rhc.size.pointer-target aangepast van 3rem naar 48px zodat je altijd aan de 44px voldoet, ongeacht de size van het lettertype.
- rhc.size.icon.md gelijk gezet aan de font-size waarde van md
- icon.inset-block-start zo ingericht dat de positionering van het icoon nu op viewport en type scale goed werkt.
- token rhc.icon.md.inset-block-start.min hernoemd naar rhc.icon.inset-block-start.min.md
- token rhc.icon.md.inset-block-start.max hernoemd naar rhc.icon.inset-block-start.max.md
- tokensets overrides/type-scale/* verwijderd omdat deze na de hernieuwde implementatie van clamp overbodig zijn geworden
