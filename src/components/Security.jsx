// components/Security.jsx
import gdpr from '../assets/logos/gdpr.svg'
import sco2 from '../assets/logos/soc2.svg'

export default function Security() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Enterprise-Grade Reliability
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {/* Uptime SLA */}
          <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-md  transition-transform hover:scale-105">
            <div className="text-5xl font-bold text-purple-500 mb-3">
              99.99%
            </div>
            <p className="text-gray-300">Uptime SLA</p>
          </div>

          {/* Compliance */}
          <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-md  transition-transform hover:scale-105">
            <div className="flex justify-center items-center gap-6 mb-4">
              <img src={gdpr} alt="GDPR" className="h-12 object-contain" />
              <img src={sco2} alt="SOC 2" className="h-12 object-contain" />
            </div>
            <p className="text-gray-300">Compliance Certifications</p>
          </div>

          {/* Encryption */}
          <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-md  transition-transform hover:scale-105">
            <div className="text-5xl font-bold text-green-500 mb-3">
              256-bit
            </div>
            <p className="text-gray-300">End-to-End Encryption</p>
          </div>
        </div>
      </div>
    </section>
  )
}
