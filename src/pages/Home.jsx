import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TextType from '../components/TextType';
import ScrollReveal from '../components/ScrollReveal';
import FadeInOnScroll from '../components/FadelsOnScroll';


const Home = () => {
  // State untuk carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Gambar-gambar untuk carousel (unsplash URLs untuk tema SIA)
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80',
      title: 'Sistem Informasi Akuntansi',
      subtitle: 'Makalah Komprehensif tentang SIA dalam Era Digital'
    },
    {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      title: 'Analisis Data Keuangan',
      subtitle: 'Teknik Analisis Modern dalam Akuntansi Digital'
    },
    {
      url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      title: 'Manajemen Risiko SIA',
      subtitle: 'Identifikasi dan Pengendalian Risiko Sistem'
    },
    {
      url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80',
      title: 'Teknologi dalam Akuntansi',
      subtitle: 'AI, Blockchain, dan Cloud Computing'
    }
  ];
  
  // Fungsi untuk slide berikutnya
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    resetAutoPlay();
  };
  
  // Fungsi untuk slide sebelumnya
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    resetAutoPlay();
  };
  
  // Reset autoplay timer ketika user berinteraksi
  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  
  // Autoplay carousel
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 5000); // Ganti slide setiap 5 detik
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);
  
  // Navigasi ke slide tertentu
  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoPlay();
  };
  
  return (
    <div className="pt-5 overflow-x-hidden w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">

      {/* Hero Section dengan Carousel */}
      <div className="relative w-screen h-[400px] sm:h-[500px] lg:h-[600px] mb-8 sm:mb-12 overflow-hidden">

        {/* Carousel Container */}
        <div className="relative w-full h-full">
          {/* Slides */}
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
              >
                {/* Overlay gradient untuk keterbacaan teks */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
              </div>
              
              {/* Konten Hero */}
              <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg animate-fadeIn">
                  {image.title}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-md animate-fadeIn animation-delay-300">
                  {image.subtitle}
                </p>
                
                {/* Tombol CTA di Hero */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 animate-fadeIn animation-delay-600">
                  <Link 
                    to="/pembahasan/sistem-informasi-akuntansi" 
                    className="inline-flex items-center bg-white text-blue-700 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Mulai Pelajari
                  </Link>
                  <Link 
                    to="/tentang" 
                    className="inline-flex items-center bg-transparent border-2 border-white text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Tentang Makalah
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Slide sebelumnya"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Slide berikutnya"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Indicators/Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Pergi ke slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Auto-play indicator */}
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
              aria-label={isAutoPlaying ? "Hentikan autoplay" : "Mulai autoplay"}
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Konten Utama */}
      <div className="">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 mx-2 sm:mx-0">
          <TextType 

  text={["Kelompok 2", "Ekonomi Syariah"]}

  typingSpeed={75}

  pauseDuration={1500}

  showCursor={true}

  cursorCharacter="|"
  className="text-3xl dark:text-white"

/>
<ol className="space-y-2 text-gray-700 dark:text-gray-300">
  {["WALIMATUS SYAHIDAH","TRI DWI UTAMI","SILVIA ROBBILINA A","SYARIF RIZALDY"].map((nama, i) => (
    <li key={i} className="flex items-center gap-3">
      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
        {i + 1}
      </span>
      {nama}
    </li>
  ))}
</ol>


          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 dark:text-white">Langsung ke Pembahasan</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Akses langsung ke materi inti pembahasan SIA.</p>
              <Link to="/pembahasan/sistem-informasi-akuntansi" className="inline-block bg-green-600 text-white px-3 sm:px-4 py-2 rounded text-sm sm:text-base hover:bg-green-700 transition-colors">
                Pembahasan
              </Link>
            </div>
          </div>
        </div>
        
        {/* Konten SIA */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 mx-2 sm:mx-0">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 dark:text-white">Sistem Informasi Akuntansi</h2>
         <FadeInOnScroll>
          <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base text-justify">
Sistem Informasi Akuntansi (SIA) dipelajari karena memainkan peran penting dalam aktivitas operasional dan pengambilan keputusan perusahaan. Dalam organisasi modern, data keuangan menjadi salah satu aset terpenting yang menentukan keberlangsungan dan arah strategi perusahaan. Proses pencatatan, pengolahan, hingga pelaporan transaksi dalam jumlah besar tidak lagi memungkinkan untuk dilakukan secara manual karena rawan kesalahan, memakan waktu, dan tidak efisien. Oleh sebab itu, SIA hadir untuk mempermudah perusahaan dalam mengolah data keuangan secara cepat, akurat, dan real time sesuai kebutuhan pengguna.

          </p></FadeInOnScroll>
                   <FadeInOnScroll>
          <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base text-justify">
Selain memberikan efisiensi, SIA juga membantu perusahaan beradaptasi dengan perubahan teknologi yang semakin pesat. Saat ini, hampir semua sektor bisnis bergerak menuju digitalisasi, termasuk sistem keuangan dan akuntansi. Setiap perusahaan dituntut untuk memiliki sistem yang mampu mendukung otomatisasi pencatatan transaksi, menciptakan integrasi antar departemen, serta menyediakan laporan keuangan tanpa harus menunggu akhir periode. Dengan memahami SIA, seorang manajer atau akuntan dapat memastikan bahwa perusahaan tidak tertinggal dalam persaingan teknologi dan tetap mampu bersaing di era modern.

          </p></FadeInOnScroll>        
           <FadeInOnScroll>
          <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base text-justify">
Di sisi lain, pengendalian internal yang kuat menjadi alasan kuat mengapa SIA penting dipelajari. SIA dirancang untuk meminimalisir kesalahan, mendeteksi aktivitas mencurigakan, dan mencegah terjadinya kecurangan. Melalui prosedur-prosedur yang terstruktur, otorisasi akses, dan jejak audit digital, perusahaan dapat melakukan pengawasan lebih efektif terhadap transaksi keuangan. Dalam dunia yang semakin penuh risiko, pemahaman mendalam mengenai SIA menjadi keahlian penting bagi akademisi, profesional, dan pelaku usaha.

          </p></FadeInOnScroll>
                   <FadeInOnScroll>
          <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base text-justify">

Mempelajari SIA juga memberikan kemampuan analisis dan pemecahan masalah yang lebih baik. Ketika sistem mengalami gangguan atau ketidaksesuaian data, seorang praktisi SIA dapat menganalisis akar masalah, memahami bagaimana alur transaksi bekerja, dan menentukan langkah perbaikan yang tepat. Dengan demikian, SIA tidak hanya penting dipelajari untuk penggunaan, tetapi juga untuk pengembangan, evaluasi, dan perbaikan sistem sesuai kebutuhan perusahaan.
          </p></FadeInOnScroll>

          
        </div>
        
        
        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mx-2 sm:mx-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">Konsep Dasar</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">Pelajari definisi dan komponen SIA</p>
            <Link to="/pembahasan/sistem-informasi-akuntansi" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm font-medium inline-flex items-center">
              Baca Selengkapnya 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-red-600 dark:text-red-400">Manajemen Risiko</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">Identifikasi dan mitigasi risiko SIA</p>
            <Link to="/pembahasan/risiko-sistem-informasi-akuntansi" className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium inline-flex items-center">
              Baca Selengkapnya 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow hover:-translate-y-1 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Implementasi</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">Contoh penerapan SIA di berbagai industri</p>
            <Link to="/pembahasan/contoh-penerapan-sia" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium inline-flex items-center">
              Baca Selengkapnya 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Custom CSS untuk animasi */}
      <style jsx>{`
        @keyframes fadeIn {
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
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;