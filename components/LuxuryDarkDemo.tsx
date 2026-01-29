"use client";

export function LuxuryDarkDemo() {
  return (
    // CONTAINER: Sets the height and base font settings
    <div className="relative flex h-[600px] w-full flex-col justify-between overflow-hidden bg-[#0f1014] font-sans text-white">
      
      {/* --- INLINE STYLES FOR FONTS & ANIMATION --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500&display=swap');
        
        .font-luxury-serif { font-family: 'Cormorant Garamond', serif; }
        .font-luxury-sans { font-family: 'Montserrat', sans-serif; }
        
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: subtleFloat 6s ease-in-out infinite;
        }
      `}</style>

      {/* --- BACKGROUND IMAGE WITH OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop" 
          alt="Luxury Villa" 
          className="h-full w-full object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-12">
        <div className="font-luxury-serif text-2xl font-semibold tracking-widest uppercase text-white">
          Onyx & Stone
        </div>
        <ul className="hidden gap-8 text-xs font-medium tracking-widest uppercase text-white/80 md:flex">
          <li className="cursor-pointer hover:text-[#D4AF37] transition-colors">Collection</li>
          <li className="cursor-pointer hover:text-[#D4AF37] transition-colors">About</li>
          <li className="cursor-pointer hover:text-[#D4AF37] transition-colors">Private Viewing</li>
        </ul>
        {/* Mobile Menu Line */}
        <div className="md:hidden flex flex-col gap-1.5 w-6">
            <span className="block w-full h-0.5 bg-white"></span>
            <span className="block w-2/3 ml-auto h-0.5 bg-[#D4AF37]"></span>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col items-end justify-between px-8 pb-12 md:flex-row md:px-12">
        
        {/* LEFT: TEXT */}
        <div className="max-w-lg">
          <h1 className="font-luxury-serif text-5xl leading-[0.9] font-light text-white md:text-6xl lg:text-7xl">
            Elevate your <br /> 
            <span className="italic text-[#D4AF37]">lifestyle.</span>
          </h1>
          <p className="font-luxury-sans mt-6 border-l-2 border-[#D4AF37] pl-4 text-sm leading-relaxed text-white/90 md:text-base">
            Discover an exclusive portfolio of modern architectural masterpieces. 
            Where luxury meets tranquility in the heart of the city.
          </p>
          <button className="mt-8 bg-[#D4AF37] px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase text-[#0f1014] transition-transform hover:-translate-y-1 hover:bg-white">
            Schedule a Viewing
          </button>
        </div>

        {/* RIGHT: GLASS CARD (Conversion Element) */}
        <div className="animate-float mt-10 w-full max-w-xs rounded-lg border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:mt-0">
          <span className="mb-2 block text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
            Featured Listing
          </span>
          <h3 className="font-luxury-serif text-3xl text-white">The Azure Villa</h3>
          
          <div className="my-4 flex justify-between border-b border-white/20 pb-4 text-sm text-white/80">
            <span>5 Beds</span>
            <span>6 Baths</span>
            <span>8,500 Sq Ft</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-white">$12,500,000</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-[#D4AF37] hover:text-black cursor-pointer">
              →
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}