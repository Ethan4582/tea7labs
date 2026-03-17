"use client";

import { usePathname } from "next/navigation";
import NavText from "./NavText";
import TimeDisplay from "./TimeDisplay";
import NavButton from "./NavButton";
import { TIME_ZONES, NAVBAR_CONTENT } from "../../lib/content_data";
import { projects } from "../../lib/asset_data";

function getLuminance(hex: string) {
   hex = hex.replace('#', '');
   if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
   const r = parseInt(hex.substring(0, 2), 16) / 255;
   const g = parseInt(hex.substring(2, 4), 16) / 255;
   const b = parseInt(hex.substring(4, 6), 16) / 255;
   const a = [r, g, b].map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
   return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export default function NavBar() {
   const pathname = usePathname();

   if (pathname === "/contact") {
      return null;
   }

   const isProjectPage = pathname.startsWith("/projects/");
   let project = null;
   let isDarkTheme = true;

   if (isProjectPage) {
      const slug = pathname.split("/").pop();
      project = projects.find(p => p.slug === slug);
      if (project) {
         isDarkTheme = getLuminance(project.bgColor) < 0.5;
      }
   }

   const textColor = isProjectPage ? (isDarkTheme ? "text-white" : "text-black") : "text-white";

   // Project Page Navbar
   if (isProjectPage && project) {
      return (
         <nav className={`fixed top-0 left-0 w-full px-6 py-4 sm:px-10 sm:py-6 flex justify-between items-start md:items-center z-[100] pointer-events-none font-mono bg-transparent transition-colors duration-500 ${textColor}`}>
            <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
               <a 
                  href="/" 
                  className="hover:opacity-80 transition-opacity whitespace-nowrap"
               >
                  <img src="/logo/whitelogo.png" alt="T7LABS" className="h-6 sm:h-8 w-auto object-contain" />
               </a>
               <span className="opacity-40">|</span>
               {project.Logo && (
                  <img src={project.Logo} alt="Logo" className="h-6 w-auto object-contain" />
               )}
               <span className="text-xs sm:text-sm font-medium tracking-wide uppercase hidden sm:block">
                  {project.title}
               </span>
               <a href="/" className="ml-0 sm:ml-2 hover:rotate-90 transition-transform duration-300 pointer-events-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
               </a>
            </div>

            <div className="pointer-events-auto">
               <NavButton label={NAVBAR_CONTENT.contactLabel} href="/contact" />
            </div>
         </nav>
      );
   }

   // Default Navbar
   return (
      <nav className={`fixed top-0 left-0 w-full px-6 py-4 sm:px-10 sm:py-6 flex justify-between items-start md:items-center z-50 pointer-events-none font-mono bg-transparent ${textColor}`}>
         {/* Logo (Top Left) */}
         <div className="pointer-events-auto">
            <a 
               href="/" 
               className="hover:opacity-80 transition-opacity"
            >
               <img src="/logo/whitelogo.png" alt="T7LABS" className="h-6 sm:h-8 w-auto object-contain" />
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
                              <span className={`text-[10px] ${index === 0 ? "text-current animate-glow-pulse" : "opacity-50"}`}>●</span>
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
