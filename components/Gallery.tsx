"use client";

import { useEffect, useRef } from "react";
import { init, cleanup } from "./script";

export default function Gallery() {
   const initialized = useRef(false);

   useEffect(() => {
      if (!initialized.current) {
         initialized.current = true;
         init();
      }

      return () => {
         cleanup();
         initialized.current = false;
      };
   }, []);

   return (
      <section id="gallery" className="relative w-[100vw] h-[100svh]">
         <div className="vignette-overlay absolute top-0 left-0 w-full h-full pointer-events-none z-10"></div>
      </section>
   );
}
