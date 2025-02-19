import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import '../styles/globals.css';

const Layout = dynamic(() => import('../components/Layout'), { ssr: true });
const PageTransition = dynamic(() => import('../components/PageTransition'), { ssr: true });

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <PageTransition key={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp; 