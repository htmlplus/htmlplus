import Document, { Head, Html, Main, NextScript } from 'next/document';
import * as Constants from '@app/constants';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

          <title>{Constants.PLATFORM_NAME}</title>

          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" /> */}

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" /> */}

          <link rel="manifest" href="/manifest.json" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-180789652-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-180789652-1');
              `,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

        {/* TODO: global config */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.htmlplus = {
                components: {
                  divider: {
                    properties: {
                      size: 'sm'
                    }
                  }
                }
              }
            `,
          }}
        />
      </Html>
    );
  }
}

export default MyDocument;
