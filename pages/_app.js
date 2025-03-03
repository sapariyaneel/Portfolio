import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import { Component, useState, useEffect } from 'react';
import '../styles/globals.css';

const Layout = dynamic(() => import('../components/Layout'), { 
  ssr: true,
  loading: () => (
    <div className="min-h-screen bg-white dark:bg-primary animate-pulse" />
  )
});

const PageTransition = dynamic(() => import('../components/PageTransition'), {
  ssr: true,
  loading: () => null
});

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
  const [isClient, setIsClient] = useState(false);
  const canonicalUrl = `https://neelsapariya.com${router.asPath}`;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white dark:bg-primary animate-pulse" />
    );
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Favicon Tags */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script strategy="lazyOnload" id="ga-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <ErrorBoundary>
        <Layout>
          <AnimatePresence mode="wait" initial={true}>
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