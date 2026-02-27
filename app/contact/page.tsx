"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import Gallery from "@/components/Gallery";

export default function ContactPage() {
   const [mounted, setMounted] = useState(false);
   const headingRef = useRef<HTMLHeadingElement | null>(null);
   const overlayRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      setMounted(true);

      const t = setTimeout(() => {
         const overlay = overlayRef.current;
         const target = headingRef.current;
         if (!overlay || !target) return;

         // Ensure overlay is strictly centered initially
         overlay.style.display = "block";
         overlay.style.opacity = "1";
         overlay.style.transform = "translate(-50%,-50%) scale(1)";
         overlay.style.left = "50%";
         overlay.style.top = "50%";

         target.style.opacity = "0";

         const targetRect = target.getBoundingClientRect();
         const overlayRect = overlay.getBoundingClientRect();

         const overlayCenterX = overlayRect.left + overlayRect.width / 2;
         const overlayCenterY = overlayRect.top + overlayRect.height / 2;
         const targetCenterX = targetRect.left + targetRect.width / 2;
         const targetCenterY = targetRect.top + targetRect.height / 2;

         const dx = targetCenterX - overlayCenterX;
         const dy = targetCenterY - overlayCenterY;
         const scale = targetRect.width / overlayRect.width || 1;

         gsap.set(overlay, { x: 0, y: 0, scale: 1, opacity: 1 });

         // Wait centered before smoothly gliding
         gsap.to(overlay, {
            delay: 0.8,
            duration: 1.2,
            x: dx,
            y: dy,
            scale,
            ease: "power3.inOut",
            onComplete: () => {
               target.style.transition = "opacity 120ms";
               target.style.opacity = "1";
               gsap.to(overlay, {
                  duration: 0.18,
                  opacity: 0,
                  onComplete: () => { overlay.style.display = "none"; }
               });
            },
         });
      }, 50);

      return () => clearTimeout(t);
   }, []);

   return (
      <main className="relative w-[100vw] h-[100svh] overflow-hidden bg-black text-white">
         <div className="absolute inset-0 z-0 bg-black">
            <Gallery />
         </div>

         {/* Animating centered overlay */}
         <div
            ref={overlayRef}
            style={{
               position: "fixed",
               left: "50%",
               top: "50%",
               transform: "translate(-50%,-50%)",
               pointerEvents: "none",
               zIndex: 110,
               display: "none",
               whiteSpace: "nowrap",
            }}
            className="text-white leading-[1.1] font-ballinger-mono text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5vw] font-bold"
         >
            Welcome! It's great to meet you.
         </div>

         <div
            className={`absolute inset-0 z-10 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${mounted ? "backdrop-blur-3xl bg-black/60" : "backdrop-blur-none bg-transparent"
               }`}
         ></div>

         <div className="absolute inset-0 z-20 flex flex-col justify-start items-center p-6 sm:p-10 pointer-events-none">

            <div className="absolute top-8 sm:top-10 right-6 sm:right-10 z-[101] pointer-events-auto">
               <Link
                  href="/"
                  className={`w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white/70 hover:bg-white/30 hover:text-white hover:border-white transition-all duration-500 hover:rotate-90 ease-out ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
                     }`}
               >
                  <span className="text-xl leading-none">✕</span>
               </Link>
            </div>

            <div className="w-full h-full pt-16 sm:pt-20 flex flex-col items-center relative z-[105]">
               <div className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] w-full max-w-5xl ${mounted ? "opacity-100" : "opacity-0"
                  }`}>
                  <h1
                     ref={headingRef}
                     className="text-white text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5vw] leading-[1.1] font-ballinger-mono tracking-tight font-bold w-full text-left"
                  >
                     Welcome! It's great to meet you.
                  </h1>
               </div>

               <div className={`mt-12 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] delay-[1000ms] pointer-events-auto ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
                  }`}>

                  {/* Collaboration Card */}
                  <div className="aspect-square flex-1 w-full max-w-[400px] bg-black/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:bg-black/70 transition-all duration-500 cursor-pointer flex flex-col">
                     <div className="flex items-center gap-3 text-[10px] sm:text-xs text-[#999] font-mono tracking-widest mb-16 uppercase">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        Collaboration
                     </div>
                     <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-sans font-medium mb-auto leading-tight">
                        I'm interested in working together.
                     </h3>
                     <div className="mt-8">
                        <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500">
                           <span className="text-sm sm:text-base transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                        </button>
                     </div>
                  </div>

                  {/* Hiring Card */}
                  <div className="aspect-square flex-1 w-full max-w-[400px] bg-black/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:bg-black/70 transition-all duration-500 cursor-pointer flex flex-col">
                     <div className="flex items-center gap-3 text-[10px] sm:text-xs text-[#999] font-mono tracking-widest mb-16 uppercase">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        Hiring
                     </div>
                     <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-sans font-medium mb-auto leading-tight">
                        I'd like to join the team.
                     </h3>
                     <div className="mt-8">
                        <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500">
                           <span className="text-sm sm:text-base transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                        </button>
                     </div>
                  </div>

                  {/* Anything Else Card */}
                  <div className="aspect-square flex-1 w-full max-w-[400px] bg-black rounded-3xl relative overflow-hidden flex flex-col justify-between group">
                     <div className="absolute inset-0 z-0">
                        <Image
                           src="/assets/img11.png"
                           alt="Contact Person"
                           fill
                           className="object-cover object-center grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105"
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-0"></div>

                     <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col h-full pointer-events-none">
                        <div className="flex items-center gap-3 text-[10px] sm:text-xs text-white/80 font-mono tracking-widest mb-10 uppercase drop-shadow-md">
                           <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                           Anything else
                        </div>
                        <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-sans font-medium mb-auto leading-tight drop-shadow-lg">
                           Just saying hi.
                        </h3>

                        <div className="flex gap-2 sm:gap-3 w-full mt-8 pointer-events-auto">
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
