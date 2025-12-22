const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 sm:py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Sistem Informasi Akuntansi</h3>
            <p className="text-sm sm:text-base text-gray-300">Makalah tentang konsep dan implementasi sistem informasi akuntansi dalam organisasi modern.</p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/pembahasan/pengertian-sia-mendalam" className="hover:text-white transition-colors">Pembahasan</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2025 Sistem Informasi Akuntansi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;