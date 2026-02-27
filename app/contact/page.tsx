"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import Gallery from "@/components/Gallery";

export default function ContactPage() {
   const [cardsVisible, setCardsVisible] = useState(false);
   const headingRef = useRef<HTMLHeadingElement | null>(null);
   const cardsRef = useRef<HTMLDivElement | null>(null);
   const tlRef = useRef<gsap.core.Timeline | null>(null);

   useEffect(() => {
      const heading = headingRef.current;
      if (!heading) return;

      if (tlRef.current) tlRef.current.kill();

      // Place heading fixed at dead center, invisible
      gsap.set(heading, {
         position: "fixed",
         top: "50%",
         left: "50%",
         xPercent: -50,
         yPercent: -50,
         scale: 1,
         opacity: 0,
         zIndex: 200,
         margin: 0,
      });

      const tl = gsap.timeline();
      tlRef.current = tl;

      // 1. Fade in at center
      tl.to(heading, {
         opacity: 1,
         duration: 1.0,
         ease: "power2.out",
      })
         // 2. Hold in center
         .to({}, { duration: 1.5 })
         // 3. Glide smoothly to header position (top-left)
         .to(heading, {
            top: "88px",
            left: "40px",
            xPercent: 0,
            yPercent: 0,
            scale: 1,
            duration: 1.6,
            ease: "power3.inOut",
            onComplete: () => {
               gsap.set(heading, { clearProps: "all" });
               heading.style.opacity = "1";
               setCardsVisible(true);
            },
         });

      return () => { tl.kill(); };
   }, []);

   // Animate cards in once visible
   useEffect(() => {
      if (!cardsVisible || !cardsRef.current) return;
      gsap.fromTo(
         cardsRef.current,
         { opacity: 0, y: 30 },
         { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
   }, [cardsVisible]);

   return (
      <main className="relative w-[100vw] h-[100svh] overflow-hidden bg-black text-white">
         {/* Background gallery — never re-init, key is stable */}
         <div className="absolute inset-0 z-0">
            <Gallery />
         </div>

         {/* Light transparent blur overlay — NOT too black */}
         <div className="absolute inset-0 z-10 backdrop-blur-md bg-black/25 transition-all duration-1000" />

         {/* Close button top-right */}
         <div className="absolute top-6 right-6 z-[200]">
            <Link
               href="/"
               className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
            >
               <span className="text-lg leading-none inline-block transition-transform duration-500 group-hover:rotate-90">
                  ✕
               </span>
            </Link>
         </div>

         {/* Main content */}
         <div className="absolute inset-0 z-20 flex flex-col px-10 pt-20 pb-10">

            {/* Heading — GSAP animates from center into this in-flow spot */}
            <div className="w-full max-w-5xl mb-10">
               <h1
                  ref={headingRef}
                  className="text-white text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] leading-[1.15] tracking-tight font-bold text-left whitespace-nowrap"
                  style={{ fontFamily: "'Ballinger Mono', monospace", opacity: 0 }}
               >
                  Welcome! It's great to meet you.
               </h1>
            </div>

            {/* Cards — appear only after heading animation lands */}
            {cardsVisible && (
               <div
                  ref={cardsRef}
                  className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5 pointer-events-auto"
                  style={{ gridAutoRows: "340px", opacity: 0 }}
               >
                  {/* Collaboration Card */}
                  <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col overflow-hidden group cursor-pointer hover:bg-black/70 hover:border-white/20 transition-all duration-500">
                     <div className="flex items-center gap-2 text-[10px] text-[#999] font-mono tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        Collaboration
                     </div>
                     <h3 className="text-white text-xl md:text-2xl font-sans font-medium leading-tight mt-10 mb-auto">
                        I'm interested in working together.
                     </h3>
                     <div className="mt-8">
                        <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500">
                           <span className="text-base transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                        </button>
                     </div>
                  </div>

                  {/* Hiring Card */}
                  <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col overflow-hidden group cursor-pointer hover:bg-black/70 hover:border-white/20 transition-all duration-500">
                     <div className="flex items-center gap-2 text-[10px] text-[#999] font-mono tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        Hiring
                     </div>
                     <h3 className="text-white text-xl md:text-2xl font-sans font-medium leading-tight mt-10 mb-auto">
                        I'd like to join the team.
                     </h3>
                     <div className="mt-8">
                        <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500">
                           <span className="text-base transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                        </button>
                     </div>
                  </div>

                  {/* Anything Else Card */}
                  <div className="bg-black rounded-3xl relative overflow-hidden flex flex-col group cursor-pointer">
                     <div className="absolute inset-0 z-0">
                        <Image
                           src="/assets/img11.png"
                           alt="Contact Person"
                           fill
                           className="object-cover object-center grayscale opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-0" />
                     <div className="relative z-10 p-8 flex flex-col h-full">
                        <div className="flex items-center gap-2 text-[10px] text-white/80 font-mono tracking-widest uppercase drop-shadow-md">
                           <span className="w-1.5 h-1.5 bg-white rounded-full" />
                           Anything else
                        </div>
                        <h3 className="text-white text-xl md:text-2xl font-sans font-medium leading-tight mt-10 mb-auto drop-shadow-lg">
                           Just saying hi.
                        </h3>
                        <div className="flex gap-3 mt-8">
                           <button className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-left transition-all duration-300">
                              <div className="text-[9px] text-white/60 font-mono mb-1.5 tracking-wider">EMAIL</div>
                              <div className="text-[10px] text-white font-mono font-semibold break-all">BOO@PHANTOM.AGENCY</div>
                           </button>
                           <button className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-left transition-all duration-300">
                              <div className="text-[9px] text-white/60 font-mono mb-1.5 tracking-wider">WHATSAPP</div>
                              <div className="text-[10px] text-white font-mono font-semibold">+447982717018</div>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </main>
   );
}
