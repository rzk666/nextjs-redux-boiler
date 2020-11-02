/* eslint-disable react/react-in-jsx-scope */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          { /* -- Fonts -- */}
          <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Archivo:700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
