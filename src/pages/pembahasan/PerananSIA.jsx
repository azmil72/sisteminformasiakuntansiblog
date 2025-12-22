import { Link } from 'react-router-dom';

const PerananSIA = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">2.7 Peranan SIA</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Peranan Strategis SIA dalam Organisasi</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Sistem Informasi Akuntansi memainkan peranan yang sangat vital dalam mendukung 
          operasional dan pengambilan keputusan strategis organisasi. SIA tidak hanya 
          berfungsi sebagai alat pencatatan, tetapi juga sebagai enabler untuk mencapai 
          tujuan bisnis dan competitive advantage.
        </p>
        
        <h2 className="text-2xl font-semibold mb-6 mt-8">Peranan dalam Berbagai Level Organisasi</h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Level Operasional</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Transaction Processing</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Pencatatan transaksi harian</li>
                  <li>• Pemrosesan pembayaran</li>
                  <li>• Pengelolaan inventory</li>
                  <li>• Payroll processing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Operational Control</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Monitoring cash flow</li>
                  <li>• Budget tracking</li>
                  <li>• Cost control</li>
                  <li>• Performance measurement</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Level Manajerial</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Management Reporting</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Financial statements</li>
                  <li>• Variance analysis</li>
                  <li>• Departmental reports</li>
                  <li>• KPI dashboards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Decision Support</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Profitability analysis</li>
                  <li>• Investment evaluation</li>
                  <li>• Resource allocation</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Level Strategis</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Strategic Planning</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Long-term forecasting</li>
                  <li>• Market analysis</li>
                  <li>• Competitive intelligence</li>
                  <li>• Scenario planning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Corporate Governance</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Compliance monitoring</li>
                  <li>• Risk management</li>
                  <li>• Stakeholder reporting</li>
                  <li>• Performance evaluation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 mt-8">Peranan dalam Value Chain</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-semibold mb-2">Procurement</h3>
              <p className="text-sm text-gray-600">Vendor management, purchase orders, invoice processing</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-semibold mb-2">Production</h3>
              <p className="text-sm text-gray-600">Cost accounting, work-in-process tracking, quality control</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-semibold mb-2">Sales</h3>
              <p className="text-sm text-gray-600">Order processing, billing, accounts receivable</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-semibold mb-2">Service</h3>
              <p className="text-sm text-gray-600">Customer support, warranty tracking, service billing</p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 mt-8">Peranan dalam Digital Transformation</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Data Analytics</h3>
            <p className="text-gray-600">Mengubah data akuntansi menjadi business intelligence untuk pengambilan keputusan</p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Process Automation</h3>
            <p className="text-gray-600">Otomatisasi proses rutin untuk meningkatkan efisiensi dan akurasi</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Real-time Reporting</h3>
            <p className="text-gray-600">Penyediaan informasi real-time untuk respon cepat terhadap perubahan bisnis</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 mt-8">Peranan dalam Stakeholder Management</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Investors:</strong> Menyediakan laporan keuangan yang akurat dan transparan</li>
          <li><strong>Regulators:</strong> Memastikan compliance dengan standar akuntansi dan regulasi</li>
          <li><strong>Management:</strong> Mendukung pengambilan keputusan dengan informasi yang relevan</li>
          <li><strong>Employees:</strong> Memfasilitasi proses payroll dan benefit management</li>
          <li><strong>Customers:</strong> Mendukung proses billing dan customer service</li>
          <li><strong>Suppliers:</strong> Mengelola accounts payable dan vendor relationships</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-6 mt-8">Evolusi Peranan SIA</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Peranan SIA terus berkembang dari sekedar sistem pencatatan menjadi strategic business 
          partner. Dengan adopsi teknologi seperti AI, machine learning, dan blockchain, 
          SIA akan semakin berperan dalam predictive analytics, fraud detection, dan 
          automated decision making.
        </p>
        
        <div className="flex justify-between mt-8 pt-6 border-t">
          <Link to="/pembahasan/aplikasi-sistem-informasi-akuntansi" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
            ← Aplikasi SIA
          </Link>
          <Link to="/pembahasan/contoh-penerapan-sia" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Contoh Penerapan →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PerananSIA;