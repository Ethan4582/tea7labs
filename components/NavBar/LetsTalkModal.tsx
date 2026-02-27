"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

// ── Link constants ────────────────────────────────────────────────────────────
const COLLABORATION_URL = "https://x.com/SinghAshir65848";
const HIRING_URL = "https://drive.google.com/file/d/1bPg3furqrxtMcMLzMQW0JzWIi2RScNId/view";
// ─────────────────────────────────────────────────────────────────────────────

interface LetsTalkModalProps {
   isOpen: boolean;
   onClose: () => void;
}

export default function LetsTalkModal({ isOpen, onClose }: LetsTalkModalProps) {
   const [mounted, setMounted] = useState(false);
   const [cardsVisible, setCardsVisible] = useState(false);
   const headingRef = useRef<HTMLHeadingElement>(null);
   const letsTalkRef = useRef<HTMLDivElement>(null);
   const cardsRef = useRef<HTMLDivElement>(null);
   const overlayRef = useRef<HTMLDivElement>(null);
   const tlRef = useRef<gsap.core.Timeline | null>(null);
   const router = useRouter();


   useEffect(() => {
      if (isOpen) {
         setMounted(true);
         setCardsVisible(false);
      } else {
         setCardsVisible(false);
         // Immediately wipe blur/bg so it never bleeds onto the hero page
         const el = overlayRef.current;
         if (el) {
            el.style.backdropFilter = "none";
            el.style.backgroundColor = "transparent";
            // vendor prefix via bracket notation to avoid TS error
            (el.style as any).webkitBackdropFilter = "none";
         }
         if (tlRef.current) tlRef.current.kill();
         const t = setTimeout(() => setMounted(false), 700);
         return () => clearTimeout(t);
      }
   }, [isOpen]);

   // ── Heading animation ────────────────────────────────────────────────────
   useEffect(() => {
      if (!mounted || !isOpen) return;
      const heading = headingRef.current;
      if (!heading) return;

      if (tlRef.current) tlRef.current.kill();

      gsap.set(heading, {
         position: "fixed",
         top: "50%",
         left: "50%",
         xPercent: -50,
         yPercent: -50,
         scale: 1,
         opacity: 0,
         zIndex: 300,
         margin: 0,
      });

      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(heading, { opacity: 1, duration: 1.0, ease: "power2.out" })
         .to({}, { duration: 1.5 })
         .to(heading, {
            duration: 1.6,
            ease: "power3.inOut",
            onStart() {
               const label = letsTalkRef.current;
               if (!label) return;
               const r = label.getBoundingClientRect();
               gsap.to(heading, {
                  top: r.bottom + 4,
                  left: r.left,
                  xPercent: 0,
                  yPercent: 0,
                  scale: 1,
                  duration: 1.6,
                  ease: "power3.inOut",
                  overwrite: true,
                  onComplete: () => {
                     gsap.set(heading, { clearProps: "all" });
                     heading.style.opacity = "1";
                     heading.style.position = "relative";
                     setCardsVisible(true);
                  },
               });
            },
         });

      return () => { tl.kill(); };
   }, [mounted, isOpen]);


   useEffect(() => {
      if (!cardsVisible || !cardsRef.current) return;
      gsap.fromTo(
         cardsRef.current,
         { opacity: 0, y: 24 },
         { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
   }, [cardsVisible]);

   const handleClose = () => { onClose(); router.push("/"); };

   if (!mounted) return null;

   return (
      <div
         ref={overlayRef}
         className={`fixed inset-0 z-[100] transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
         style={{
            backdropFilter: isOpen ? "blur(12px)" : "none",
            backgroundColor: isOpen ? "rgba(0,0,0,0.30)" : "transparent",
         }}
      >
         {/* Close button */}
         <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-[300] w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
            aria-label="Close"
         >
            <span className="text-white text-lg font-light leading-none inline-block transition-transform duration-500 ease-in-out group-hover:rotate-90">
               ✕
            </span>
         </button>

         <div className="w-full h-full flex flex-col justify-center px-10 py-10 pointer-events-none">


            <div className="w-full max-w-6xl mx-auto mb-8 pointer-events-auto">
               <div
                  ref={letsTalkRef}
                  className="flex items-center gap-2 text-[10px] text-white/50 font-mono tracking-widest uppercase mb-1.5"
               >
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                  Let's Talk
               </div>
               <h1
                  ref={headingRef}
                  className="text-white text-[1.5rem] sm:text-[1.9rem] md:text-[2.4rem] leading-[1.15] tracking-tight font-bold text-left"
                  style={{ fontFamily: "'Ballinger Mono', monospace", opacity: 0 }}
               >
                  Welcome! It's great to meet you.
               </h1>
            </div>

           
            {cardsVisible && (
               <div
                  ref={cardsRef}
                  className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 pointer-events-auto"
                  style={{ gridAutoRows: "380px", opacity: 0 }}
               >
                  
                  <div
                     className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] p-8 flex flex-col overflow-hidden group cursor-pointer hover:bg-white/[0.07] transition-all duration-500"
                     onClick={() => window.open(COLLABORATION_URL, "_blank")}
                  >
                     <div className="flex items-center gap-2 text-[10px] text-[#666] font-mono tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                        Collaboration
                     </div>
                     <h3 className="text-white text-lg md:text-xl font-sans font-medium leading-snug mt-6 mb-auto">
                        I'm interested in working together.
                     </h3>
                     <div className="mt-6">
                        <button
                           className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500"
                           onClick={(e) => { e.stopPropagation(); window.open(COLLABORATION_URL, "_blank"); }}
                        >
                           <span className="text-sm transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                        </button>
                     </div>
                  </div>

                  {/* Hiring → Google Drive PDF */}
                  <div
                     className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] p-8 flex flex-col overflow-hidden group cursor-pointer hover:bg-white/[0.07] transition-all duration-500"
                     onClick={() => window.open(HIRING_URL, "_blank")}
                  >
                     <div className="flex items-center gap-2 text-[10px] text-[#666] font-mono tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                        Hiring
                     </div>
                     <h3 className="text-white text-lg md:text-xl font-sans font-medium leading-snug mt-6 mb-auto">
                        I'd like to join the team.
                     </h3>
                     <div className="mt-6">
                        <button
                           className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500"
                           onClick={(e) => { e.stopPropagation(); window.open(HIRING_URL, "_blank"); }}
                        >
                           <span className="text-sm transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                        </button>
                     </div>
                  </div>

                  {/* Anything Else */}
                  <div className="bg-black relative overflow-hidden flex flex-col group cursor-pointer">
                     <div className="absolute inset-0 z-0">
                        <Image
                           src="/assets/p2.jpg"
                           alt="Contact Person"
                           fill
                           className="object-cover object-top grayscale opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/80 z-0" />
                     <div className="relative z-10 p-8 flex flex-col h-full">
                        <div className="flex items-center gap-2 text-[10px] text-white/70 font-mono tracking-widest uppercase drop-shadow-md">
                           <span className="w-1.5 h-1.5 bg-white rounded-full" />
                           Anything else
                        </div>
                        <h3 className="text-white text-lg md:text-xl font-sans font-medium leading-snug mt-6 mb-auto drop-shadow-lg">
                           Just saying<br />hi.
                        </h3>
                        <div className="flex gap-2 mt-6">
                           {/* Email — white bg on hover */}
                           <button className="flex-1 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl py-3 px-4 text-left transition-all duration-300 hover:bg-white hover:border-white group/email">
                              <div className="text-[9px] text-white/60 font-mono mb-1 tracking-wider group-hover/email:text-black/60 transition-colors duration-300">EMAIL</div>
                              <div className="text-[10px] text-white font-mono font-semibold break-all group-hover/email:text-black transition-colors duration-300">tae7lab@gmail.com</div>
                           </button>
                           {/* WhatsApp — green on hover */}
                           <button className="flex-1 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl py-3 px-4 text-left transition-all duration-300 hover:bg-[#25D366] hover:border-[#25D366] group/wa">
                              <div className="text-[9px] text-white/60 font-mono mb-1 tracking-wider group-hover/wa:text-white/80 transition-colors duration-300">WHATSAPP</div>
                              <div className="text-[10px] text-white font-mono font-semibold group-hover/wa:text-white transition-colors duration-300">+447982717018</div>
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