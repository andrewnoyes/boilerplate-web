import Head from 'next/head';
import { siteConfig } from '../utils';

export const AppHead = () => {
  return (
    <Head>
      <title>{siteConfig.name}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="description" content={siteConfig.description} />
      <meta name="image" content={siteConfig.logo} />
      <meta property="og:title" content={siteConfig.name} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:image" content={siteConfig.logo} />
      <meta property="og:type" content="website" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
  );
};
