import { Link } from 'react-router-dom';

const ContohPenerapanSIA = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">2.8 Contoh Penerapan SIA</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Studi Kasus Implementasi SIA</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Penerapan Sistem Informasi Akuntansi dalam praktik nyata menunjukkan bagaimana 
          teori dan konsep SIA diimplementasikan untuk memecahkan masalah bisnis dan 
          meningkatkan efisiensi operasional. Berikut adalah beberapa contoh penerapan 
          SIA di berbagai jenis organisasi.
        </p>
        
        <h2 className="text-2xl font-semibold mb-6 mt-8">Kasus 1: Perusahaan Manufaktur</h2>
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">PT. Industri Elektronik Indonesia</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Tantangan:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Kompleksitas cost accounting</li>
                <li>• Inventory management yang rumit</li>
                <li>• Multiple production lines</li>
                <li>• Integrasi dengan supplier</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Solusi SIA:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Implementasi SAP ERP</li>
                <li>• Real-time cost tracking</li>
                <li>• Automated inventory system</li>
                <li>• EDI dengan supplier</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-white rounded border">
            <h4 className="font-semibold mb-2">Hasil:</h4>
            <p className="text-gray-600">Pengurangan biaya operasional 15%, peningkatan akurasi inventory 98%, dan pengurangan cycle time reporting dari 5 hari menjadi real-time.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 mt-8">Kasus 2: Perusahaan Retail</h2>
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">CV. Retail Modern Chain</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Tantangan:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Multiple store locations</li>
                <li>• High volume transactions</li>
                <li>• Inventory across locations</li>
                <li>• Customer loyalty program</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Solusi SIA:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Cloud-based POS system</li>
                <li>• Centralized accounting</li>
                <li>• Real-time inventory sync</li>
                <li>• Integrated CRM system</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-white rounded border">
            <h4 className="font-semibold mb-2">Hasil:</h4>
            <p className="text-gray-600">Konsolidasi laporan keuangan dari 30 hari menjadi 1 hari, peningkatan customer satisfaction 25%, dan optimasi inventory turnover ratio.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 mt-8">Kasus 3: Organisasi Non-Profit</h2>
        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Yayasan Pendidikan Nusantara</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Tantangan:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Fund accounting requirements</li>
                <li>• Donor reporting obligations</li>
                <li>• Grant management</li>
                <li>• Transparency requirements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Solusi SIA:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Non-profit accounting software</li>
                <li>• Fund tracking system</li>
                <li>• Automated donor reports</li>
                <li>• Online financial dashboard</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-white rounded border">
            <h4 className="font-semibold mb-2">Hasil:</h4>
            <p className="text-gray-600">Peningkatan transparansi keuangan, pengurangan waktu pelaporan donor 60%, dan peningkatan donor retention rate 30%.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 mt-8">Kasus 4: Startup Technology</h2>
        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">TechStart Indonesia</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Tantangan:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Rapid growth scaling</li>
                <li>• Limited accounting resources</li>
                <li>• Investor reporting needs</li>
                <li>• Multi-currency transactions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Solusi SIA:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Cloud accounting platform</li>
                <li>• Automated bank reconciliation</li>
                <li>• Real-time financial dashboard</li>
                <li>• API integration with business apps</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-white rounded border">
            <h4 className="font-semibold mb-2">Hasil:</h4>
            <p className="text-gray-600">Skalabilitas sistem mengikuti pertumbuhan 300%, pengurangan manual work 80%, dan peningkatan investor confidence melalui real-time reporting.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 mt-8">Lessons Learned</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Critical Success Factors</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Strong management commitment</li>
                <li>• Adequate user training</li>
                <li>• Proper change management</li>
                <li>• Realistic timeline dan budget</li>
                <li>• Continuous improvement mindset</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Common Pitfalls</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Underestimating complexity</li>
                <li>• Insufficient user involvement</li>
                <li>• Poor data migration planning</li>
                <li>• Inadequate testing</li>
                <li>• Lack of post-implementation support</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 mt-8">Best Practices Implementation</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Lakukan business process analysis sebelum implementasi</li>
          <li>Pilih solusi yang sesuai dengan ukuran dan kompleksitas organisasi</li>
          <li>Libatkan end-user dalam proses design dan testing</li>
          <li>Implementasikan secara bertahap (phased approach)</li>
          <li>Siapkan comprehensive training program</li>
          <li>Establish clear governance dan support structure</li>
          <li>Monitor dan evaluate performance secara berkelanjutan</li>
        </ul>
        
        <div className="flex justify-between mt-8 pt-6 border-t">
          <Link to="/pembahasan/peranan-sia" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
            ← Peranan SIA
          </Link>
          <Link to="/kesimpulan" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Kesimpulan →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContohPenerapanSIA;