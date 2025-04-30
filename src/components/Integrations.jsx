import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaGithub, FaCode, FaServer, FaTerminal, FaPlug } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'

// ✅ Import logo images
import twilioLogo from '../assets/logos/twilio.svg'
import zapierLogo from '../assets/logos/zapier.svg'
import openaiLogo from '../assets/logos/openai.svg'
import awsLogo from '../assets/logos/aws.svg'
import stripeLogo from '../assets/logos/stripe.svg'
import shopifyLogo from '../assets/logos/shopify.svg'

// ✅ Add more logos here
const logos = [
  { img: twilioLogo, name: 'Twilio' },
  { img: zapierLogo, name: 'Zapier' },
  { img: openaiLogo, name: 'OpenAI' },
  { img: awsLogo, name: 'AWS' },
  { img: stripeLogo, name: 'Stripe' },
  { img: shopifyLogo, name: 'Shopify' },
  { img: twilioLogo, name: 'Twilio 2' },
  { img: zapierLogo, name: 'Zapier 2' },
  { img: openaiLogo, name: 'OpenAI 2' },
  { img: awsLogo, name: 'AWS 2' }
]

const devTools = [
  {
    icon: <FaGithub className="text-3xl text-purple-400" />,
    title: 'GitHub Repos',
    desc: 'Sample implementations & SDKs with ready-to-use templates'
  },
  {
    icon: <FaTerminal className="text-3xl text-blue-400" />,
    title: 'CLI Tools',
    desc: 'Command line interface for quick setup and management'
  },
  {
    icon: <FaPlug className="text-3xl text-green-400" />,
    title: 'Webhooks',
    desc: 'Real-time event notifications with secure endpoints'
  }
]

export default function Integrations() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container relative z-10 mx-auto px-6">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Plug into Your Stack
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Seamless integration with your existing tools and infrastructure
          </p>
        </div>

        {/* Logos Carousel */}
        <div className="mb-20">
          <Swiper
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 }
            }}
            loop
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
              el: '.logo-pagination',
              bulletClass: 'swiper-pagination-bullet bg-gray-500',
              bulletActiveClass:
                'swiper-pagination-bullet-active !bg-purple-500'
            }}
            spaceBetween={30}
            className="py-8"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="h-12 object-contain"
                  title={logo.name}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="logo-pagination flex justify-center mt-6 gap-2"></div>
        </div>

        {/* Developer Tools Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-gray-300 mb-8">
            <span className="relative inline-block">
              <span className="relative z-10 text-white">
                Developer Tools Ready
              </span>
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {devTools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-900/80 p-8 rounded-xl border border-gray-700 transition-all backdrop-blur-sm shadow-lg hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-800 rounded-lg">{tool.icon}</div>
                  <h4 className="text-xl font-bold text-white">{tool.title}</h4>
                </div>
                <p className="text-gray-300">{tool.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a
              href="#"
              className="flex items-center gap-2 bg-gray-800 hover:bg-purple-600 px-6 py-3 rounded-lg transition-colors group border border-gray-700 hover:border-transparent"
            >
              <FaCode className="text-purple-400 group-hover:text-white transition-colors" />
              <span className="font-medium text-white">API Reference</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-gray-800 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors group border border-gray-700 hover:border-transparent"
            >
              <FaServer className="text-blue-400 group-hover:text-white transition-colors" />
              <span className="font-medium text-white">Webhook Docs</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-gray-800 hover:bg-green-600 px-6 py-3 rounded-lg transition-colors group border border-gray-700 hover:border-transparent"
            >
              <FaTerminal className="text-green-400 group-hover:text-white transition-colors" />
              <span className="font-medium text-white">CLI Docs</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
