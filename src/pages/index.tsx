import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SearchBar from '@theme/SearchBar';
import { ArrowUpRight as LinkIcon, Info } from 'lucide-react';
import ThemedImage from '@theme/ThemedImage';
import styled from '@emotion/styled';

const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const HeaderContent = styled.header`
  position: relative;
  padding: 4rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--ifm-container-width);
  margin: 0 auto;
  color: var(--ifm-font-color-base);
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const SearchWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Card = styled.div`
  background: var(--ifm-card-background-color);
  border-radius: var(--ifm-card-border-radius);
  border: 1px solid var(--ifm-color-emphasis-200);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--ifm-color-emphasis-300);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  color: var(--ifm-color-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// QuickLinks Component
const QuickLinksSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1rem;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const LinkCard = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  background-color: var(--ifm-background-surface-color);
  text-decoration: none;
  color: var(--ifm-font-color-base);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--ifm-color-emphasis-100);
    text-decoration: none;
  }
`;

const LinkTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

const LinkDescription = styled.p`
  font-size: 0.875rem;
  color: var(--ifm-color-emphasis-600);
  margin: 0.25rem 0 0;
`;

const QuickLinksTitle = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const actions = [
  {
    title: 'What is Surge',
    icon: Info,
    to: '/docs/intro',
    text: 'Learn about the Surge Rollup',
  },
  {
    title: 'Deploy Surge Devnet',
    icon: Info,
    to: '/docs/guides/running-surge/',
    text: 'Set up a local Surge development network',
  },
  {
    title: 'Surge Architecture',
    icon: Info,
    to: 'docs/about/architecture',
    text: 'Learn about the Architecture of Surge rollup',
  },
];

const itemLinks = [
  {
    title: 'Deploy a DApp',
    description: 'Learn how to deploy your DApp to test Surge.',
    to: '/docs/guides/deploy-on-surge',
  },
  {
    title: 'Troubleshooting',
    description: 'Get Solutions to common Surge issues and get help',
    to: 'docs/troubleshooting/',
  },
];

const QuickLinks = () => (
  <QuickLinksSection>
    <ColumnWrapper>
      <Column>
        <QuickLinksTitle>Quick Links</QuickLinksTitle>
        <p>Get started with Surge rollup development</p>
        {itemLinks.map((link) => (
          <LinkCard key={link.title} to={link.to}>
            <div>
              <LinkTitle>{link.title}</LinkTitle>
              <LinkDescription>{link.description}</LinkDescription>
            </div>
            <LinkIcon size={20} />
          </LinkCard>
        ))}
      </Column>
    </ColumnWrapper>
  </QuickLinksSection>
);

const HomePage = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HeaderWrapper>
        <HeaderContent>
          <ThemedImage
            sources={{
              light: '/img/Surge Vertical Dark.svg',
              dark: '/img/Surge Vertical Light.svg',
            }}
            alt="Surge Logo"
            sizes={'s'}
          />
          <Title>{siteConfig.title}</Title>
          <p>Surge is a based rollup on Taiko, featuring decentralized ordering by Ethereum validators and Stage 2
            trustless security</p>
          <SearchWrapper>
            <SearchBar />
          </SearchWrapper>
        </HeaderContent>
      </HeaderWrapper>

      <main className="container">
        <CardGrid>
          {actions.map((action, index) => (
            <Link
              key={index}
              to={action.to}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card key={index}>
                <CardTitle>{action.title}</CardTitle>
                <CardDescription>{action.text}</CardDescription>
                <StyledLink to={action.to}>Learn more</StyledLink>
              </Card>
            </Link>
          ))}
        </CardGrid>
        <QuickLinks />
      </main>
    </Layout>
  );
};

export default HomePage;
