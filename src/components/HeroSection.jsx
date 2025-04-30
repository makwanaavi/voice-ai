import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const canvasRef = useRef(null);

  // Animated waveform (simplified)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frameCount = 0;

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#6366f1';
      
      for (let i = 0; i < 100; i++) {
        const amplitude = Math.sin((frameCount * 0.02) + (i * 0.1)) * 30;
        ctx.fillRect(i * 10, 50 + amplitude, 5, 5);
      }
      
      frameCount++;
      requestAnimationFrame(drawWave);
    };

    drawWave();
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold leading-tight font-mono"
          >
            Create Powerful <span className="text-purple-400">Voice Agents</span> with AI — Fast.
          </motion.h1>
          <p className="text-xl text-gray-300">
            A voice AI platform built for developers. Deploy intelligent, human-like voice agents in minutes.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition">
              Start Building
            </button>
            <button className="border border-purple-400 text-purple-400 px-6 py-3 rounded-lg transition hover:bg-purple-900/20">
              Try a Live Call Demo
            </button>
            <button className="text-gray-300 hover:text-white underline underline-offset-4">
              See API Docs
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <canvas 
            ref={canvasRef} 
            width="600" 
            height="100"
            className="w-full h-24"
          />
          <div className="bg-gray-800 p-6 rounded-xl mt-8 shadow-xl">
            {/* Fake window buttons */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-green-400 overflow-x-auto text-sm font-mono">
              {`const agent = new VoiceAgent({\n  language: 'en',\n  intents: ['schedule', 'cancel']\n});`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
