import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
    // Set dark mode by default if no preference is stored
    if (!localStorage.getItem('darkMode')) {
      localStorage.setItem('darkMode', 'true');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-primary transition-colors duration-300">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© {year} Neel Sapariya. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default Layout; 