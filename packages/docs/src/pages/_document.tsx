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

        {/* TODO */}
        <body style={{ visibility: 'hidden' }}>
          <Main />
          <NextScript />
        </body>

        {/* TODO */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.body.style.visibility = 'hidden';
              setInterval(function() {
                if(!document.querySelector('.hydrated')) return;
                document.body.style.visibility = null;
                clearInterval(this);
              }, 100);
            `,
          }}
        />
      </Html>
    );
  }
}

export default MyDocument;
