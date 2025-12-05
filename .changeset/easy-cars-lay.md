---
'@rijkshuisstijl-community/components-angular': patch
'@rijkshuisstijl-community/components-react': patch
---

Updates `@testing-library/jest-dom` from 5.17.0 to 6.9.1.
Removes `@types/testing-library__jest-dom` because v6 now ships its own TypeScript types internally. No code changes required; tests and type checks continue to work the same.
