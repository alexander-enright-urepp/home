'use client'

import { useEffect } from 'react'

// Track page view
async function trackPageView() {
  try {
    await fetch('/api/track-view', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page_path: window.location.pathname,
        referrer: document.referrer,
        user_agent: navigator.userAgent,
      }),
    })
  } catch (error) {
    console.error('Failed to track page view:', error)
  }
}

// Track project click
async function trackProjectClick(projectName: string) {
  try {
    await fetch('/api/track-click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        project_name: projectName,
      }),
    })
  } catch (error) {
    console.error('Failed to track click:', error)
  }
}

export default function Home() {
  useEffect(() => {
    trackPageView()
  }, [])

  const handleProjectClick = (projectName: string) => {
    trackProjectClick(projectName)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-black flex flex-col items-center justify-center px-4 py-12">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/ae-logo.png"
          alt="Alexander Enright Companies"
          className="h-60 md:h-72 w-auto object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mt-4 mb-2">
        Alexander Enright Companies
      </h1>
      <p className="text-lg text-gray-300 text-center mb-10">
        Bachelor's of Science in Communications - Arizona State University '13
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full max-w-7xl">
        {/* Card 1 - UREPP */}
        <a
          href="https://urepp.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          onClick={() => handleProjectClick('UREPP')}
        >
          <div className="bg-red-950/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-red-900/80 transition-all duration-300 cursor-pointer h-full min-h-[200px]">
            <img
              src="/urepp-logo.png"
              alt="UREPP"
              className="h-16 w-auto object-contain mb-2"
            />
            <span className="text-lg text-gray-200">UREPP</span>
            <span className="text-sm text-gray-400 mt-1">Sports Technology</span>
          </div>
        </a>

        {/* Card 2 - Franks Angels */}
        <a
          href="https://franks-angels.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          onClick={() => handleProjectClick('Franks Angels')}
        >
          <div className="bg-red-950/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-red-900/80 transition-all duration-300 cursor-pointer h-full min-h-[200px]">
            <img
              src="/fa-logo.png"
              alt="Franks Angels"
              className="h-16 w-auto object-contain mb-2"
            />
            <span className="text-lg text-gray-200">Franks Angels</span>
            <span className="text-sm text-gray-400 mt-1">Non Profit</span>
          </div>
        </a>

        {/* Card 3 - Echo */}
        <a
          href="https://echo-ai-dashboard.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          onClick={() => handleProjectClick('Echo')}
        >
          <div className="bg-red-950/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-red-900/80 transition-all duration-300 cursor-pointer h-full min-h-[200px]">
            <span className="text-5xl font-bold text-white">E</span>
            <span className="text-lg text-gray-200 mt-2">Echo</span>
            <span className="text-sm text-gray-400 mt-1">Social Automation</span>
          </div>
        </a>

        {/* Card 4 - Dream */}
        <a
          href="https://dream-silk.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          onClick={() => handleProjectClick('Dream')}
        >
          <div className="bg-red-950/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-red-900/80 transition-all duration-300 cursor-pointer h-full min-h-[200px]">
            <span className="text-5xl font-bold text-white">D</span>
            <span className="text-lg text-gray-200 mt-2">Dream</span>
            <span className="text-sm text-gray-400 mt-1">Networking Platform</span>
          </div>
        </a>

        {/* Card 5 - Ping */}
        <a
          href="https://ping-nine-tau.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          onClick={() => handleProjectClick('Ping')}
        >
          <div className="bg-red-950/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-red-900/80 transition-all duration-300 cursor-pointer h-full min-h-[200px]">
            <span className="text-5xl font-bold text-white">P</span>
            <span className="text-lg text-gray-200 mt-2">Ping</span>
            <span className="text-sm text-gray-400 mt-1">Personal CRM</span>
          </div>
        </a>

        {/* Card 6 - Home */}
        <a
          href="https://home-app-seven-rho.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          onClick={() => handleProjectClick('Home')}
        >
          <div className="bg-red-950/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-red-900/80 transition-all duration-300 cursor-pointer h-full min-h-[200px]">
            <span className="text-5xl font-bold text-white">H</span>
            <span className="text-lg text-gray-200 mt-2">Home</span>
            <span className="text-sm text-gray-400 mt-1">Links for All</span>
          </div>
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-12 flex flex-wrap justify-center gap-6">
        <a
          href="https://drive.google.com/file/d/1NqXFFxI6A6RILIfCTbgfD_xkXrj8FLoH/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-red-950 hover:text-red-800 transition-colors duration-300"
        >
          Resume
        </a>
        <a
          href="mailto:alexanderrossenright@gmail.com"
          className="text-sm text-red-950 hover:text-red-800 transition-colors duration-300"
        >
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1c2f2yIazadNO9o5b6Cg632x3_rBTZOl9/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-red-950 hover:text-red-800 transition-colors duration-300"
        >
          Pipe Dream
        </a>
        <a
          href="https://account.venmo.com/u/Alexander-Enright"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-red-950 hover:text-red-800 transition-colors duration-300"
        >
          Venmo
        </a>
      </footer>
    </main>
  );
}
