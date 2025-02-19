import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import '../styles/globals.css';

const Layout = dynamic(() => import('../components/Layout'), { ssr: true });
const PageTransition = dynamic(() => import('../components/PageTransition'), { ssr: true });

function MyApp({ Component, pageProps, router }) {
  const canonicalUrl = `https://neelsapariya.com${router.asPath}`; // Replace with your domain

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <PageTransition key={router.route}>
            <Component {...pageProps} />
          </PageTransition>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp; 