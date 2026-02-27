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
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingWrapRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    } else {
      const t = setTimeout(() => setMounted(false), 700);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!mounted || !isOpen) return;
    const heading = headingRef.current;
    const cards = cardsRef.current;
    if (!heading || !cards) return;

    if (tlRef.current) tlRef.current.kill();

    // Start heading fixed at dead center
    gsap.set(heading, {
      position: "fixed",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      scale: 1.1,
      opacity: 0,
      zIndex: 200,
    });

    gsap.set(cards, { opacity: 0, y: 50 });

    const tl = gsap.timeline();
    tlRef.current = tl;

    // 1. Fade in at center
    tl.to(heading, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
    })
    // 2. Hold in center for 1.8s
    .to(heading, { duration: 4.8 })
    // 3. Slowly glide to top-left header position
    .to(heading, {
      top: "0%",
      left: "0%",
      xPercent: 0,
      yPercent: 0,
      scale: 0.85,
      duration: 1.8,
      ease: "power3.inOut",
      onComplete: () => {
        // Switch from fixed to relative so layout takes over
        gsap.set(heading, {
          clearProps: "all",
          position: "relative",
          opacity: 1,
        });
      },
    })
    // 4. Cards fade up
    .to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
    }, "-=0.3");

    return () => { tl.kill(); };
  }, [mounted, isOpen]);

  const handleClose = () => {
    onClose();
    router.push("/");
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isOpen
          ? "opacity-100 backdrop-blur-2xl bg-black/50"
          : "opacity-0 backdrop-blur-none bg-transparent pointer-events-none"
      }`}
    >
      {/* Close button — top right, bigger, frosted */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 z-[300] w-12 h-12 rounded-full flex items-center justify-center
          bg-white/10 backdrop-blur-md border border-white/20
          hover:bg-white/20 hover:border-white/40 transition-all duration-300
          group"
        aria-label="Close"
      >
        <span
          className="text-white text-lg font-light leading-none
            transition-transform duration-500 ease-in-out
            group-hover:rotate-90 inline-block"
        >
          ✕
        </span>
      </button>

      {/* Full page flex layout */}
      <div className="w-full h-full flex flex-col items-center justify-center px-6 sm:px-10 pt-10">

        {/* Heading wrapper — reserves space once heading goes relative */}
        <div ref={headingWrapRef} className="w-full max-w-5xl mb-10">
          <h1
            ref={headingRef}
            className="text-white text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5vw] leading-[1.1] tracking-tight font-bold text-left whitespace-nowrap"
            style={{ fontFamily: "'Ballinger Mono', monospace" }}
          >
            Welcome! It's great to meet you.
          </h1>
        </div>

        {/* 3 Equal Cards */}
        <div
          ref={cardsRef}
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5"
          style={{ gridAutoRows: "340px" }}
        >
          {/* Collaboration Card */}
          <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl p-8
            flex flex-col overflow-hidden group cursor-pointer
            hover:bg-black/70 hover:border-white/20 transition-all duration-500">
            <div className="flex items-center gap-2 text-[10px] text-[#999] font-mono tracking-widest uppercase mb-auto">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Collaboration
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-sans font-medium leading-tight my-8">
              I'm interested in working together.
            </h3>
            <div className="mt-auto">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center
                text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white
                transition-all duration-500">
                <span className="text-base transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
              </button>
            </div>
          </div>

          {/* Hiring Card */}
          <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl p-8
            flex flex-col overflow-hidden group cursor-pointer
            hover:bg-black/70 hover:border-white/20 transition-all duration-500">
            <div className="flex items-center gap-2 text-[10px] text-[#999] font-mono tracking-widest uppercase mb-auto">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Hiring
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-sans font-medium leading-tight my-8">
              I'd like to join the team.
            </h3>
            <div className="mt-auto">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center
                text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white
                transition-all duration-500">
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
              <div className="flex items-center gap-2 text-[10px] text-white/80 font-mono tracking-widest uppercase mb-auto drop-shadow-md">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                Anything else
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-sans font-medium leading-tight my-8 drop-shadow-lg">
                Just saying hi.
              </h3>
              <div className="flex gap-3 mt-auto">
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
      </div>
    </div>
  );
}