"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

interface LetsTalkModalProps {
   isOpen: boolean;
   onClose: () => void;
}

export default function LetsTalkModal({ isOpen, onClose }: LetsTalkModalProps) {
   const [mounted, setMounted] = useState(false);
   const [cardsVisible, setCardsVisible] = useState(false);
   const headingRef = useRef<HTMLHeadingElement>(null);
   const cardsRef = useRef<HTMLDivElement>(null);
   const tlRef = useRef<gsap.core.Timeline | null>(null);
   const router = useRouter();

   useEffect(() => {
      if (isOpen) {
         setMounted(true);
         setCardsVisible(false);
      } else {
         setCardsVisible(false);
         const t = setTimeout(() => setMounted(false), 700);
         return () => clearTimeout(t);
      }
   }, [isOpen]);

   useEffect(() => {
      if (!mounted || !isOpen) return;
      const heading = headingRef.current;
      if (!heading) return;

      if (tlRef.current) tlRef.current.kill();

      // Reset heading: position fixed dead center, invisible
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

      // 1. Fade in at center slowly
      tl.to(heading, {
         opacity: 1,
         duration: 1.0,
         ease: "power2.out",
      })
         // 2. Hold in center for 1.5s
         .to({}, { duration: 1.5 })
         // 3. Slowly glide up-left to final header position
         .to(heading, {
            top: "80px",
            left: "40px",
            xPercent: 0,
            yPercent: 0,
            scale: 1,
            duration: 1.6,
            ease: "power3.inOut",
            onComplete: () => {
               // Snap to natural in-flow position without a visible jump
               gsap.set(heading, { clearProps: "all" });
               heading.style.opacity = "1";
               setCardsVisible(true);
            },
         });

      return () => { tl.kill(); };
   }, [mounted, isOpen]);

   // Animate cards in after they become visible
   useEffect(() => {
      if (!cardsVisible || !cardsRef.current) return;
      gsap.fromTo(
         cardsRef.current,
         { opacity: 0, y: 30 },
         { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
   }, [cardsVisible]);

   const handleClose = () => {
      onClose();
      router.push("/");
   };

   if (!mounted) return null;

   return (
      <div
         className={`fixed inset-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen
            ? "opacity-100 backdrop-blur-md bg-black/30"
            : "opacity-0 backdrop-blur-none bg-transparent pointer-events-none"
            }`}
      >
         {/* Close button — top right, frosted, rotates on hover */}
         <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-[300] w-12 h-12 rounded-full flex items-center justify-center
          bg-white/10 backdrop-blur-md border border-white/20
          hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
            aria-label="Close"
         >
            <span className="text-white text-lg font-light leading-none inline-block transition-transform duration-500 ease-in-out group-hover:rotate-90">
               ✕
            </span>
         </button>

         {/* Layout container */}
         <div className="w-full h-full flex flex-col px-10 pt-16 pb-10 items-center">

            {/* LET'S TALK label + Heading */}
            <div className="w-full max-w-6xl mb-10">
               <div className="flex items-center gap-2 text-[10px] text-white/50 font-mono tracking-widest uppercase mb-3">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                  Let's Talk
               </div>
               <h1
                  ref={headingRef}
                  className="text-white text-[1.8rem] sm:text-[2.4rem] md:text-[3rem] leading-[1.15] tracking-tight font-bold text-left whitespace-nowrap"
                  style={{ fontFamily: "'Ballinger Mono', monospace", opacity: 0, position: "relative" }}
               >
                  Welcome! It's great to meet you.
               </h1>
            </div>

            {/* 3 Equal Cards — only rendered after heading animation completes */}
            {cardsVisible && (
               <div
                  ref={cardsRef}
                  className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5"
                  style={{ gridAutoRows: "390px", opacity: 0 }}
               >
                  {/* Collaboration Card */}
                  <div className="bg-[#0d0d0d]/80 backdrop-blur-xl border border-white/8 rounded-[2.5rem] p-10
               flex flex-col overflow-hidden group cursor-pointer
               hover:bg-[#111]/90 hover:border-white/15 transition-all duration-500">
                     <div className="flex items-center gap-2 text-[10px] text-[#888] font-mono tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        Collaboration
                     </div>
                     <h3 className="text-white text-xl md:text-2xl font-sans font-medium leading-tight mt-10 mb-auto">
                        I'm interested in working together.
                     </h3>
                     <div className="mt-8">
                        <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center
                   text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white
                   transition-all duration-500">
                           <span className="text-base transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                        </button>
                     </div>
                  </div>

                  {/* Hiring Card */}
                  <div className="bg-[#0d0d0d]/80 backdrop-blur-xl border border-white/8 rounded-[2.5rem] p-10
               flex flex-col overflow-hidden group cursor-pointer
               hover:bg-[#111]/90 hover:border-white/15 transition-all duration-500">
                     <div className="flex items-center gap-2 text-[10px] text-[#888] font-mono tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        Hiring
                     </div>
                     <h3 className="text-white text-xl md:text-2xl font-sans font-medium leading-tight mt-10 mb-auto">
                        I'd like to join the team.
                     </h3>
                     <div className="mt-8">
                        <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center
                   text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white
                   transition-all duration-500">
                           <span className="text-base transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                        </button>
                     </div>
                  </div>

                  {/* Anything Else Card */}
                  <div className="bg-black rounded-[2.5rem] relative overflow-hidden flex flex-col group cursor-pointer">
                     <div className="absolute inset-0 z-0">
                        <Image
                           src="/assets/p2.jpg"
                           alt="Contact Person"
                           fill
                           className="object-cover object-center grayscale opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-0" />
                     <div className="relative z-10 p-10 flex flex-col h-full">
                        <div className="flex items-center gap-2 text-[10px] text-white/80 font-mono tracking-widest uppercase drop-shadow-md">
                           <span className="w-1.5 h-1.5 bg-white rounded-full" />
                           Anything else
                        </div>
                        <h3 className="text-white text-xl md:text-2xl font-sans font-medium leading-tight mt-10 mb-auto drop-shadow-lg">
                           Just saying hi.
                        </h3>
                        <div className="flex gap-3 mt-8">
                           <button className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10
                     rounded-2xl p-4 text-left transition-all duration-300">
                              <div className="text-[9px] text-white/60 font-mono mb-1.5 tracking-wider">EMAIL</div>
                              <div className="text-[10px] text-white font-mono font-semibold break-all">BOO@PHANTOM.AGENCY</div>
                           </button>
                           <button className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10
                     rounded-2xl p-4 text-left transition-all duration-300">
                              <div className="text-[9px] text-white/60 font-mono mb-1.5 tracking-wider">WHATSAPP</div>
                              <div className="text-[10px] text-white font-mono font-semibold">+447982717018</div>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}