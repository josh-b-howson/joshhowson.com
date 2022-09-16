import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;900&display=swap" rel="stylesheet" />
        <meta name="color-scheme" content="dark light"></meta>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6GFT8FSH33"></script>
      </Head>
      <body>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-6GFT8FSH33');
            `}} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
