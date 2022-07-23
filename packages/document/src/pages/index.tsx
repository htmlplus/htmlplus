import type { NextPage } from 'next';

import { Transition } from '@app/components';

const Home: NextPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <Transition name="fade-in" repeat="infinite">
        COMING SOON
      </Transition>
    </div>
  );
};

export default Home;
