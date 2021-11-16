import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
