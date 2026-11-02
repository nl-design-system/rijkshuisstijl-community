import {
  ActionGroup,
  Article,
  ButtonLink,
  Heading,
  Paragraph,
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavList,
} from '@rijkshuisstijl-community/components-react';
import {
  PageBodyContainer,
  PageBodyContent,
  PageBodyMain,
} from '@rijkshuisstijl-community/storybook/src/templates/design-tokens/PageBody';
import SharedFooter from '@rijkshuisstijl-community/storybook/src/templates/shared/footer';
import SharedHeader from '@rijkshuisstijl-community/storybook/src/templates/shared/header';
import components, { ComponentData } from '@rijkshuisstijl-community/storybook/src/templates/componenten/transform';

const allComponents = components.map((obj) => {
  return {
    ...obj,
  };
});

export async function generateStaticParams() {
  return allComponents;
}

export default async function Page({ params }: PageProps<'/[slug]'>) {
  const { slug } = await params;
  const component = allComponents.find((item) => item.slug === slug);

  if (!component) {
    return;
  }

  return <ComponentPage component={component} />;
}

interface ComponentPageProps {
  component: ComponentData;
}

const ComponentPage = ({ component }: ComponentPageProps) => {
  const {
    slug: currentSlug,
    heading,
    figmaURL,
    figmaEmbedURL,
    description,
    storybookURL,
    nldesignsystemURL,
  } = component;
  const navigation = allComponents.map(({ slug, heading }) => ({
    href: `/${slug}`,
    label: heading,
    current: slug === currentSlug,
  }));

  return (
    <>
      <SharedHeader />
      <PageBodyContainer>
        <PageBodyContent layout="side-nav">
          <SideNav className="rhc-side-nav" heading="Submenu">
            <SideNavList>
              {navigation.map(({ href, label }) => (
                <SideNavItem key={href}>
                  <SideNavLink href={href}>{label}</SideNavLink>
                </SideNavItem>
              ))}
            </SideNavList>
          </SideNav>
          <PageBodyMain>
            <Article>
              <Heading level={1}>{heading}</Heading>
              {description && <Paragraph purpose="lead">{description}</Paragraph>}
              <ActionGroup direction="column">
                {storybookURL && (
                  <ButtonLink appearance="secondary-action-button" href={storybookURL} target="_blank">
                    Bekijk {heading} in Storybook
                  </ButtonLink>
                )}
                {figmaURL && (
                  <ButtonLink appearance="secondary-action-button" href={figmaURL} target="_blank">
                    Bekijk {heading} in Figma
                  </ButtonLink>
                )}
                {nldesignsystemURL && (
                  <ButtonLink appearance="secondary-action-button" href={nldesignsystemURL} target="_blank">
                    Bekijk {heading} bij NL Design System
                  </ButtonLink>
                )}
              </ActionGroup>
              {/* <pre>{JSON.stringify(component, null, 2)}</pre> */}
              {figmaEmbedURL && (
                <>
                  <Heading level={2} id="figma">
                    Figma
                  </Heading>
                  <details>
                    <summary>Bekijk Figma</summary>
                    <iframe src={figmaEmbedURL} height="450px" width="100%" allowFullScreen frameBorder={0}></iframe>
                  </details>
                </>
              )}
            </Article>
          </PageBodyMain>
        </PageBodyContent>
      </PageBodyContainer>
      <SharedFooter />
    </>
  );
};
