"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Gallery";

export default function ContactPage() {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   return (
      <main className="relative w-[100vw] h-[100svh] overflow-hidden bg-black text-white">
         {/* Background Hero */}
         <div className="absolute inset-0 z-0 bg-black">
            <Gallery />
         </div>

         {/* Overlay (less blur as requested) */}
         <div
            className={`absolute inset-0 z-10 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${mounted ? "backdrop-blur-sm bg-black/40" : "backdrop-blur-none bg-transparent"
               }`}
         ></div>

         <div className="absolute inset-0 z-20 flex flex-col justify-start items-start p-6 sm:p-10 pointer-events-none">

            {/* LET'S TALK text top left */}
            <div className="absolute top-8 sm:top-10 left-6 sm:left-10 z-[101]">
               <div className="text-[10px] text-[#888] tracking-widest font-mono uppercase flex items-center gap-3">
                  <span className="flex items-center justify-center border border-[#555] rounded-full w-4 h-4 text-[8px]">
                     ○
                  </span>
                  LET'S TALK
               </div>
            </div>

            {/* Simple X button on the right to navigate to / */}
            <div className="absolute top-8 sm:top-10 right-6 sm:right-10 z-[101] pointer-events-auto">
               <Link
                  href="/"
                  className={`w-10 h-10 rounded-full border border-[#444] bg-[#111]/80 backdrop-blur-md flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:border-white transition-all duration-500 ease-out ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
                     }`}
               >
                  <span className="text-sm">✕</span>
               </Link>
            </div>

            <div className="w-full h-full pt-16 sm:pt-20 flex flex-col relative">
               {/* Gliding Title - starts from center & smaller, text size is smaller than before */}
               <div className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] origin-bottom-left ${mounted
                     ? "translate-y-0 translate-x-0 scale-100 opacity-100"
                     : "translate-y-[20vh] translate-x-[20vw] scale-75 opacity-0"
                  }`}>
                  <h1 className="text-white text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.2] font-sans tracking-tight font-bold w-full max-w-5xl text-left mt-8">
                     Welcome! It's great to meet you.
                  </h1>
               </div>

               {/* Cards - matching exact requested widths, heights (flex-1, min-h-[360px]), and blur logic without mixing blue */}
               <div className={`mt-10 sm:mt-12 w-full max-w-7xl flex flex-col md:flex-row gap-4 sm:gap-6 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] delay-200 pointer-events-auto ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
                  }`}>

                  {/* Collaboration Card */}
                  <div className="flex-1 bg-[#141414]/90 backdrop-blur-3xl border border-[#333]/40 rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:bg-[#1a1a1a]/95 hover:border-[#555]/50 transition-all duration-500 cursor-pointer flex flex-col min-h-[360px]">
                     <div className="flex items-center gap-3 text-[10px] sm:text-xs text-[#999] font-mono tracking-widest mb-16 uppercase">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        Collaboration
                     </div>
                     <h3 className="text-white text-xl sm:text-2xl font-sans font-medium mb-12 sm:mb-20 leading-tight">
                        I'm interested in working together.
                     </h3>
                     <div className="mt-auto">
                        <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500">
                           <span className="text-sm sm:text-base transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                        </button>
                     </div>
                  </div>

                  {/* Hiring Card */}
                  <div className="flex-1 bg-[#141414]/90 backdrop-blur-3xl border border-[#333]/40 rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:bg-[#1a1a1a]/95 hover:border-[#555]/50 transition-all duration-500 cursor-pointer flex flex-col min-h-[360px]">
                     <div className="flex items-center gap-3 text-[10px] sm:text-xs text-[#999] font-mono tracking-widest mb-16 uppercase">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        Hiring
                     </div>
                     <h3 className="text-white text-xl sm:text-2xl font-sans font-medium mb-12 sm:mb-20 leading-tight">
                        I'd like to join the team.
                     </h3>
                     <div className="mt-auto">
                        <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500">
                           <span className="text-sm sm:text-base transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                        </button>
                     </div>
                  </div>

                  {/* Anything Else Card */}
                  <div className="flex-1 bg-[#111] rounded-3xl relative overflow-hidden flex flex-col justify-between group min-h-[360px]">
                     <div className="absolute inset-0 z-0">
                        <Image
                           src="/assets/img11.png"
                           alt="Contact Person"
                           fill
                           className="object-cover object-center grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105"
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#1a1a1a]/90 z-0"></div>

                     <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col h-full pointer-events-none">
                        <div className="flex items-center gap-3 text-[10px] sm:text-xs text-white/80 font-mono tracking-widest mb-10 uppercase drop-shadow-md">
                           <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                           Anything else
                        </div>
                        <h3 className="text-white text-xl sm:text-2xl font-sans font-medium mb-12 sm:mb-24 leading-tight drop-shadow-lg">
                           Just saying hi.
                        </h3>

                        <div className="flex gap-2 sm:gap-3 w-full mt-auto pointer-events-auto">
                           <button className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4 text-left transition-all duration-300">
                              <div className="text-[8px] sm:text-[10px] text-white/60 font-mono mb-1 md:mb-2 tracking-wider">EMAIL</div>
                              <div className="text-[10px] sm:text-xs text-white font-mono break-all font-semibold max-w-[120px]">BOO@PHANTOM.AGENCY</div>
                           </button>
                           <button className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4 text-left transition-all duration-300">
                              <div className="text-[8px] sm:text-[10px] text-white/60 font-mono mb-1 md:mb-2 tracking-wider">WHATSAPP</div>
                              <div className="text-[10px] sm:text-xs text-white font-mono break-words font-semibold max-w-[120px]">+447982717018</div>
                           </button>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </main>
   );
}
