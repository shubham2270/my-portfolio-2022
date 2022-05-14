import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.scss';

import Layout from 'src/components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  console.log(router);
  return (
    <Layout currentPath={router.asPath}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
