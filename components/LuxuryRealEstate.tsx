"use client";

export function LuxuryRealEstateDemo() {

  return (
    // CONTAINER: Acts as the "Body" of the mini-site
    <div className="relative flex h-[600px] w-full overflow-hidden bg-[#FAFAFA] text-[#1A1A1A] font-sans antialiased">
      
      {/* --- LEFT PANEL --- */}
      <div className="z-10 flex w-[45%] flex-col justify-between bg-white px-8 py-10 md:px-12">
        {/* Nav */}
        <nav className="flex items-center gap-8">
          <div className="font-serif text-xl font-bold tracking-tight">LUMIÈRE.</div>
          <div className="flex h-4 w-6 cursor-pointer flex-col justify-between">
            <span className="h-[2px] w-full bg-[#1A1A1A]"></span>
            <span className="ml-auto h-[2px] w-[70%] bg-[#1A1A1A]"></span>
            <span className="h-[2px] w-full bg-[#1A1A1A]"></span>
          </div>
        </nav>

        {/* Hero Text */}
        <div className="mt-8">
          <span className="mb-4 block text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
            Architecture & Design
          </span>
          <h1 className="mb-6 font-serif text-5xl leading-tight font-normal text-gray-900 lg:text-6xl">
            Curating <br /> <span className="italic text-gray-400">Sanctuary.</span>
          </h1>

          {/* Interactive Search Bar */}
          <div className="relative mt-8 max-w-sm group">
            <input
              type="text"
              placeholder="Find your residence..."
              className="w-full border-b border-gray-200 bg-transparent py-4 pl-0 pr-12 text-sm outline-none transition-colors focus:border-black"
            />
            <button className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#1A1A1A] text-white transition-all hover:scale-110 hover:bg-gray-600">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="flex gap-12 pt-4">
          <div>
            <h4 className="font-serif text-3xl">140+</h4>
            <p className="mt-1 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Listings</p>
          </div>
          <div>
            <h4 className="font-serif text-3xl">$2.4B</h4>
            <p className="mt-1 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Value</p>
          </div>
        </div>
      </div>

      {/* --- RIGHT PANEL (Image Background) --- */}
      <div className="relative w-[55%] bg-zinc-200">
         {/* Using a standard Next/Image would be ideal, but for the demo we use a div background or img tag */}
        <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
            alt="Luxury Interior"
            className="h-full w-full object-cover"
        />

        {/* Floating Card - The "Pop out" effect */}
        <div 
            className={`absolute bottom-16 -left-12 flex w-64 items-center gap-4 bg-white p-5 shadow-2xl transition-all duration-700 ease-out ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            // Trigger animation on load (or use an IntersectionObserver)
            style={{ animation: 'slideUp 1s forwards 0.5s' }}
        >
          <div className="h-16 w-16 shrink-0 overflow-hidden bg-gray-100">
            <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop" 
                className="h-full w-full object-cover"
                alt="Thumbnail"
            />
          </div>
          <div>
            <h5 className="font-serif text-lg leading-tight">The Glass House</h5>
            <span className="text-xs text-gray-400">Beverly Hills, CA</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}