"use client";

import { useState } from "react";
import Gallery from "../components/Gallery";
import ProjectListView from "../components/ProjectListView";
import Link from "next/link";
import { BOTTOM_NAV_LINKS } from "../lib/content_data";

export default function Home() {
  const [view, setView] = useState<"grid" | "list">("list"); // the image had list view as the default for the newly built layout

  return (
    <main className="relative w-full h-[100svh] overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Dynamic View rendering */}
      {view === "grid" ? (
        <Gallery />
      ) : (
        <div className="w-full h-full overflow-y-auto">
          <ProjectListView />
        </div>
      )}

      {/* View Toggle (Bottom Left) */}
      <div className="fixed bottom-6 left-6 sm:bottom-10 sm:left-10 z-50 flex items-center bg-[#222] rounded-full p-2 border border-[#333] shadow-lg">
         <button
            onClick={() => setView("grid")}
            className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors ${
               view === "grid" ? "bg-white text-black" : "text-[#aaa] hover:text-white"
            }`}
            aria-label="Grid View"
         >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <rect x="3" y="3" width="7" height="7"></rect>
               <rect x="14" y="3" width="7" height="7"></rect>
               <rect x="14" y="14" width="7" height="7"></rect>
               <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
         </button>
         <button
            onClick={() => setView("list")}
            className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors ${
               view === "list" ? "bg-white text-black" : "text-[#aaa] hover:text-white"
            }`}
            aria-label="List View"
         >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <line x1="8" y1="6" x2="21" y2="6"></line>
               <line x1="8" y1="12" x2="21" y2="12"></line>
               <line x1="8" y1="18" x2="21" y2="18"></line>
               <line x1="3" y1="6" x2="3.01" y2="6"></line>
               <line x1="3" y1="12" x2="3.01" y2="12"></line>
               <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
         </button>
      </div>

      {/* Bottom Floating Nav Buttons (Bottom Center) */}
      <div className="fixed bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center bg-[#555] bg-opacity-80 backdrop-blur-md rounded-full px-4 py-3 border border-[#666] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
         {BOTTOM_NAV_LINKS.map((link) => (
            <Link 
               key={link.label}
               href={link.href}
               className="px-6 py-2 rounded-full text-sm font-medium text-white hover:text-white hover:bg-[#333] transition-colors"
            >
               {link.label}
            </Link>
         ))}
      </div>
    </main>
  );
}
