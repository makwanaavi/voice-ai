import { useState, useEffect } from 'react'

const quotes = [
  {
    text: 'We replaced 3 full-time agents with a voice AI bot in 2 weeks.',
    author: 'CTO, HealthTech Startup',
    role: 'CTO'
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          Trusted by Developers
        </h2>

        <div className="relative h-64">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="rounded-xl bg-gray-800 p-8">
                <p className="mb-6 text-2xl italic text-gray-300">
                  "{quote.text}"
                </p>
                <p className="font-bold text-white">{quote.author}</p>
                <p className="text-gray-400">{quote.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`size-3 rounded-full ${
                index === activeIndex ? 'bg-purple-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
