import { Article, Button, ButtonGroup, Heading1, Link, Paragraph } from '@utrecht/component-library-react';
import { Logo } from '@rijkshuisstijl-community/components-react';
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
          <Heading1>Risico&#39;s van stoffen</Heading1>
          <Paragraph>
            De informatie op deze website is vooral gericht op het bevoegd gezag van de Wet milieubeheer, de Waterwet,
            de inspecties en andere overheidsorganisaties. Voor vragen over risico&#39;s van stoffen, of opmerkingen
            over deze website kunt u terecht bij de{' '}
            <Link href="https://rvs.rivm.nl/onderwerpen/helpdesk">helpdesk</Link>.
          </Paragraph>
          <ButtonGroup>
            <Button type="submit" appearance="primary-action-button">
              Bla
            </Button>
          </ButtonGroup>
        </Article>
      </main>
    </>
  );
}
