"use client";

import { useState } from "react";
import Gallery from "../components/Gallery";
import ProjectListView from "../components/ProjectListView";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [view, setView] = useState<"grid" | "list">("list"); // the image had list view as the default

  return (
    <main className="relative w-full h-[100svh] overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Dynamic View rendering with smooth fade transitions */}
      <div className="relative w-full h-full">
         <AnimatePresence mode="popLayout" initial={false}>
            {view === "grid" && (
               <motion.div
                  key="grid-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
               >
                  <Gallery />
               </motion.div>
            )}
            
            {view === "list" && (
               <motion.div
                  key="list-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full overflow-y-auto"
               >
                  <ProjectListView />
               </motion.div>
            )}
         </AnimatePresence>
      </div>

      {/* View Toggle (Bottom Left) */}
      <div className="fixed bottom-6 left-6 sm:bottom-10 sm:left-10 z-[80] flex items-center bg-[#222] rounded-full p-1.5 border border-[#333] shadow-lg">
         <button
            onClick={() => setView("grid")}
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
               view === "grid" ? "bg-white text-black drop-shadow-md" : "text-[#aaa] hover:text-white"
            }`}
            aria-label="Grid View"
         >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <rect x="3" y="3" width="7" height="7"></rect>
               <rect x="14" y="3" width="7" height="7"></rect>
               <rect x="14" y="14" width="7" height="7"></rect>
               <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
         </button>
         <button
            onClick={() => setView("list")}
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
               view === "list" ? "bg-white text-black drop-shadow-md" : "text-[#aaa] hover:text-white"
            }`}
            aria-label="List View"
         >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <line x1="8" y1="6" x2="21" y2="6"></line>
               <line x1="8" y1="12" x2="21" y2="12"></line>
               <line x1="8" y1="18" x2="21" y2="18"></line>
               <line x1="3" y1="6" x2="3.01" y2="6"></line>
               <line x1="3" y1="12" x2="3.01" y2="12"></line>
               <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
         </button>
      </div>
    </main>
  );
}
