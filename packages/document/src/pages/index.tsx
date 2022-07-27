import { useState } from 'react';

import type { NextPage } from 'next';

import '@htmlplus/core/animation/attention-seekers/pulse.js';

import { Animation, Counter, Intersection } from '@app/components';

const Home: NextPage = () => {
  const [play, setPlay] = useState(false);
  return (
    // TODO
    // <div style={{ textAlign: 'center', fontSize: '3rem' }}>
    //   <p style={{ height: '200vh' }}></p>
    //   <Intersection onChange={(event: any) => event.detail.isIntersecting && setPlay(true)}>
    //     <Animation name="pulse" play={play} delay={3100}>
    //       <Counter to={1500} duration={2500} play={play} delay={500}></Counter>
    //     </Animation>
    //   </Intersection>
    //   <p style={{ height: '200vh' }}></p>
    // </div>
    <div style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <Animation name="fade-in" iterations={Infinity}>
        COMING SOON
      </Animation>
    </div>
  );
};

export default Home;
