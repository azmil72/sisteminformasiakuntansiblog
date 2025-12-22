import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AncamanSistemInformasiAkuntansi = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-40 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section with Animation */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl shadow-lg mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Ancaman terhadap
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mt-2">
              Sistem Informasi Akuntansi
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Analisis Mendalam tentang Berbagai Ancaman terhadap Integritas Sistem Akuntansi Modern
          </p>
        </div>

        {/* Main Content Card */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="p-6 sm:p-8 lg:p-12">
            {/* Definition Card */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Definisi Ancaman SIA</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-semibold text-blue-700">Ancaman terhadap Sistem Informasi Akuntansi</span> adalah segala bentuk potensi yang dapat merusak sistem, mengganggu proses, atau mencuri data. Ancaman ini bisa berasal dari dalam maupun luar organisasi.
                </p>
              </div>
            </div>

            {/* Internal Threats Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Ancaman Internal</h2>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border border-red-200 mb-6">
                <p className="text-gray-700 mb-6">
                  <span className="font-semibold text-red-700">Ancaman internal dianggap lebih berbahaya</span> dibanding ancaman eksternal karena pelakunya memiliki pengetahuan langsung tentang sistem perusahaan.
                </p>
                
                {/* Internal Threats Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Fraud Card */}
                  <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-red-100">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-red-700">Kecurangan Karyawan</h3>
                    <p className="text-gray-600 text-sm mb-3">Tindakan manipulasi data atau pencurian yang dilakukan karyawan dengan sengaja.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Memanipulasi laporan keuangan
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Menghapus transaksi tertentu
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Mengubah nilai transaksi
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Menyalahgunakan aset perusahaan
                      </li>
                    </ul>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <p className="text-xs text-blue-600 font-medium">SIA membantu dengan: Audit trail & pembatasan akses</p>
                    </div>
                  </div>
                  
                  {/* Misuse Card */}
                  <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-orange-100">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-orange-700">Penyalahgunaan Hak Akses</h3>
                    <p className="text-gray-600 text-sm mb-3">Karyawan yang memiliki akses lebih besar dari tugasnya dapat menyalahgunakannya.</p>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-sm text-orange-700 font-medium">Contoh:</p>
                      <p className="text-xs text-orange-600 mt-1">Melihat data gaji seluruh karyawan atau mencuri informasi sensitif</p>
                    </div>
                  </div>
                  
                  {/* Negligence Card */}
                  <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-yellow-100">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-yellow-700">Kelalaian atau Kecerobohan</h3>
                    <p className="text-gray-600 text-sm mb-3">Ancaman yang muncul dari kelalaian karyawan dalam menjalankan prosedur.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        Tidak logout sistem
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        Salah menginput angka
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        Memberikan password kepada orang lain
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        Tidak melakukan backup
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-red-500 font-medium">Hal kecil seperti ini dapat menyebabkan kerusakan data yang besar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* External Threats Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Ancaman Eksternal</h2>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-200">
                {/* External Threats Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Hacking Card */}
                  <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-purple-100">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-purple-700">Hacking & Peretasan</h3>
                    <p className="text-gray-600 text-sm mb-3">Peretas mencoba mengakses sistem perusahaan untuk mencuri data keuangan atau merusak sistem.</p>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-xs text-purple-700 font-medium">Risiko meningkat jika:</p>
                      <p className="text-xs text-purple-600 mt-1">SIA terhubung jaringan internet</p>
                    </div>
                  </div>
                  
                  {/* Malware Card */}
                  <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-red-100">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-red-700">Malware, Virus & Ransomware</h3>
                    <p className="text-gray-600 text-sm mb-3">Program berbahaya yang dapat merusak sistem.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Merusak file
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Mencuri data
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Mengunci sistem
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-red-500 font-medium">Ransomware menjadi ancaman terbesar bagi perusahaan modern</p>
                    </div>
                  </div>
                  
                  {/* Social Engineering Card */}
                  <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-blue-700">Social Engineering</h3>
                    <p className="text-gray-600 text-sm mb-3">Serangan psikologis untuk mendapatkan akses tidak sah.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Penipuan melalui email
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Telepon palsu
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Pesan berisi link berbahaya
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-blue-500 font-medium">Banyak perusahaan besar jatuh karena teknik ini</p>
                    </div>
                  </div>
                  
                  {/* Natural Disaster Card */}
                  <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-green-100">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-green-700">Bencana Alam</h3>
                    <p className="text-gray-600 text-sm mb-3">Kejadian alam yang dapat menghancurkan infrastruktur sistem.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Kebakaran
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Banjir
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Gempa bumi
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-green-500 font-medium">Dapat menghancurkan perangkat keras dan pusat data</p>
                    </div>
                  </div>
                  
                  {/* Unauthorized Access Card */}
                  <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-700">Akses Tidak Sah</h3>
                    <p className="text-gray-600 text-sm mb-3">Pihak luar mendapatkan akses karena lemahnya kontrol keamanan.</p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-700 font-medium">Sering terjadi karena:</p>
                      <p className="text-xs text-gray-600 mt-1">Lemahnya kontrol keamanan fisik dan digital</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System-Based Threats */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Ancaman dari Sistem itu Sendiri</h2>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Bug Card */}
                  <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-700">Kesalahan Program (Bug)</h3>
                    <p className="text-gray-600 text-sm mb-3">Aplikasi SIA yang tidak sempurna dapat menimbulkan masalah:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li className="flex items-start">
                        <span className="text-gray-500 mr-2">•</span>
                        Salah hitung
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-500 mr-2">•</span>
                        Salah jurnal
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-500 mr-2">•</span>
                        Data tidak tersimpan
                      </li>
                    </ul>
                  </div>
                  
                  {/* System Failure Card */}
                  <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-red-100">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-red-700">Kegagalan Sistem</h3>
                    <p className="text-gray-600 text-sm mb-3">Sistem tiba-tiba crash dapat menghentikan seluruh operasional perusahaan.</p>
                    <div className="bg-red-50 p-3 rounded-lg mt-2">
                      <p className="text-xs text-red-600">Dampak langsung: Terhentinya semua proses bisnis</p>
                    </div>
                  </div>
                  
                  {/* System Dependency Card */}
                  <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-blue-700">Ketergantungan pada Sistem</h3>
                    <p className="text-gray-600 text-sm mb-3">Risiko dari ketergantungan tinggi terhadap sistem digital.</p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-blue-700 font-semibold">Konsekuensi serius:</p>
                      <p className="text-xs text-blue-600 mt-1">Jika sistem terganggu, seluruh aktivitas akuntansi berhenti</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 pt-8 border-t border-gray-200">
              <Link 
                to="/pembahasan/risiko-sistem-informasi-akuntansi" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Risiko SIA
              </Link>
              
              <Link 
                to="/pembahasan/aplikasi-sistem-informasi-akuntansi" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Aplikasi SIA
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

export default AncamanSistemInformasiAkuntansi;