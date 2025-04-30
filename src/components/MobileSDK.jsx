export default function MobileSDK() {
    return (
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Voice AI in Your Mobile Apps
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Add voice capabilities to iOS/Android with just a few lines of code.
            </p>
            
            <div className="bg-gray-900 p-6 rounded-xl max-w-md">
              <pre className="text-green-400 text-sm overflow-x-auto">
                {`// Android (Kotlin)\nVoiceSDK.init("YOUR_KEY")\n\n// iOS (Swift)\nVoiceAgent.start(with: "YOUR_KEY")`}
              </pre>
            </div>
            
            <button className="mt-8 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium">
              Download Mobile SDKs
            </button>
          </div>
          
         
        </div>
      </section>
    );
  }