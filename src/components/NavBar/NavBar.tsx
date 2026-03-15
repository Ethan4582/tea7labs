"use client";

import { usePathname } from "next/navigation";
import NavText from "./NavText";
import TimeDisplay from "./TimeDisplay";
import NavButton from "./NavButton";
import { TIME_ZONES, NAVBAR_CONTENT } from "../../lib/content_data";

export default function NavBar() {
   const pathname = usePathname();

   if (pathname === "/contact") {
      return null;
   }

   return (
      <nav className="fixed top-0 left-0 w-full px-6 py-4 sm:px-10 sm:py-6 flex justify-between items-start md:items-center z-50 pointer-events-none font-mono bg-transparent">
         {/* Logo (Top Left) */}
         <div className="pointer-events-auto">
            <a 
               href="/" 
               className="text-white text-lg sm:text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
               style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
               T7_LABS
            </a>
         </div>

         <div className="flex flex-col md:flex-row justify-end items-end md:items-center gap-8 md:gap-16">
            <div className="flex flex-col md:flex-row justify-end items-start md:items-center pointer-events-auto gap-8 md:gap-14">
               <NavText />

               <div className="flex flex-col gap-[2px]">
                  {TIME_ZONES.map((tz, index) => (
                     <TimeDisplay
                        key={tz.location}
                        location={tz.location}
                        timeZone={tz.timeZone}
                        label={tz.label}
                        isActive={index === 0}
                        icon={
                           tz.iconType === "moon" ? (
                              <span className="text-[10px] transform scale-x-[-1] inline-block">☾</span>
                           ) : (
                              <span className={`text-[10px] ${index === 0 ? "text-white animate-glow-pulse" : "text-[#666]"}`}>●</span>
                           )
                        }
                     />
                  ))}
               </div>
            </div>

            <div className="pointer-events-auto md:-mt-1">
               <NavButton label={NAVBAR_CONTENT.contactLabel} href="/contact" />
            </div>
         </div>
      </nav>
   );
}
