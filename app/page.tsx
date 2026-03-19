export default function Home() {
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
      <p className="text-xl text-gray-300 text-center mb-10">You get one life</p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Card 1 - UREPP */}
        <a
          href="https://urepp.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="bg-red-950/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-red-900/80 transition-all duration-300 cursor-pointer h-full min-h-[200px]">
            <span className="text-5xl font-bold text-white">U</span>
            <span className="text-lg text-gray-200 mt-2">UREPP</span>
            <span className="text-sm text-gray-400 mt-1">Sports Technology</span>
          </div>
        </a>

        {/* Card 2 - Franks Angels */}
        <a
          href="https://franks-angels.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="bg-red-950/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-red-900/80 transition-all duration-300 cursor-pointer h-full min-h-[200px]">
            <span className="text-5xl font-bold text-white">F</span>
            <span className="text-lg text-gray-200 mt-2">Franks Angels</span>
            <span className="text-sm text-gray-400 mt-1">Non Profit</span>
          </div>
        </a>

        {/* Card 3 - Echo */}
        <a
          href="https://echo-ai-dashboard.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="bg-red-950/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-red-900/80 transition-all duration-300 cursor-pointer h-full min-h-[200px]">
            <span className="text-5xl font-bold text-white">E</span>
            <span className="text-lg text-gray-200 mt-2">Echo</span>
            <span className="text-sm text-gray-400 mt-1">Social Automation</span>
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