import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aspar İlaç Kozmetik Gıda Sanayi A.Ş</title>
        <meta
          name="description"
          content="Aspar İlaç Kozmetik Gıda Sanayi A.Ş"
        />
        <link rel="icon" href="/A-1.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
