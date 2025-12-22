import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const TeknikDokumentasiSistem = () => {
  const mermaidRef = useRef(false);

useEffect(() => {
  const initMermaid = async () => {
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
      securityLevel: 'loose'
    });

    const mermaidElements = document.querySelectorAll('.mermaid');
    mermaidElements.forEach(el => {
      el.removeAttribute('data-processed');  // ⬅ keep only this
    });

    setTimeout(() => {
      window.mermaid.run();
    }, 0);
  };

  initMermaid();
}, []);


  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8 px-2 sm:px-0">2.3 Teknik Dokumentasi Sistem</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mx-2 sm:mx-0">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 dark:text-white">Pentingnya Dokumentasi Sistem</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
Dokumentasi sistem merupakan representasi tertulis atau visual dari bagaimana proses dalam SIA bekerja. Dokumentasi ini membantu analis sistem, auditor, programmer, maupun user untuk memahami aliran data, hubungan antar bagian, serta struktur sistem secara keseluruhan.
        </p>
        
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 mt-6 sm:mt-8 dark:text-white">Contoh Diagram Dokumentasi SIA</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm sm:text-base">Berikut adalah contoh berbagai jenis diagram untuk mendokumentasikan Sistem Informasi Akuntansi pencatatan transaksi penjualan:</p>
        
        <div className="space-y-8">
          {/* Flowchart */}
          <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">1. Flowchart - Proses Transaksi Penjualan</h3>
            <p>Flowchart digunakan untuk menjelaskan proses bisnis dan aliran informasi dengan simbol-simbol standar. Flowchart memudahkan user memahami bagaimana dokumen bergerak dari satu bagian ke bagian lain. Misalnya, flowchart sistem penjualan akan menunjukkan proses mulai dari order pelanggan, pembuatan faktur, pencatatan penjualan, hingga pengiriman barang.</p>
            <div className="bg-white p-4 rounded border overflow-x-auto">
              <div className="mermaid min-w-full" dangerouslySetInnerHTML={{
                __html: `flowchart TD
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
    J --> K[Selesai]`
              }} />
            </div>
          </div>
          
          {/* ERD */}
          <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">2. Entity Relationship Diagram (ERD)</h3>
            <p> DFD adalah alat pemodelan sistem yang digunakan untuk menggambarkan aliran data dalam organisasi. DFD tidak fokus pada proses fisik, tetapi pada bagaimana data bergerak dan diproses. DFD memiliki beberapa level, mulai level konteks sampai level detail yang menggambarkan proses secara rinci.</p>
            <div className="bg-white p-4 rounded border overflow-x-auto">
              <div className="mermaid min-w-full" dangerouslySetInnerHTML={{
                __html: `erDiagram
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
    BARANG ||--o{ DETAIL_TRANSAKSI : terdapat_dalam`
              }} />
            </div>
          </div>
          
          {/* DFD */}
          <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">3. Data Flow Diagram (DFD Level 0)</h3>
            <p>Diagram ini digunakan untuk menggambarkan perpindahan dokumen fisik antar bagian. Banyak perusahaan tradisional masih menggunakan dokumen seperti nota, faktur, bukti kas, dan voucher. Diagram dokumen membantu memetakan jalur dokumen tersebut agar tidak hilang dan dapat dilacak.</p>
            <div className="bg-white p-4 rounded border overflow-x-auto">
              <div className="mermaid min-w-full" dangerouslySetInnerHTML={{
                __html: `flowchart TD
    A[Pelanggan] --> B((1.0 Proses Penjualan))
    B --> C[Data Pelanggan]
    B --> D[Data Transaksi]
    B --> E[Data Barang]
    C --> F[Laporan Penjualan]
    D --> F
    E --> F
    F --> G[Manager]
    B --> H[Nota Penjualan]
    H --> A`
              }} />
            </div>
          </div>
          
          {/* Document Flow */}
          <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">4. Document Flow Diagram</h3>
            <p>ERD digunakan untuk merancang database yang mendukung SIA. ERD menggambarkan entitas seperti pelanggan, transaksi, persediaan, dan hubungan antar entitas tersebut. Dengan database yang terstruktur, perusahaan dapat mengurangi redundansi data dan meningkatkan akurasi sistem.</p>
            <div className="bg-white p-4 rounded border overflow-x-auto">
              <div className="mermaid min-w-full" dangerouslySetInnerHTML={{
                __html: `flowchart TD
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
    L --> M[Buku Besar]`
              }} />
            </div>
          </div>
          
          {/* UML Class Diagram */}
          <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">5. UML Class Diagram</h3>
            <p>Perusahaan modern yang menggunakan aplikasi ERP sering menggunakan UML seperti use case diagram, sequence diagram, dan class diagram untuk memodelkan sistem secara lebih teknis.</p>
            <div className="bg-white p-4 rounded border overflow-x-auto">
              <div className="mermaid min-w-full" dangerouslySetInnerHTML={{
                __html: `classDiagram
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
              }} />
            </div>
          </div>
        </div>
        
        
        <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 pt-6 border-t gap-4">
          <Link to="/pembahasan/pengertian-sia-mendalam" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-center text-sm sm:text-base">
            ← Pengertian SIA
          </Link>
          <Link to="/pembahasan/risiko-sistem-informasi-akuntansi" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center text-sm sm:text-base">
            Risiko SIA →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeknikDokumentasiSistem;