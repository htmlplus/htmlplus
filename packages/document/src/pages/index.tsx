import { useState } from 'react';

import type { NextPage } from 'next';

import '@htmlplus/core/animation/attention-seekers/pulse.js';

import { Animation, Counter, Grid, Icon, Intersection } from '@app/components';
import { Browsers, Header } from '@app/containers';
import { features, frameworks, statistics } from '@app/data';

const Number = ({ value }: any) => {
  const [play, setPlay] = useState(false);
  return (
    <Intersection onChange={(event: any) => event.detail.isIntersecting && setPlay(true)}>
      <Animation name="pulse" play={play} delay={3100}>
        <Counter to={value} duration={2500} play={play} delay={500}></Counter>
      </Animation>
    </Intersection>
  )
}

const Section = ({ children, description, title }: any) => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <p style={{ textAlign: 'center' }}>{description}</p>
      {children}
    </>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <Header />
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
      </Section>
    </>
  );
};

export default Home;
