import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ContohPenerapanSIA = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCase, setActiveCase] = useState('retail');
  const [simulationStep, setSimulationStep] = useState(0);
  const [simulationType, setSimulationType] = useState('retail');
  const [erpSimulation, setErpSimulation] = useState('pembelian');
  const [erpData, setErpData] = useState({
    bahanBaku: { nama: 'Bahan Baku X', stok: 100, harga: 50000 },
    produk: { nama: 'Produk Y', stok: 50, hargaJual: 150000 },
    pesanan: { jumlah: 10, status: 'Draft' },
    produksi: { status: 'Belum Dimulai', progress: 0 }
  });

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    setSimulationStep(0);
  }, [simulationType]);

  // Simulasi ERP Functions
  const prosesPembelian = () => {
    setErpData(prev => ({
      ...prev,
      bahanBaku: {
        ...prev.bahanBaku,
        stok: prev.bahanBaku.stok + 50
      }
    }));
    alert('✅ Pembelian berhasil! Stok bahan baku bertambah 50 unit.');
  };

  const prosesProduksi = () => {
    if (erpData.bahanBaku.stok < 20) {
      alert('❌ Stok bahan baku tidak cukup untuk produksi!');
      return;
    }

    setErpData(prev => ({
      ...prev,
      bahanBaku: {
        ...prev.bahanBaku,
        stok: prev.bahanBaku.stok - 20
      },
      produk: {
        ...prev.produk,
        stok: prev.produk.stok + 10
      },
      produksi: {
        status: 'Selesai',
        progress: 100
      }
    }));
    alert('✅ Produksi berhasil! 20 bahan baku diproses menjadi 10 produk jadi.');
  };

  const prosesPenjualan = () => {
    if (erpData.produk.stok < erpData.pesanan.jumlah) {
      alert('❌ Stok produk tidak cukup untuk memenuhi pesanan!');
      return;
    }

    setErpData(prev => ({
      ...prev,
      produk: {
        ...prev.produk,
        stok: prev.produk.stok - prev.pesanan.jumlah
      },
      pesanan: {
        ...prev.pesanan,
        status: 'Terkirim'
      }
    }));
    alert(`✅ Penjualan berhasil! ${erpData.pesanan.jumlah} unit produk terjual.`);
  };

  const resetSimulasi = () => {
    setErpData({
      bahanBaku: { nama: 'Bahan Baku X', stok: 100, harga: 50000 },
      produk: { nama: 'Produk Y', stok: 50, hargaJual: 150000 },
      pesanan: { jumlah: 10, status: 'Draft' },
      produksi: { status: 'Belum Dimulai', progress: 0 }
    });
    setErpSimulation('pembelian');
  };

  const caseStudies = {
    retail: {
      title: 'Perusahaan Dagang (Retail)',
      company: 'SuperMart Indonesia',
      color: 'from-blue-500 to-blue-600',
      description: 'Perusahaan retail seperti minimarket, supermarket, atau toko elektronik sangat bergantung pada SIA yang terintegrasi.',
      challenges: [
        'Pencatatan transaksi harian yang tinggi',
        'Manajemen persediaan multi-lokasi',
        'Pelacakan harga pokok penjualan',
        'Laporan keuangan real-time'
      ],
      simulationSteps: [
        { 
          title: 'Pencatatan Penjualan',
          description: 'Barang discan di kasir menggunakan barcode scanner, sistem mencatat penjualan secara otomatis.',
          icon: '🛒',
          details: ['Mengurangi persediaan', 'Menghitung HPP', 'Mencatat pendapatan']
        },
        { 
          title: 'Pembayaran',
          description: 'Sistem mencatat metode pembayaran dan menambah saldo kas atau bank sesuai transaksi.',
          icon: '💳',
          details: ['Tunai', 'Kartu Debit', 'E-wallet', 'Transfer Bank']
        },
        { 
          title: 'Pengendalian Persediaan',
          description: 'Sistem langsung mengurangi stok dan memberikan peringatan saat mencapai batas minimum.',
          icon: '📦',
          details: ['Auto-reorder', 'Stock Alert', 'Multi-gudang sync']
        },
        { 
          title: 'Laporan Keuangan Otomatis',
          description: 'Pada akhir hari, sistem menghasilkan berbagai laporan tanpa proses manual.',
          icon: '📊',
          details: ['Laporan penjualan harian', 'Laba rugi harian', 'Laporan persediaan', 'Arus kas']
        }
      ],
      benefits: [
        'Pengurangan kesalahan manual',
        'Percepatan pelayanan 60%',
        'Akurasi stok 99%',
        'Laporan real-time'
      ]
    },
    jasa: {
      title: 'Perusahaan Jasa',
      company: 'Konsultan Profesional',
      color: 'from-green-500 to-green-600',
      description: 'Pada perusahaan jasa seperti biro konsultan, bengkel, atau kantor akuntan.',
      challenges: [
        'Tracking pendapatan jasa',
        'Manajemen piutang klien',
        'Pengendalian biaya operasional',
        'Analisis profitabilitas layanan'
      ],
      simulationSteps: [
        { 
          title: 'Pencatatan Jasa',
          description: 'SIA mencatat jasa yang diberikan kepada klien beserta tarifnya.',
          icon: '💼',
          details: ['Timesheet tracking', 'Service categorization', 'Rate management']
        },
        { 
          title: 'Manajemen Piutang',
          description: 'Jika klien belum membayar, sistem otomatis mencatat piutang.',
          icon: '📋',
          details: ['Invoice generation', 'Payment reminders', 'Aging analysis']
        },
        { 
          title: 'Biaya Operasional',
          description: 'Biaya seperti gaji, listrik, dan alat kantor dicatat otomatis.',
          icon: '💰',
          details: ['Automatic expense tracking', 'Budget vs Actual', 'Cost categorization']
        },
        { 
          title: 'Analisis Profitabilitas',
          description: 'Sistem menghasilkan laporan untuk evaluasi kinerja setiap layanan.',
          icon: '📈',
          details: ['Service profitability', 'Client ROI analysis', 'Performance metrics']
        }
      ],
      benefits: [
        'Profitabilitas per layanan terukur',
        'Piutang terkontrol',
        'Biaya operasional optimal',
        'Kepuasan klien meningkat'
      ]
    },
    manufaktur: {
      title: 'Perusahaan Manufaktur',
      company: 'Industri Teknologi Maju',
      color: 'from-purple-500 to-purple-600',
      description: 'Perusahaan manufaktur memiliki proses yang lebih kompleks karena terkait dengan produksi barang.',
      challenges: [
        'Manajemen bahan baku',
        'Tracking work in process',
        'Biaya produksi akurat',
        'Optimasi inventori'
      ],
      simulationSteps: [
        { 
          title: 'Pembelian Bahan Baku',
          description: 'Sistem mencatat pembelian bahan baku dan menambah stok.',
          icon: '📦',
          details: ['Supplier management', 'Quality control', 'Stock level tracking']
        },
        { 
          title: 'Proses Produksi',
          description: 'Saat produksi dimulai, sistem mengurangi bahan baku dan mencatat work in process.',
          icon: '⚙️',
          details: ['Production scheduling', 'Resource allocation', 'Quality monitoring']
        },
        { 
          title: 'Barang Jadi',
          description: 'Setelah selesai, barang jadi dicatat ke stok produk jadi.',
          icon: '✅',
          details: ['Finished goods tracking', 'Warehouse management', 'Quality assurance']
        },
        { 
          title: 'Penjualan & Perhitungan',
          description: 'Sistem mencatat pendapatan, mengurangi stok, dan menghitung HPP.',
          icon: '💰',
          details: ['COGS calculation', 'Sales recording', 'Inventory valuation']
        }
      ],
      benefits: [
        'Biaya produksi akurat',
        'Waste reduction 40%',
        'Production planning optimal',
        'Inventory turnover meningkat'
      ]
    },
    perbankan: {
      title: 'Perusahaan Perbankan',
      company: 'Bank Nasional Indonesia',
      color: 'from-red-500 to-red-600',
      description: 'Bank sangat bergantung pada SIA karena harus mengelola jutaan transaksi setiap hari.',
      challenges: [
        'Real-time transaction processing',
        'Security dan fraud detection',
        'Multi-channel integration',
        'Regulatory compliance'
      ],
      simulationSteps: [
        { 
          title: 'Core Banking',
          description: 'Pencatatan saldo tabungan dan deposito nasabah.',
          icon: '🏦',
          details: ['Customer accounts', 'Balance management', 'Interest calculation']
        },
        { 
          title: 'Multi-Channel Banking',
          description: 'Sistem real-time untuk ATM, mobile banking, dan internet banking.',
          icon: '📱',
          details: ['ATM network', 'Mobile app', 'Internet banking', 'API integration']
        },
        { 
          title: 'Kredit & Pinjaman',
          description: 'Pemantauan kredit, bunga, dan pembayaran pinjaman.',
          icon: '📊',
          details: ['Loan management', 'Credit scoring', 'Payment tracking', 'Risk assessment']
        },
        { 
          title: 'Security & Compliance',
          description: 'Deteksi dini transaksi mencurigakan dan pelaporan regulator.',
          icon: '🔒',
          details: ['Fraud detection', 'Anti-money laundering', 'OJK reporting', 'Audit trail']
        }
      ],
      benefits: [
        'Transaksi real-time',
        'Security tingkat tinggi',
        'Compliance otomatis',
        'Customer experience optimal'
      ]
    },
    pemerintah: {
      title: 'Pemerintahan',
      company: 'Pemerintah Daerah',
      color: 'from-yellow-500 to-yellow-600',
      description: 'Pada instansi pemerintah, SIA digunakan untuk pengelolaan anggaran dan keuangan daerah.',
      challenges: [
        'Anggaran dan realisasi',
        'Transparansi penggunaan dana',
        'Pelaporan keuangan daerah',
        'Pengelolaan dana sosial'
      ],
      simulationSteps: [
        { 
          title: 'Pendapatan Daerah',
          description: 'Mencatat pendapatan daerah dari berbagai sumber.',
          icon: '💰',
          details: ['Pajak daerah', 'Retribusi', 'Dana transfer', 'Pendapatan lain']
        },
        { 
          title: 'Penganggaran',
          description: 'Membuat anggaran dan memonitor realisasi anggaran.',
          icon: '📋',
          details: ['Budget planning', 'Allocation tracking', 'Variance analysis', 'Budget control']
        },
        { 
          title: 'Dana Sosial',
          description: 'Mengelola BOS, bantuan sosial, dan dana desa.',
          icon: '🤝',
          details: ['Fund distribution', 'Beneficiary tracking', 'Usage monitoring', 'Reporting']
        },
        { 
          title: 'Laporan & Transparansi',
          description: 'Membuat laporan keuangan pemerintah daerah.',
          icon: '📄',
          details: ['Financial statements', 'Performance reports', 'Public disclosure', 'Audit readiness']
        }
      ],
      benefits: [
        'Transparansi pengelolaan anggaran',
        'Akuntabilitas meningkat',
        'Pengawasan real-time',
        'Kepatuhan regulasi'
      ]
    }
  };

  const currentCase = caseStudies[activeCase];
  const currentStep = currentCase.simulationSteps[simulationStep];

  const nextStep = () => {
    if (simulationStep < currentCase.simulationSteps.length - 1) {
      setSimulationStep(simulationStep + 1);
    }
  };

  const prevStep = () => {
    if (simulationStep > 0) {
      setSimulationStep(simulationStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-green-200 dark:bg-green-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-40 w-60 h-60 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section dengan Animation */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-blue-500 dark:from-teal-600 dark:to-blue-600 rounded-xl shadow-lg mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Contoh Penerapan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 mt-2">
              Sistem Informasi Akuntansi
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Simulasi ERP dan Studi Kasus Implementasi SIA di Berbagai Jenis Organisasi
          </p>
        </div>

        {/* Main Content Card */}
        <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="p-6 sm:p-8 lg:p-12">
            {/* Introduction Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pengantar Penerapan SIA</h2>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-teal-500 dark:border-teal-400">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Untuk memahami bagaimana Sistem Informasi Akuntansi bekerja dalam praktik, berikut beberapa contoh penerapannya di berbagai jenis perusahaan. Setiap jenis organisasi memiliki kebutuhan dan alur kerja yang berbeda, namun SIA memberikan solusi yang terintegrasi untuk meningkatkan efisiensi dan akurasi.
                </p>
              </div>
            </div>

            {/* ERP Simulation Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Simulasi ERP Sederhana - Perusahaan Manufaktur</h2>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Simulasi ini menunjukkan bagaimana ERP mengintegrasikan proses pembelian, produksi, dan penjualan dalam satu sistem terpadu.
                </p>
                
                {/* ERP Process Flow */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* Pembelian */}
                  <div className={`bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border-2 ${erpSimulation === 'pembelian' ? 'border-orange-500' : 'border-gray-200 dark:border-gray-700'}`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${erpSimulation === 'pembelian' ? 'bg-orange-100 dark:bg-orange-900/50' : 'bg-gray-100 dark:bg-gray-700'}`}>
                        <span className={`text-xl ${erpSimulation === 'pembelian' ? 'text-orange-600 dark:text-orange-400' : 'text-gray-500 dark:text-gray-400'}`}>🛒</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Pembelian</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Bahan Baku:</span>
                        <span className="text-sm font-medium">{erpData.bahanBaku.nama}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Stok Saat Ini:</span>
                        <span className="text-sm font-medium">{erpData.bahanBaku.stok} unit</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Harga/Unit:</span>
                        <span className="text-sm font-medium">Rp {erpData.bahanBaku.harga.toLocaleString()}</span>
                      </div>
                    </div>
                    <button
                      onClick={prosesPembelian}
                      className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition-colors duration-300"
                    >
                      Proses Pembelian (+50 unit)
                    </button>
                  </div>
                  
                  {/* Produksi */}
                  <div className={`bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border-2 ${erpSimulation === 'produksi' ? 'border-blue-500' : 'border-gray-200 dark:border-gray-700'}`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${erpSimulation === 'produksi' ? 'bg-blue-100 dark:bg-blue-900/50' : 'bg-gray-100 dark:bg-gray-700'}`}>
                        <span className={`text-xl ${erpSimulation === 'produksi' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>⚙️</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Produksi</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Status:</span>
                        <span className="text-sm font-medium">{erpData.produksi.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Kebutuhan:</span>
                        <span className="text-sm font-medium">20 bahan baku</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Hasil:</span>
                        <span className="text-sm font-medium">10 produk jadi</span>
                      </div>
                    </div>
                    <button
                      onClick={prosesProduksi}
                      className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition-colors duration-300"
                    >
                      Proses Produksi
                    </button>
                  </div>
                  
                  {/* Penjualan */}
                  <div className={`bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border-2 ${erpSimulation === 'penjualan' ? 'border-green-500' : 'border-gray-200 dark:border-gray-700'}`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${erpSimulation === 'penjualan' ? 'bg-green-100 dark:bg-green-900/50' : 'bg-gray-100 dark:bg-gray-700'}`}>
                        <span className={`text-xl ${erpSimulation === 'penjualan' ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}>💰</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Penjualan</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Produk:</span>
                        <span className="text-sm font-medium">{erpData.produk.nama}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Stok Saat Ini:</span>
                        <span className="text-sm font-medium">{erpData.produk.stok} unit</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Pesanan:</span>
                        <span className="text-sm font-medium">{erpData.pesanan.jumlah} unit</span>
                      </div>
                    </div>
                    <button
                      onClick={prosesPenjualan}
                      className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition-colors duration-300"
                    >
                      Proses Penjualan
                    </button>
                  </div>
                </div>
                
                {/* ERP Dashboard */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Dashboard ERP - Status Real-time</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Inventory Status */}
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">Status Inventori</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Bahan Baku</span>
                            <span className="text-sm font-medium">{erpData.bahanBaku.stok} unit</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${Math.min(100, (erpData.bahanBaku.stok / 150) * 100)}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Produk Jadi</span>
                            <span className="text-sm font-medium">{erpData.produk.stok} unit</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${Math.min(100, (erpData.produk.stok / 100) * 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Transaction Summary */}
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">Ringkasan Transaksi</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Total Bahan Baku:</span>
                          <span className="text-sm font-medium">Rp {(erpData.bahanBaku.stok * erpData.bahanBaku.harga).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Total Produk Jadi:</span>
                          <span className="text-sm font-medium">Rp {(erpData.produk.stok * erpData.produk.hargaJual).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Status Pesanan:</span>
                          <span className={`text-sm font-medium ${erpData.pesanan.status === 'Terkirim' ? 'text-green-600' : 'text-yellow-600'}`}>
                            {erpData.pesanan.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Alur Proses ERP</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Klik tombol untuk menjalankan simulasi proses bisnis
                        </p>
                      </div>
                      <button
                        onClick={resetSimulasi}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                      >
                        Reset Simulasi
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* ERP Benefits */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Keunggulan ERP:</h4>
                    <ul className="text-sm text-blue-600 dark:text-blue-300 space-y-1">
                      <li>• Data real-time antar departemen</li>
                      <li>• Pengurangan duplikasi data</li>
                      <li>• Proses otomatis dan terintegrasi</li>
                      <li>• Laporan keuangan akurat</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Manfaat Bisnis:</h4>
                    <ul className="text-sm text-green-600 dark:text-green-300 space-y-1">
                      <li>• Efisiensi operasional meningkat 30%</li>
                      <li>• Pengurangan kesalahan manual</li>
                      <li>• Pengambilan keputusan lebih cepat</li>
                      <li>• Customer satisfaction meningkat</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Selection */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pilih Jenis Perusahaan</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                {Object.entries(caseStudies).map(([key, study]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveCase(key);
                      setSimulationType(key);
                    }}
                    className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${activeCase === key ? `bg-gradient-to-r ${study.color} text-white shadow-lg transform scale-105` : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-xl mb-1">{study.simulationSteps[0].icon}</span>
                      <span className="text-sm font-semibold">{study.title.split(' ')[0]}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Case Study Overview */}
              <div className={`bg-gradient-to-br ${currentCase.color.replace('from-', 'from-').replace('to-', 'to-')}/10 to-white dark:to-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mb-8 transition-all duration-500`}>
                <div className="flex items-center mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r ${currentCase.color}`}>
                    <span className="text-2xl">{currentCase.simulationSteps[0].icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{currentCase.company}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{currentCase.title}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">{currentCase.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tantangan Utama:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentCase.challenges.map((challenge, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/50 dark:bg-gray-800/50 rounded-full text-sm text-gray-700 dark:text-gray-300">
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Simulation Section */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Simulasi Proses SIA</h2>
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Langkah {simulationStep + 1} dari {currentCase.simulationSteps.length}
                </div>
              </div>
              
              {/* Simulation Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-700">
                <div className={`h-2 bg-gradient-to-r ${currentCase.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r ${currentCase.color}`}>
                      <span className="text-3xl">{currentStep.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{currentStep.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{currentStep.description}</p>
                    </div>
                  </div>
                  
                  {/* Process Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {currentStep.details.map((detail, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
                      >
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-gradient-to-r ${currentCase.color} bg-opacity-20`}>
                            <span className="text-gray-700 dark:text-gray-300 font-bold">{idx + 1}</span>
                          </div>
                          <span className="text-gray-800 dark:text-gray-200">{detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Simulation Navigation */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={prevStep}
                      disabled={simulationStep === 0}
                      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${simulationStep === 0 ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                    >
                      ← Sebelumnya
                    </button>
                    
                    <div className="flex space-x-2">
                      {currentCase.simulationSteps.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSimulationStep(idx)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === simulationStep ? `bg-gradient-to-r ${currentCase.color} scale-125` : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={nextStep}
                      disabled={simulationStep === currentCase.simulationSteps.length - 1}
                      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${simulationStep === currentCase.simulationSteps.length - 1 ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                    >
                      Selanjutnya →
                    </button>
                  </div>
                </div>
              </div>

              {/* Benefits Summary */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Manfaat Penerapan SIA:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {currentCase.benefits.map((benefit, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                        </div>
                        <span className="text-gray-800 dark:text-gray-200">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Perbandingan Penerapan SIA</h2>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700 text-white">
                        <th className="p-4 text-left">Jenis Perusahaan</th>
                        <th className="p-4 text-left">Fokus Utama</th>
                        <th className="p-4 text-left">Teknologi SIA</th>
                        <th className="p-4 text-left">Hasil Utama</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {Object.entries(caseStudies).map(([key, study], idx) => (
                        <tr 
                          key={key}
                          className={`hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${activeCase === key ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                        >
                          <td className="p-4">
                            <div className="flex items-center">
                              <span className="text-xl mr-3">{study.simulationSteps[0].icon}</span>
                              <span className="font-medium text-gray-900 dark:text-white">{study.title}</span>
                            </div>
                          </td>
                          <td className="p-4 text-gray-700 dark:text-gray-300">{study.challenges[0]}</td>
                          <td className="p-4">
                            <div className="flex flex-wrap gap-1">
                              {study.simulationSteps.slice(0, 2).map((step, i) => (
                                <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                                  {step.title.split(' ')[0]}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="p-4 text-gray-700 dark:text-gray-300">{study.benefits[0]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link 
                to="/pembahasan/peranan-sia" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-800 dark:hover:from-gray-800 dark:hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Peranan SIA
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

export default ContohPenerapanSIA;