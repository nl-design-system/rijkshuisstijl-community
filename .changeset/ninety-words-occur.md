---
---
chore: exclude test and locale files from SonarCloud duplication checks.

Updated `.sonarcloud.properties` configuration to exclude test files (`**/*.test.ts*`, `**/*.spec.ts*`) and translation files (`**/locales/*.ts`) from copy-paste detection (CPD) in alignment with industry best practices.