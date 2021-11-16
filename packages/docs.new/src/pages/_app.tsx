import React from 'react';
import { applyPolyfills, defineCustomElements } from '@htmlplus/react/loader';
import { AppProps } from 'next/app';
import { Store, StoreContext } from '@app/store';
import '../styles/index.scss';

applyPolyfills().then(() => defineCustomElements());

const store = new Store();

const App: React.FC<AppProps> = (props) => {

  const { Component, pageProps } = props;

  return (
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <Component {...pageProps} />
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

export default App;
