import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-blue-600 dark:bg-gray-800 text-white shadow-lg transition-all duration-300 ${
      isShrunk ? 'bg-blue-700/95 dark:bg-gray-900/95 backdrop-blur-sm' : ''
    }`}>
      <div className="max-w-full w-full px-4">
        <div className={`flex items-center transition-all duration-300 ${
          isShrunk ? 'py-2' : 'py-4'
        }`}>
          <Link to="/" className="font-bold hover:text-blue-200 dark:hover:text-gray-300 transition-all duration-300">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2 ml-auto">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <button 
              className="flex flex-col space-y-1 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className={`hidden md:flex flex-1 justify-center space-x-6 transition-all duration-300 ${
            isShrunk ? 'text-sm' : 'text-base'
          }`}>
            <Link to="/" className="hover:text-blue-200 dark:hover:text-gray-300 transition-colors">Home</Link>
            <div className="relative group">
              <span className="hover:text-blue-200 dark:hover:text-gray-300 cursor-pointer">Pembahasan</span>
              <div className="absolute top-full left-0 bg-blue-700 dark:bg-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-48">
                <Link to="/pembahasan/pengertian-sia-mendalam" className="block px-4 py-2 hover:bg-blue-800 dark:hover:bg-gray-600 whitespace-nowrap text-sm">Pengertian SIA</Link>
                <Link to="/pembahasan/teknik-dokumentasi-sistem" className="block px-4 py-2 hover:bg-blue-800 dark:hover:bg-gray-600 whitespace-nowrap text-sm">Teknik Dokumentasi</Link>
                <Link to="/pembahasan/risiko-sistem-informasi-akuntansi" className="block px-4 py-2 hover:bg-blue-800 dark:hover:bg-gray-600 whitespace-nowrap text-sm">Risiko SIA</Link>
                <Link to="/pembahasan/ancaman-sistem-informasi-akuntansi" className="block px-4 py-2 hover:bg-blue-800 dark:hover:bg-gray-600 whitespace-nowrap text-sm">Ancaman SIA</Link>
                <Link to="/pembahasan/aplikasi-sistem-informasi-akuntansi" className="block px-4 py-2 hover:bg-blue-800 dark:hover:bg-gray-600 whitespace-nowrap text-sm">Aplikasi SIA</Link>
                <Link to="/pembahasan/peranan-sia" className="block px-4 py-2 hover:bg-blue-800 dark:hover:bg-gray-600 whitespace-nowrap text-sm">Peranan SIA</Link>
                <Link to="/pembahasan/contoh-penerapan-sia" className="block px-4 py-2 hover:bg-blue-800 dark:hover:bg-gray-600 rounded-b-md whitespace-nowrap text-sm">Contoh Penerapan</Link>
              </div>
            </div>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="block py-2 px-4 hover:bg-blue-700 dark:hover:bg-gray-700 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            
            <div className="px-4 py-2">
              <span className="text-blue-200 dark:text-gray-300 font-semibold">Pembahasan:</span>
              <div className="ml-4 mt-2 space-y-1">
                <Link to="/pembahasan/pengertian-sia-mendalam" className="block py-1 px-2 hover:bg-blue-700 dark:hover:bg-gray-700 rounded text-sm transition-colors" onClick={() => setIsMenuOpen(false)}>Pengertian SIA</Link>
                <Link to="/pembahasan/teknik-dokumentasi-sistem" className="block py-1 px-2 hover:bg-blue-700 dark:hover:bg-gray-700 rounded text-sm transition-colors" onClick={() => setIsMenuOpen(false)}>Teknik Dokumentasi</Link>
                <Link to="/pembahasan/risiko-sistem-informasi-akuntansi" className="block py-1 px-2 hover:bg-blue-700 dark:hover:bg-gray-700 rounded text-sm transition-colors" onClick={() => setIsMenuOpen(false)}>Risiko SIA</Link>
                <Link to="/pembahasan/ancaman-sistem-informasi-akuntansi" className="block py-1 px-2 hover:bg-blue-700 dark:hover:bg-gray-700 rounded text-sm transition-colors" onClick={() => setIsMenuOpen(false)}>Ancaman SIA</Link>
                <Link to="/pembahasan/aplikasi-sistem-informasi-akuntansi" className="block py-1 px-2 hover:bg-blue-700 dark:hover:bg-gray-700 rounded text-sm transition-colors" onClick={() => setIsMenuOpen(false)}>Aplikasi SIA</Link>
                <Link to="/pembahasan/peranan-sia" className="block py-1 px-2 hover:bg-blue-700 dark:hover:bg-gray-700 rounded text-sm transition-colors" onClick={() => setIsMenuOpen(false)}>Peranan SIA</Link>
                <Link to="/pembahasan/contoh-penerapan-sia" className="block py-1 px-2 hover:bg-blue-700 dark:hover:bg-gray-700 rounded text-sm transition-colors" onClick={() => setIsMenuOpen(false)}>Contoh Penerapan</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;