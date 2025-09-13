export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4 tracking-tight">
            Good
          </h1>
          <h2 className="text-4xl md:text-6xl font-light text-yellow-600 mb-6">
            Morning
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Welcome to your first Next.js application! This is a simple Good Morning page 
            built with modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-colors duration-200">
              <span>🚀 Ready to build amazing things!</span>
            </div>
            
            <div className="inline-flex items-center px-6 py-3 border border-yellow-600 text-base font-medium rounded-md text-yellow-600 bg-white hover:bg-yellow-50 transition-colors duration-200">
              <span>📖 Learn More</span>
            </div>
            
            <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 transition-colors duration-200">
              <span>✨ Get Started</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          <p>Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </div>
  )
}