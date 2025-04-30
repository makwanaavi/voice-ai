import { motion } from 'framer-motion';
import { FaRobot, FaBolt, FaHeadset, FaCogs, FaPhone, FaGlobe } from 'react-icons/fa';

const features = [
  {
    icon: <FaRobot className="text-purple-500 text-3xl" />,
    title: "Natural Voice Conversations",
    desc: "Powered by cutting-edge LLMs for human-like responses."
  },
  {
    icon: <FaCogs className="text-purple-500 text-3xl" />,
    title: "Flexible APIs & SDKs",
    desc: "Easy RESTful APIs + language SDKs for quick integration."
  },
  {
    icon: <FaHeadset className="text-purple-500 text-3xl" />,
    title: "Real-Time Transcription",
    desc: "Streaming STT + TTS with low latency for seamless experience."
  },
  {
    icon: <FaRobot className="text-purple-500 text-3xl" />,
    title: "Custom Voice Flows with AI",
    desc: "Define intents, fallback logic, and actions for customized interactions."
  },
  {
    icon: <FaPhone className="text-purple-500 text-3xl" />,
    title: "Built-in Telephony & SIP Integration",
    desc: "Easily integrate with Twilio, Vonage, and more."
  },
  {
    icon: <FaGlobe className="text-purple-500 text-3xl" />,
    title: "Multilingual Support",
    desc: "Speak your user's language with multilingual capabilities."
  },
];

export default function FeatureCards() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Build Smarter Voice Experiences
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-800 p-8 rounded-xl transition-shadow hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
