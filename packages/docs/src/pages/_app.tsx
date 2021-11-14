import React from 'react';
import { applyPolyfills, defineCustomElements } from '@htmlplus/react/loader';
import { observer } from 'mobx-react-lite';
import { AppProps } from 'next/app';
import Head from 'next/head';
import * as Constants from '@app/constants';
import { useStore } from '@app/hooks';
import { LayoutError, LayoutDefault } from '@app/layouts';
import { Store, StoreContext } from '@app/store';
import '../styles/index.scss';

const store = new Store();

applyPolyfills().then(() => defineCustomElements());

const Layout: React.FC = observer((props) => {

  const { children } = props;

  const store = useStore();

  if (store.ui.layout === 'error') return <LayoutError>{children}</LayoutError>;

  if (store.ui.layout === 'default') return <LayoutDefault>{children}</LayoutDefault>;

  return <>{children}</>;
});

const App: React.FC<AppProps> = (props) => {

  const { Component, pageProps } = props;

  return (
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <Layout>
          <Head>
            <title>{Constants.PLATFORM_NAME}</title>

            <link rel="icon" href="/favicon.ico" />
            {/* <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" /> */}

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
            /> */}

            <link rel="manifest" href="/manifest.json" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

export default App;
