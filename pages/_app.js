import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Component } from 'react';
import '../styles/globals.css';

const Layout = dynamic(() => import('../components/Layout'), { ssr: true });
const PageTransition = dynamic(() => import('../components/PageTransition'), { ssr: true });

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-primary text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <pre className="text-red-400">{this.state.error?.message}</pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function MyApp({ Component, pageProps, router }) {
  const canonicalUrl = `https://neelsapariya.com${router.asPath}`; // Replace with your domain

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <ErrorBoundary>
        <Layout>
          <AnimatePresence mode="wait">
            <PageTransition key={router.route}>
              <Component {...pageProps} />
            </PageTransition>
          </AnimatePresence>
        </Layout>
      </ErrorBoundary>
    </>
  );
}

export default MyApp; 