---
'@rijkshuisstijl-community/components-react': minor
---

fix dependency graph for changeset

Moved components-css dependency from `devDependencies` to `dependencies`. Depending on @rijkshuisstijl-community/components-css this way, gives changeset more of a hint when updating and releasing packages. Not perfect, but at least changeset will detect for example that components-react depend on components-css a lot and a change in the latter should instruct at least a patch update in the former. In short, after this change, pnpm changeset should do a better autodetect of which packages have changed and actual releases should be done for both when updating components-css.
