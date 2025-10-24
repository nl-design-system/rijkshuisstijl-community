---
'@rijkshuisstijl-community/components-angular': major
'@rijkshuisstijl-community/storybook-angular': major
---

Updated Angular from v19.2 to v20.3.7 and related packages:

**What changed:**
- Angular core packages updated from ~19.2.0 to ~20.3.0
- Angular CLI and build tools updated to 20.3.7
- ng-packagr updated from 19.2.2 to 20.3.0
- Jest updated from 29.7.0 to 30.1.0
- jest-preset-angular updated from 14.5.4 to 15.0.3
- TypeScript updated from 5.7.2 to 5.8.3 (required by Angular 20)
- Removed deprecated `globalSetup` configuration from jest.config.js

**Why:**
Angular 20 brings performance improvements, new features, and bug fixes. Keeping the Angular version up to date ensures access to the latest improvements and security patches.

**How to update:**
Projects using `@rijkshuisstijl-community/components-angular` should update their own Angular dependencies to v20.3.x:

```json
{
  "dependencies": {
    "@angular/common": "~20.3.0",
    "@angular/core": "~20.3.0",
    "@angular/forms": "~20.3.0",
    "@angular/platform-browser": "~20.3.0",
    "@angular/platform-browser-dynamic": "~20.3.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~20.3.0",
    "@angular/cli": "~20.3.0",
    "@angular/compiler-cli": "~20.3.0",
    "typescript": "~5.8.0"
  }
}
```

**Notes:**
- All existing tests pass without modifications
- The build process works without changes
- angular-tabler-icons (3.26.0) shows peer dependency warnings but works correctly with Angular 20
