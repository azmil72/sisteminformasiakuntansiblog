import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PerananSIA = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('semua');
  
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const perananData = [
    {
      id: 'akurat',
      title: 'Menghasilkan Informasi Keuangan yang Akurat dan Tepat Waktu',
      description: 'SIA memungkinkan perusahaan untuk mencatat dan mengolah transaksi secara real time sehingga laporan keuangan dapat dihasilkan kapan saja tanpa harus menunggu akhir periode.',
      icon: '📊',
      color: 'from-blue-500 to-blue-600',
      examples: [
        'Laporan laba rugi harian',
        'Laporan penjualan mingguan',
        'Kondisi arus kas real-time',
        'Informasi tanpa proses manual panjang'
      ],
      category: 'informasi'
    },
    {
      id: 'efisiensi',
      title: 'Meningkatkan Efisiensi Operasional',
      description: 'Melalui otomatisasi pencatatan transaksi, SIA mampu mengurangi pekerjaan manual yang memakan waktu.',
      icon: '⚡',
      color: 'from-green-500 to-green-600',
      examples: [
        'Pencatatan jurnal otomatis',
        'Posting ke buku besar dengan klik',
        'Perhitungan pajak terintegrasi',
        'Pengurangan kesalahan administrasi'
      ],
      category: 'operasional'
    },
    {
      id: 'kendali',
      title: 'Mendukung Pengendalian Internal',
      description: 'SIA menyediakan jejak audit (audit trail) yang dapat menelusuri siapa yang melakukan transaksi, kapan dilakukan, dan perubahan apa yang dibuat.',
      icon: '🔒',
      color: 'from-red-500 to-red-600',
      examples: [
        'Audit trail untuk pencegahan fraud',
        'Pembatasan akses dengan password',
        'Sistem otorisasi dan wewenang',
        'Data lebih aman dan terkontrol'
      ],
      category: 'keamanan'
    },
    {
      id: 'keputusan',
      title: 'Membantu Pengambilan Keputusan Manajemen',
      description: 'Informasi yang dihasilkan oleh SIA sangat berguna dalam membantu manajemen mengambil keputusan operasional maupun strategis.',
      icon: '🎯',
      color: 'from-purple-500 to-purple-600',
      examples: [
        'Data persediaan untuk restock',
        'Data piutang untuk kebijakan penagihan',
        'Informasi laba rugi untuk strategi pemasaran',
        'Keputusan berdasarkan data, bukan intuisi'
      ],
      category: 'strategi'
    },
    {
      id: 'transparansi',
      title: 'Meningkatkan Transparansi dan Akuntabilitas',
      description: 'Dengan adanya sistem yang terkomputerisasi, setiap transaksi tercatat secara otomatis dan tidak mudah dimanipulasi.',
      icon: '👁️',
      color: 'from-yellow-500 to-yellow-600',
      examples: [
        'Meningkatkan kepercayaan investor',
        'Auditor dapat memverifikasi data dengan mudah',
        'Kepatuhan terhadap standar akuntansi',
        'Profesionalitas operasional perusahaan'
      ],
      category: 'governance'
    },
    {
      id: 'keamanan-data',
      title: 'Memperkuat Keamanan Data',
      description: 'SIA modern dilengkapi dengan teknologi enkripsi, backup otomatis, dan perlindungan server sehingga data perusahaan lebih aman.',
      icon: '🛡️',
      color: 'from-indigo-500 to-indigo-600',
      examples: [
        'Enkripsi data sensitif',
        'Backup otomatis terintegrasi',
        'Proteksi server dari ancaman',
        'Pemulihan data setelah gangguan'
      ],
      category: 'keamanan'
    },
    {
      id: 'audit',
      title: 'Mempermudah Proses Audit',
      description: 'Auditor membutuhkan informasi yang lengkap dan mudah ditelusuri. SIA menyediakan seluruh catatan transaksi dan dokumen pendukung.',
      icon: '📋',
      color: 'from-teal-500 to-teal-600',
      examples: [
        'Catatan transaksi lengkap',
        'Dokumen pendukung terorganisir',
        'Riwayat perubahan terpantau',
        'Pengurangan biaya dan waktu audit'
      ],
      category: 'compliance'
    },
    {
      id: 'integrasi',
      title: 'Mengintegrasikan Berbagai Fungsi dalam Perusahaan',
      description: 'SIA dapat menghubungkan bagian keuangan dengan bagian lainnya seperti penjualan, pembelian, gudang, produksi, dan HRD.',
      icon: '🔗',
      color: 'from-pink-500 to-pink-600',
      examples: [
        'Penjualan terhubung dengan stok gudang',
        'Pembelian langsung update persediaan',
        'Koordinasi antar departemen optimal',
        'Pengurangan duplikasi pekerjaan'
      ],
      category: 'operasional'
    }
  ];

  const filteredPeranan = perananData.filter(item => 
    activeSection === 'semua' ? true : item.category === activeSection
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-40 w-60 h-60 bg-teal-200 dark:bg-teal-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section with Animation */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-lg mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Peranan Strategis
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mt-2">
              Sistem Informasi Akuntansi
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Analisis Mendalam tentang Fungsi dan Kontribusi SIA dalam Perusahaan Modern
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Peranan SIA dalam Perusahaan</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-blue-500 dark:border-blue-400">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Sistem Informasi Akuntansi (SIA) memiliki peranan yang sangat strategis dalam perusahaan modern. SIA tidak hanya berfungsi sebagai alat pencatatan, tetapi juga sebagai sistem pengelolaan informasi, alat analisis, pengendalian internal, dan pendukung pengambilan keputusan.
                </p>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveSection('semua')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeSection === 'semua' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  Semua Peranan
                </button>
                <button
                  onClick={() => setActiveSection('informasi')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeSection === 'informasi' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  Informasi
                </button>
                <button
                  onClick={() => setActiveSection('operasional')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeSection === 'operasional' ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  Operasional
                </button>
                <button
                  onClick={() => setActiveSection('strategi')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeSection === 'strategi' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  Strategi
                </button>
                <button
                  onClick={() => setActiveSection('keamanan')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeSection === 'keamanan' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  Keamanan
                </button>
              </div>

              {/* Peranan Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {filteredPeranan.map((peranan, index) => (
                  <div 
                    key={peranan.id}
                    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      borderColor: peranan.color.split(' ')[1].replace('to-', '').replace('-600', '-500'),
                      animationDelay: `${index * 100}ms` 
                    }}
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-r ${peranan.color}`}>
                          <span className="text-2xl">{peranan.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{peranan.title}</h3>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mt-1 ${
                            peranan.category === 'informasi' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' :
                            peranan.category === 'operasional' ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400' :
                            peranan.category === 'strategi' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400' :
                            peranan.category === 'keamanan' ? 'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400' :
                            'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400'
                          }`}>
                            {peranan.category.charAt(0).toUpperCase() + peranan.category.slice(1)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {peranan.description}
                      </p>
                      
                      {/* Examples */}
                      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">Contoh Implementasi:</h4>
                        <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                          {peranan.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Summary */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manfaat Utama SIA dalam Perusahaan</h2>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Akurasi</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Data yang tepat dan dapat diandalkan</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Efisiensi</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Penghematan waktu dan biaya</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Kontrol</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Pengendalian internal yang kuat</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Keputusan</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Dukungan pengambilan keputusan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Visualization */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dampak Transformasi melalui SIA</h2>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sebelum SIA</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Proses manual dan lambat</li>
                      <li>• Potensi kesalahan tinggi</li>
                      <li>• Kurang transparansi</li>
                      <li>• Data terfragmentasi</li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Transformasi</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Implementasi Sistem Informasi Akuntansi yang komprehensif
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Setelah SIA</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Otomatisasi proses</li>
                      <li>• Akurasi meningkat</li>
                      <li>• Transparansi penuh</li>
                      <li>• Integrasi data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link 
                to="/pembahasan/aplikasi-sistem-informasi-akuntansi" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-800 dark:hover:from-gray-800 dark:hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Aplikasi SIA
              </Link>
              
              <Link 
                to="/pembahasan/contoh-penerapan-sia" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Contoh Penerapan
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

export default PerananSIA;