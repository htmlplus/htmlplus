import { useState } from 'react';

import type { NextPage } from 'next';
import NextLink from 'next/link';

import '@htmlplus/core/animation/names/attention-seekers/pulse.js';

import { Animation, Button, Grid, Icon, Intersection } from '@app/components';
import { Browsers, Header } from '@app/containers';
import { features, frameworks, statistics } from '@app/data';
import { ROUTES, getPath } from '@app/utils';

const Home: NextPage = () => {
  return (
    <>
      <div
        style={{
          background: 'linear-gradient(165deg, rgba(255,255,255,0) 64%, rgba(238,110,115,1) 100%)',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          textAlign: 'center',
          padding: '1.75rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ width: '100%' }}>
          <Grid justifyContent="center" justifyContentMd="end" gutterX="md">
            <Grid.Item>
              <Button size="sm" link to={getPath(ROUTES.INTRODUCTION_WHAT, {})}>
                <b>{`What\'s HTMLPLUS?`}</b>
              </Button>
            </Grid.Item>
            <Grid.Item>
              <Button size="sm" link to={getPath(ROUTES.INTRODUCTION_WHY, {})}>
                <b>{`Why HTMLPLUS?`}</b>
              </Button>
            </Grid.Item>
          </Grid>
        </div>
        <div style={{ flexGrow: '1' }} />
        <div>
          <div>
            <svg
              style={{ verticalAlign: 'middle' }}
              width={60}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1000 1000"
              enableBackground="new 0 0 1000 1000"
              xmlSpace="preserve"
            >
              <g>
                <path d="M980.8,521.1L783.2,718.5c-12.2,12.2-32,12.2-44.2,0c-12.2-12.2-12.2-31.9,0-44.1L914.6,499L739,323.7c-12.2-12.2-12.2-31.9,0-44.1c12.2-12.2,32-12.2,44.2,0L980.8,477C993.1,489.2,993.1,508.9,980.8,521.1z M332.9,906.5c-9,15.7-28.9,21.1-44.5,12c-15.6-9-20.9-29.1-11.9-44.8L667.1,93.5c9-15.7,28.9-21.1,44.5-12c15.6,9.1,20.9,29.1,11.9,44.8L332.9,906.5z M261,718.5c-12.2,12.2-32,12.2-44.2,0L19.1,521.1C7,508.9,7,489.2,19.1,477l197.7-197.4c12.2-12.2,32-12.2,44.2,0c12.2,12.2,12.2,31.9,0,44.1L85.4,499L261,674.4C273.2,686.6,273.2,706.3,261,718.5z" />
              </g>
            </svg>
            &nbsp; &nbsp;
            <h1 style={{ border: 'none', display: 'inline', verticalAlign: 'middle', padding: 0 }}>HTMLPLUS</h1>
          </div>
          <h1 style={{ border: 'none' }}>The Most Flexible Open Source Web Component Library.</h1>
          <p style={{ maxWidth: '700px', margin: 'auto' }}>
            HTMLPLUS is framework-less and lightweight. It's totally native and developed purely with javascript. All
            HTMLPLUS components are customizable and configurable
          </p>
          <div>
            <NextLink
              href={getPath(ROUTES.COMPONENT_DETAILS, { framework: 'react', component: 'animation' })!}
              passHref
              style={{
                padding: '0.75rem 2rem',
                background: '#ee6e73',
                color: 'white',
                display: 'inline-block',
                margin: '2rem 1rem',
                borderRadius: '4px',
                fontWeight: 700
              }}
            >
              Get Started
            </NextLink>
            <a
              style={{
                padding: '0.75rem 2rem',
                border: 'solid 1px #ee6e73',
                color: '#ee6e73',
                display: 'inline-block',
                margin: '2rem 1rem',
                borderRadius: '4px',
                fontWeight: 700
              }}
              href={getPath(ROUTES.GITHUB_URL, {})}
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <div style={{ flexGrow: '1' }} />
      </div>
      {/* <Header />
      <div style={{ height: '80vh' }}></div>
      <Section title="Browsers" description="TODO">
        <Browsers />
      </Section>
      <Section title="Frameworks" description="TODO">
        {frameworks.map((framework) => (
          <div key={framework.title}>
            <img width="100" src={framework.logo} />
            <h3>{framework.title}</h3>
          </div>
        ))}
      </Section>
      <Section title="Features" description="TODO">
        {features.map((feature) => (
          <div key={feature.title}>
            <Icon name={feature.icon} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </Section>
      <Section title="Statistics" description="TODO">
        <Grid justifyContent="center">
          <Grid.Item>
            Frameworks
            <br />
            <Number value={statistics.frameworks} />
          </Grid.Item>
          <Grid.Item>
            Components
            <br />
            Per Framework: <Number value={statistics.components} />
            <br />
            Total: <Number value={statistics.frameworks * statistics.components} />
          </Grid.Item>
          <Grid.Item>
            Examples
            <br />
            Per Framework: <Number value={statistics.examples} />
            <br />
            Total: <Number value={statistics.frameworks * statistics.examples} />
          </Grid.Item>
        </Grid>
      </Section>
      <Section title="Statistics" description="TODO">
        <Grid justifyContent="center">
          <Grid.Item>
            Dowanloads
            <Number value={statistics.dowanloads} />
          </Grid.Item>
          <Grid.Item>
            Forks
            <Number value={statistics.forks} />
          </Grid.Item>
          <Grid.Item>
            Stars
            <Number value={statistics.stars} />
          </Grid.Item>
        </Grid>
      </Section>
      <Section title="Platforms" description="TODO">
        <Grid justifyContent="center">
          <Grid.Item>
            Web
          </Grid.Item>
          <Grid.Item>
            Mobile
          </Grid.Item>
          <Grid.Item>
            Desktop
          </Grid.Item>
        </Grid>
      </Section>
      <Section title="Categories" description="TODO">
        <Grid justifyContent="center">
          <Grid.Item>
            Containers
          </Grid.Item>
          <Grid.Item>
            Griding System
          </Grid.Item>
          <Grid.Item>
            Popups
          </Grid.Item>
        </Grid>
      </Section> */}
    </>
  );
};

export default Home;

// const Number = ({ value }: any) => {
//   const [play, setPlay] = useState(false);
//   return (
//     <Intersection onChange={(event: any) => event.detail.isIntersecting && setPlay(true)}>
//       <Animation name="pulse" play={play} delay={3100}>
//         <Counter to={value} duration={2500} play={play} delay={500}></Counter>
//       </Animation>
//     </Intersection>
//   );
// };

// const Section = ({ children, description, title }: any) => {
//   return (
//     <>
//       <h2 style={{ textAlign: 'center' }}>{title}</h2>
//       <p style={{ textAlign: 'center' }}>{description}</p>
//       {children}
//     </>
//   );
// };
