import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AplikasiSistemInformasiAkuntansi = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('semua');
  
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const aplikasiData = {
    myob: {
      name: 'MYOB Accounting',
      category: 'umkm',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/MYOB_logo.svg/2560px-MYOB_logo.svg.png',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'MYOB (Mind Your Own Business) merupakan aplikasi SIA populer yang digunakan UMKM.',
      keunggulan: [
        'Tampilan sederhana',
        'Cocok untuk pengguna pemula',
        'Mendukung transaksi penjualan, pembelian, persediaan',
        'Dapat membuat laporan keuangan otomatis'
      ],
      kelemahan: ['Tidak cocok untuk perusahaan besar', 'Fitur terbatas']
    },
    accurate: {
      name: 'Accurate Accounting Software',
      category: 'umkm',
      logo: 'https://www.accurate.id/img/logo/accurate.svg',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Accurate adalah aplikasi akuntansi paling banyak digunakan di Indonesia karena fiturnya lengkap.',
      keunggulan: [
        'Mendukung multiuser',
        'Dapat membuat laporan keuangan secara otomatis',
        'Memiliki modul lengkap: kas bank, persediaan, manufaktur, proyek, aset tetap',
        'Tampilan mudah dipahami',
        'Bisa digunakan untuk berbagai industri',
        'Mendukung integrasi dengan POS (Point of Sales)'
      ],
      kelemahan: []
    },
    krishand: {
      name: 'Krishand',
      category: 'pajak',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Krishand_logo.svg/1200px-Krishand_logo.svg.png',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Krishand terkenal sebagai software perpajakan.',
      fungsi: [
        'Mengelola PPh, PPN, dan e-SPT',
        'Mencetak formulir pajak',
        'Mempermudah pelaporan pajak bulanan & tahunan'
      ],
      penggunaan: 'Software ini banyak digunakan oleh konsultan pajak dan perusahaan yang ingin memastikan kepatuhan perpajakan.'
    },
    sap: {
      name: 'SAP ERP',
      category: 'enterprise',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png',
      image: 'https://images.unsplash.com/photo-1642790553124-4c56d74c5a65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'SAP adalah software kelas dunia untuk perusahaan besar (enterprise).',
      modul: [
        'Keuangan',
        'Produksi',
        'SDM',
        'Manajemen persediaan',
        'Pembelian',
        'Penjualan'
      ],
      keunggulan: ['SAP mampu mengolah data secara real time', 'Memiliki sistem keamanan sangat ketat']
    },
    oracle: {
      name: 'Oracle Financial Services',
      category: 'enterprise',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png',
      image: 'https://images.unsplash.com/photo-1544380907-d58c1cfc029c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Software ini digunakan oleh perbankan dan perusahaan multinasional.',
      keunggulan: [
        'Sangat aman',
        'Cocok untuk transaksi skala besar',
        'Data dapat dianalisis untuk prediksi bisnis'
      ]
    },
    odoo: {
      name: 'Odoo',
      category: 'enterprise',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Odoo_Logo.svg/2560px-Odoo_Logo.svg.png',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Odoo merupakan ERP modern yang bersifat open-source.',
      keunggulan: [
        'Bisa dikustomisasi',
        'Mendukung modul akuntansi, persediaan, CRM, HRD',
        'Tampilannya modern',
        'Biaya lebih murah dibanding SAP'
      ]
    },
    jurnal: {
      name: 'Jurnal.id',
      category: 'cloud',
      logo: 'https://www.jurnal.id/wp-content/uploads/2021/12/jurnal-logo-color.svg',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Jurnal.id merupakan aplikasi akuntansi berbasis cloud yang populer di Indonesia.'
    },
    zahir: {
      name: 'Zahir Online',
      category: 'cloud',
      logo: 'https://zahironline.com/images/logo.png',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Zahir Online adalah solusi akuntansi cloud untuk berbagai skala bisnis.'
    },
    quickbooks: {
      name: 'QuickBooks Online',
      category: 'cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Intuit_QuickBooks_logo.svg/2560px-Intuit_QuickBooks_logo.svg.png',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'QuickBooks Online adalah platform akuntansi cloud internasional.'
    },
    xero: {
      name: 'Xero Accounting',
      category: 'cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Xero_software_logo.svg/2560px-Xero_software_logo.svg.png',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Xero adalah aplikasi akuntansi cloud yang populer di tingkat internasional.'
    }
  };

  const cloudApps = ['Jurnal.id', 'Zahir Online', 'QuickBooks Online', 'Xero Accounting'];
  const manfaatSIA = [
    'Mengelola transaksi otomatis',
    'Memantau keuangan real time',
    'Meningkatkan kontrol internal',
    'Mengurangi kesalahan manual',
    'Menyederhanakan proses audit',
    'Mempercepat pembuatan laporan'
  ];

  const filteredApps = Object.values(aplikasiData).filter(app => 
    activeTab === 'semua' ? true : app.category === activeTab
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-green-200 dark:bg-green-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-40 w-60 h-60 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section with Animation */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 rounded-xl shadow-lg mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Aplikasi Sistem Informasi Akuntansi
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mt-2">
              Populer di Indonesia & Internasional
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Analisis Mendalam tentang Berbagai Solusi Software Akuntansi untuk Semua Skala Bisnis
          </p>
        </div>

        {/* Main Content Card */}
        <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="p-6 sm:p-8 lg:p-12">
            {/* Introduction Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pengantar Aplikasi SIA</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-xl border-l-4 border-blue-500 dark:border-blue-400">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Aplikasi Sistem Informasi Akuntansi (SIA) membantu perusahaan untuk mengelola transaksi, memantau keuangan, dan membuat laporan secara otomatis. Dengan aplikasi yang tepat, perusahaan dapat beroperasi lebih efisien, akurat, dan profesional.
                </p>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveTab('semua')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === 'semua' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  Semua Aplikasi
                </button>
                <button
                  onClick={() => setActiveTab('umkm')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === 'umkm' ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  UMKM
                </button>
                <button
                  onClick={() => setActiveTab('enterprise')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === 'enterprise' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  Enterprise
                </button>
                <button
                  onClick={() => setActiveTab('cloud')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === 'cloud' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  Cloud
                </button>
                <button
                  onClick={() => setActiveTab('pajak')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === 'pajak' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  Pajak
                </button>
              </div>

              {/* Aplikasi Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredApps.map((app, index) => (
                  <div 
                    key={index}
                    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* App Image */}
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={app.image} 
                        alt={app.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          app.category === 'umkm' ? 'bg-green-500 text-white' :
                          app.category === 'enterprise' ? 'bg-red-500 text-white' :
                          app.category === 'cloud' ? 'bg-blue-500 text-white' :
                          'bg-yellow-500 text-white'
                        }`}>
                          {app.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-5">
                      {/* App Logo & Name */}
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                          {app.logo ? (
                            <img src={app.logo} alt={`${app.name} logo`} className="w-8 h-8 object-contain" />
                          ) : (
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                            </svg>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{app.name}</h3>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{app.description}</p>
                      
                      {/* Features */}
                      {app.keunggulan && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Keunggulan:</h4>
                          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                            {app.keunggulan.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {app.kelemahan && app.kelemahan.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Kelemahan:</h4>
                          <ul className="text-red-500 dark:text-red-400 text-sm space-y-1">
                            {app.kelemahan.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud Apps Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Aplikasi SIA Berbasis Cloud</h2>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-700">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Cloud Accounting</span> semakin populer karena fleksibel, aman, dan bisa diakses dari mana saja. Keunggulannya:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {cloudApps.map((app, index) => (
                    <div 
                      key={index} 
                      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100 dark:border-blue-800"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{app}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Keunggulan Cloud Accounting:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Tidak perlu instalasi</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Data tersimpan di server cloud (aman dari bencana lokal)</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Real time</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Cocok untuk UMKM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Manfaat SIA Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-600 dark:to-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manfaat Aplikasi SIA Secara Umum</h2>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {manfaatSIA.map((manfaat, index) => (
                    <div 
                      key={index} 
                      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400 font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-800 dark:text-gray-200 font-medium">{manfaat}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-green-200 dark:border-green-700">
                  <p className="text-center text-gray-700 dark:text-gray-300 font-semibold">
                    Dengan aplikasi yang tepat, perusahaan dapat beroperasi lebih efisien, akurat, dan profesional.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link 
                to="/pembahasan/ancaman-sistem-informasi-akuntansi" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-800 dark:hover:from-gray-800 dark:hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Ancaman SIA
              </Link>
              
              <Link 
                to="/pembahasan/peranan-sia" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Peranan SIA
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default AplikasiSistemInformasiAkuntansi;