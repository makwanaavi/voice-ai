import { useState } from 'react';

export default function LiveDemo() {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleListen = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscript(transcript);
      // Mock AI response after 1s
      setTimeout(() => {
        setTranscript(prev => prev + "\nAI: I can help with that!");
      }, 1000);
    };

    recognition.start();
    setIsListening(true); 
    recognition.onend = () => setIsListening(false);
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Test a Live Voice Agent
        </h2>
        <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl p-8">
          <div className="h-64 overflow-y-auto mb-6 font-mono text-green-400 whitespace-pre-wrap">
            {transcript || "Press the mic and say something..."}
          </div>
          <button
            onClick={handleListen}
            disabled={isListening}
            className={`flex items-center justify-center mx-auto w-16 h-16 rounded-full ${isListening ? 'bg-red-500' : 'bg-purple-600'} transition-all`}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <p className="text-center mt-4 text-gray-400">
            Try: "Book a demo" or "What's the pricing?"
          </p>
        </div>
      </div>
    </section>
  );
}