import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import * as Constants from "@app/constants";

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <React.StrictMode>
      <Head>
        <title>{Constants.PLATFORM_NAME}</title>

        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" /> */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" /> */}

        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </React.StrictMode>
  );
};

export default App;
