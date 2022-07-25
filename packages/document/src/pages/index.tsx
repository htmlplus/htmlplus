import type { NextPage } from 'next';

import { Animation } from '@app/components';

const Home: NextPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <Animation name="fade-in" iterations={Infinity}>
        COMING SOON
      </Animation>
    </div>
  );
};

export default Home;
