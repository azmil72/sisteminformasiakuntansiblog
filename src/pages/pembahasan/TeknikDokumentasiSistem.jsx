import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TeknikDokumentasiSistem = () => {
  const [activeDiagram, setActiveDiagram] = useState(null);
  const [diagramContent, setDiagramContent] = useState({});
  const [isMermaidLoaded, setIsMermaidLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  // Initialize Mermaid once when component mounts
  useEffect(() => {
    
    const loadMermaid = async () => {
      if (!window.mermaid) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
        await new Promise((resolve) => {
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }

      window.mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        flowchart: {
          curve: 'basis',
          padding: 20
        },
        er: {
          useMaxWidth: true
        }
      });

      setIsMermaidLoaded(true);
    };

    loadMermaid();
  }, []);

  // Define diagram content
  const diagrams = {
    flowchart: `flowchart TD
    A[Mulai] --> B[Input Data Pelanggan]
    B --> C[Pilih Barang]
    C --> D[Input Jumlah]
    D --> E{Stok Tersedia?}
    E -->|Ya| F[Hitung Total]
    E -->|Tidak| G[Tampilkan Pesan Error]
    G --> C
    F --> H[Simpan Transaksi]
    H --> I[Cetak Nota]
    I --> J[Update Stok]
    J --> K[Selesai]`,

    erd: `erDiagram
    PELANGGAN {
        int id_pelanggan PK
        string nama
        string alamat
        string telepon
        string email
    }
    
    TRANSAKSI {
        int id_transaksi PK
        int id_pelanggan FK
        int id_user FK
        date tanggal
        decimal total_harga
        string status
    }
    
    DETAIL_TRANSAKSI {
        int id_detail PK
        int id_transaksi FK
        int id_barang FK
        int jumlah
        decimal harga_satuan
        decimal subtotal
    }
    
    BARANG {
        int id_barang PK
        string nama_barang
        decimal harga
        int stok
        string kategori
    }
    
    USER {
        int id_user PK
        string username
        string password
        string nama_lengkap
        string role
    }
    
    PELANGGAN ||--o{ TRANSAKSI : melakukan
    USER ||--o{ TRANSAKSI : mencatat
    TRANSAKSI ||--o{ DETAIL_TRANSAKSI : memiliki
    BARANG ||--o{ DETAIL_TRANSAKSI : terdapat_dalam`,

    dfd: `flowchart TD
    A[Pelanggan] --> B((1.0 Proses Penjualan))
    B --> C[Data Pelanggan]
    B --> D[Data Transaksi]
    B --> E[Data Barang]
    C --> F[Laporan Penjualan]
    D --> F
    E --> F
    F --> G[Manager]
    B --> H[Nota Penjualan]
    H --> A`,

    document: `flowchart TD
    A[Order Pelanggan] --> B[Bagian Penjualan]
    B --> C[Cek Stok Barang]
    C --> D{Stok Ada?}
    D -->|Ya| E[Buat Faktur Penjualan]
    D -->|Tidak| F[Backorder]
    E --> G[Kirim ke Gudang]
    G --> H[Siapkan Barang]
    H --> I[Surat Jalan]
    I --> J[Kirim ke Pelanggan]
    J --> K[Terima Pembayaran]
    K --> L[Jurnal Penjualan]
    L --> M[Buku Besar]`,

    uml: `classDiagram
    class Pelanggan {
        -int idPelanggan
        -string nama
        -string alamat
        -string telepon
        +getId() int
        +setNama(string) void
        +getAlamat() string
    }
    
    class Transaksi {
        -int idTransaksi
        -date tanggal
        -decimal totalHarga
        -string status
        +hitungTotal() decimal
        +simpanTransaksi() bool
        +cetakNota() void
    }
    
    class DetailTransaksi {
        -int idDetail
        -int jumlah
        -decimal hargaSatuan
        -decimal subtotal
        +hitungSubtotal() decimal
        +updateJumlah(int) void
    }
    
    class Barang {
        -int idBarang
        -string namaBarang
        -decimal harga
        -int stok
        +cekStok() int
        +updateStok(int) void
        +getHarga() decimal
    }
    
    class User {
        -int idUser
        -string username
        -string password
        -string role
        +login(string, string) bool
        +logout() void
        +validasiAkses() bool
    }
    
    Pelanggan "1" --> "*" Transaksi : melakukan
    User "1" --> "*" Transaksi : mencatat
    Transaksi "1" --> "*" DetailTransaksi : memiliki
    Barang "1" --> "*" DetailTransaksi : terdapat_dalam`
  };

  // Render diagram when activeDiagram changes
  useEffect(() => {
    if (activeDiagram && isMermaidLoaded && window.mermaid) {
      const renderDiagram = async () => {
        try {
          const element = document.querySelector(`.mermaid-${activeDiagram}`);
          if (element) {
            // Clear previous content
            element.innerHTML = '';
            
            // Generate unique ID
            const id = `mermaid-${activeDiagram}-${Date.now()}`;
            
            // Render diagram using modern API
            const { svg } = await window.mermaid.render(id, diagrams[activeDiagram]);
            element.innerHTML = svg;
          }
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error);
          const element = document.querySelector(`.mermaid-${activeDiagram}`);
          if (element) {
            element.innerHTML = '<div class="text-red-500 p-4">Error loading diagram</div>';
          }
        }
      };
      
      // Small delay to ensure DOM is ready
      setTimeout(renderDiagram, 50);
    }
  }, [activeDiagram, isMermaidLoaded]);

  const diagramTypes = [
    {
      id: 'flowchart',
      title: '1. Flowchart - Proses Transaksi Penjualan',
      description: 'Flowchart digunakan untuk menjelaskan proses bisnis dan aliran informasi dengan simbol-simbol standar. Flowchart memudahkan user memahami bagaimana dokumen bergerak dari satu bagian ke bagian lain.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      id: 'erd',
      title: '2. Entity Relationship Diagram (ERD)',
      description: 'ERD digunakan untuk merancang database yang mendukung SIA. ERD menggambarkan entitas seperti pelanggan, transaksi, persediaan, dan hubungan antar entitas tersebut.',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800',
      borderColor: 'border-emerald-200 dark:border-emerald-800'
    },
    {
      id: 'dfd',
      title: '3. Data Flow Diagram (DFD Level 0)',
      description: 'DFD adalah alat pemodelan sistem yang digunakan untuk menggambarkan aliran data dalam organisasi. DFD tidak fokus pada proses fisik, tetapi pada bagaimana data bergerak dan diproses.',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-800',
      borderColor: 'border-amber-200 dark:border-amber-800'
    },
    {
      id: 'document',
      title: '4. Document Flow Diagram',
      description: 'Diagram ini digunakan untuk menggambarkan perpindahan dokumen fisik antar bagian. Banyak perusahaan tradisional masih menggunakan dokumen seperti nota, faktur, bukti kas, dan voucher.',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-violet-50 to-white dark:from-gray-900 dark:to-gray-800',
      borderColor: 'border-violet-200 dark:border-violet-800'
    },
    {
      id: 'uml',
      title: '5. UML Class Diagram',
      description: 'Perusahaan modern yang menggunakan aplikasi ERP sering menggunakan UML seperti use case diagram, sequence diagram, dan class diagram untuk memodelkan sistem secara lebih teknis.',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800',
      borderColor: 'border-indigo-200 dark:border-indigo-800'
    }
  ];

  const handleDiagramClick = (diagramId) => {
    if (activeDiagram === diagramId) {
      setActiveDiagram(null);
    } else {
      setActiveDiagram(diagramId);
    }
  };

  return (
    <div className="mt-20 max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 animate-fadeIn">
      {/* Header with animated gradient */}
              <div className={`text-center mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="inline-flex items-center justify-center p-3 bg-linear-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 rounded-xl shadow-lg mb-4">
<svg
  className="w-8 h-8 text-white"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M9 12h6m-6 4h6M7 4h7l5 5v11a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1z"
  />
</svg>

          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Teknik Dokumentasi Sistem
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mt-2">
              Sistem Informasi Akuntansi
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Analisis Mendalam tentang Berbagai Solusi Software Akuntansi untuk Semua Skala Bisnis
          </p>
        </div>

      {/* Main Content Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-gray-900/30 overflow-hidden transition-all duration-300 hover:shadow-2xl dark:hover:shadow-gray-900/50 mb-10">
        {/* Gradient top border */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
        
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Importance Section */}
          <div className="mb-10 animate-slideUp" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Pentingnya Dokumentasi Sistem</h2>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/30 rounded-xl p-5 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Dokumentasi sistem merupakan representasi tertulis atau visual dari bagaimana proses dalam SIA bekerja. Dokumentasi ini membantu analis sistem, auditor, programmer, maupun user untuk memahami aliran data, hubungan antar bagian, serta struktur sistem secara keseluruhan. Dengan dokumentasi yang baik, perusahaan dapat memastikan konsistensi proses, memudahkan pelatihan karyawan baru, dan meningkatkan efisiensi audit.
              </p>
            </div>
          </div>

          {/* Diagrams Section */}
          <div className="mb-8 animate-slideUp" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Contoh Diagram Dokumentasi SIA</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm sm:text-base lg:text-lg">
              Berikut adalah contoh berbagai jenis diagram untuk mendokumentasikan Sistem Informasi Akuntansi pencatatan transaksi penjualan:
            </p>

            {/* Diagram Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {diagramTypes.map((diagram, index) => (
                <div
                  key={diagram.id}
                  className={`${diagram.bgColor} rounded-xl p-5 border-2 ${diagram.borderColor} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-gray-900/50 group animate-slideUp`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div 
                    className="cursor-pointer"
                    onClick={() => handleDiagramClick(diagram.id)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className={`text-lg font-bold bg-gradient-to-r ${diagram.color} bg-clip-text text-transparent`}>
                        {diagram.title}
                      </h3>
                      <div className={`p-2 rounded-lg ${diagram.bgColor} group-hover:scale-110 transition-transform`}>
                        <svg className={`w-5 h-5 ${activeDiagram === diagram.id ? 'rotate-180' : ''} transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {diagram.description}
                    </p>
                    <div className={`flex items-center text-sm font-medium ${diagram.color.replace('from-', 'text-').replace(' to-', '-400')}`}>
                      <span>{activeDiagram === diagram.id ? 'Sembunyikan Diagram' : 'Tampilkan Diagram'}</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Diagram Display Area */}
            {activeDiagram && (
              <div className="animate-fadeIn mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-1 shadow-lg">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className={`text-lg font-bold ${diagramTypes.find(d => d.id === activeDiagram)?.color.replace('from-', 'text-').replace(' to-', '-400')}`}>
                        {diagramTypes.find(d => d.id === activeDiagram)?.title}
                      </h3>
                      <button
                        onClick={() => setActiveDiagram(null)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Loading State */}
                    {!isMermaidLoaded ? (
                      <div className="flex items-center justify-center p-8">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                          <p className="text-gray-600 dark:text-gray-400">Memuat diagram...</p>
                        </div>
                      </div>
                    ) : (
                      <div className="overflow-x-auto rounded-lg border border-gray-300 dark:border-gray-700 p-4 min-h-[300px] bg-white dark:bg-gray-900">
                        <div className={`mermaid-${activeDiagram} min-w-full flex items-center justify-center`}>
                          {/* Diagram will be rendered here by Mermaid */}
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-300">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Diagram {activeDiagram.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 gap-4 animate-slideUp" style={{ animationDelay: '800ms' }}>
            <Link 
              to="/pembahasan/pengertian-sia-mendalam" 
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white px-6 py-4 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="absolute inset-0 w-3 bg-gradient-to-r from-blue-500/20 to-transparent transition-all duration-300 group-hover:w-full"></div>
              <div className="relative flex items-center justify-center gap-2">
                <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-medium">Pengertian SIA</span>
              </div>
            </Link>
            
            <Link 
              to="/pembahasan/risiko-sistem-informasi-akuntansi" 
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 text-white px-6 py-4 hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 transition-all duration-300 text-center"
            >
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 transition-all duration-300 group-hover:w-full"></div>
              <div className="relative flex items-center justify-center gap-2">
                <span className="font-medium">Risiko SIA</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Add custom animations to global styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animate-slideUp {
          opacity: 0;
          animation: slideUp 0.6s ease-out forwards;
        }

        /* Mermaid diagram styling */
        .mermaid-flowchart,
        .mermaid-erd,
        .mermaid-dfd,
        .mermaid-document,
        .mermaid-uml {
          text-align: center;
          margin: 0 auto;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mermaid-flowchart svg,
        .mermaid-erd svg,
        .mermaid-dfd svg,
        .mermaid-document svg,
        .mermaid-uml svg {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default TeknikDokumentasiSistem;