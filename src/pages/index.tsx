import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import mediumZoom from 'medium-zoom';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SearchBar from '@theme/SearchBar';
import { ArrowUpRight as LinkIcon, Info } from 'lucide-react';
import ThemedImage from '@theme/ThemedImage';
import styled from '@emotion/styled';
import GitHub from '@site/static/img/github.svg';
import Discord from '@site/static/img/discord.svg';
import { MessageCircle } from 'react-feather';

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

const LinkRow = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  a h3 {
    color: black !important;
  }
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 0.5rem;
`;

const StyledIcon = styled.div`
  svg {
    fill: var(--ifm-font-color-base);
  }
`;

const LinkIconWrapper = styled.div`
  opacity: 0.25;
`;

interface StyledImageProps {
  sources?: { light: string; dark: string };
}

const StyledImage = styled(ThemedImage)`
  position: relative;
  z-index: -1;
  width: 100%;
  object-fit: cover;
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

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 960px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TwoRow = styled(Row)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CenterCard = styled(Card)`
  min-width: 250px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 24px;

  h3 {
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 0px;
  }
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
    title: 'Based Rollups',
    description: 'Discover why Surge uses a based rollup model',
    to: '/docs/about/based-rollups',
  },
  {
    title: 'Stage 2',
    description: 'Explore Surge’s Stage 2 security framework',
    to: '/docs/about/stage-2',
  },
  {
    title: 'Nethermind Execution Client',
    description:
      'Learn how Surge leverages Nethermind Execution Client as its primary Ethereum execution client',
    to: '/docs/about/nethermind',
  },
  {
    title: 'Gigagas',
    description: 'Understand what is Gigagas and its benefits',
    to: '/docs/about/gigagas',
  },
  {
    title: 'Deploy a DApp',
    description: 'Learn how to deploy your DApp on Surge',
    to: '/docs/guides/deploy-on-surge',
  },
  {
    title: 'Troubleshooting',
    description: 'Get solutions to common Surge issues and find help',
    to: 'docs/troubleshooting/',
  },
];

const developerLinks = [
  {
    title: 'surge-taiko-mono',
    href: 'https://github.com/NethermindEth/surge-taiko-mono',
    icon: GitHub,
  },
  {
    title: 'simple-surge-node',
    href: 'https://github.com/NethermindEth/simple-surge-node',
    icon: GitHub,
  },
  {
    title: 'surge-devnet-package',
    href: 'https://github.com/NethermindEth/surge-devnet-package',
    icon: GitHub,
  },
  {
    title: 'Nethermind Execution Client',
    href: 'https://github.com/NethermindEth/nethermind',
    icon: GitHub,
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
          <p>
            Surge is a based rollup template of the Taiko Alethia stack, featuring Gigagas performance, decentralized ordering by Ethereum
            validators, and Stage 2 trustless security
          </p>
          <SearchWrapper>
            <SearchBar />
          </SearchWrapper>
        </HeaderContent>
      </HeaderWrapper>

      <main className="container">
        <CardGrid>
          {actions.map((action, index) => (
            <Link key={index} to={action.to} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card key={index}>
                <CardTitle>{action.title}</CardTitle>
                <CardDescription>{action.text}</CardDescription>
                <StyledLink to={action.to}>Learn more</StyledLink>
              </Card>
            </Link>
          ))}
        </CardGrid>
        <QuickLinks />

        <hr />
        <TwoRow
          style={{
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <StyledImage
            style={{ maxHeight: '400px', maxWidth: '350px' }}
            sources={{
              light: '/img/logo-dark.png',
              dark: '/img/logo-light.png',
            }}
          />
          <div>
            <h2>Developer Links</h2>
            {developerLinks.map((action) => (
              <Link key={action.href} to={action.href} style={{ color: 'inherit' }}>
                <Card key={action.href} style={{ marginBottom: '0.5rem' }}>
                  <LinkRow>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IconWrapper>
                        <StyledIcon>
                          <action.icon style={{ width: '24px' }} />
                        </StyledIcon>
                      </IconWrapper>
                      {action.title}
                    </div>
                    <LinkIconWrapper>
                      <LinkIcon />
                    </LinkIconWrapper>
                  </LinkRow>
                </Card>
              </Link>
            ))}
          </div>
        </TwoRow>
        <hr />
        <Row>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            href={'https://discord.com/invite/PaCMRFdvWT'}
          >
            <CenterCard>
              <StyledIcon>
                <Discord style={{ width: '48px', height: '48px' }} />
              </StyledIcon>
              <div>
                <h3>Discord</h3>
                <p>Join our Developer Community.</p>
              </div>
            </CenterCard>
          </Link>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            href="https://x.com/nethermindeth"
          >
            <CenterCard>
              <MessageCircle style={{ width: '48px', height: '48px' }} />
              <div>
                <h3>X (Twitter)</h3>
                <p>Follow Nethermind for updates and discussions.</p>
              </div>
            </CenterCard>
          </Link>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            href={'https://github.com/NethermindEth/Surge'}
          >
            <CenterCard>
              <StyledIcon>
                <GitHub style={{ width: '48px', height: '48px' }} />
              </StyledIcon>
              <div>
                <h3>GitHub</h3>
                <p>View all Surge repositories.</p>
              </div>
            </CenterCard>
          </Link>
        </Row>
      </main>
    </Layout>
  );
};

export default HomePage;
