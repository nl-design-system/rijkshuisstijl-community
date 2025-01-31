'use client';

import {
  Logo,
  Article,
  Button,
  Heading,
  Link,
  Paragraph,
  ActionGroup,
} from '@rijkshuisstijl-community/components-react';
import './page.css';

export default function Home() {
  return (
    <>
      <main>
        <Logo
          organisation="Rijksinstituut voor Volksgezondheid
en Milieu"
          subtitle="Ministerie van Volksgezondheid,
Welzijn en Sport"
        ></Logo>
        <Article>
          <Heading level={1}>Risico&#39;s van stoffen</Heading>
          <Paragraph>
            De informatie op deze website is vooral gericht op het bevoegd gezag van de Wet milieubeheer, de Waterwet,
            de inspecties en andere overheidsorganisaties. Voor vragen over risico&#39;s van stoffen, of opmerkingen
            over deze website kunt u terecht bij de{' '}
            <Link href="https://rvs.rivm.nl/onderwerpen/helpdesk">helpdesk</Link>.
          </Paragraph>
          <ActionGroup>
            <Button type="submit" appearance="primary-action-button">
              Bla
            </Button>
          </ActionGroup>
        </Article>
      </main>
    </>
  );
}
