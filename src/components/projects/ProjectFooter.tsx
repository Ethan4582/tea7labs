import React from 'react';
import { projects } from '../../lib/asset_data';

export default function ProjectFooter({ currentSlug }: { currentSlug: string }) {
   // Filter out the current project
   const otherProjects = projects.filter(p => p.slug !== currentSlug);
   
   // We will pick 3 random-ish related projects or just the next 3
   const currentIndex = projects.findIndex(p => p.slug === currentSlug);
   const startIndex = currentIndex >= 0 ? (currentIndex + 1) % projects.length : 0;
   
   const others = [];
   for (let i = 0; i < 3; i++) {
      others.push(projects[(startIndex + i) % projects.length]);
   }

   // Fallback to static selection if array logic fails
   const finalOthers = others.length === 3 ? others : otherProjects.slice(0, 3);
   
   return (
      <footer className="w-full bg-[#1c1a17] text-[#ebe7e0] px-6 sm:px-10 py-24 md:py-32">
         <h2 className="text-sm font-medium tracking-widest uppercase mb-8 flex items-center gap-2 font-mono opacity-80">
            <span className="w-2 h-2 rounded-full bg-current inline-block"></span>
            Related Work
         </h2>
         
         <div className="w-full h-px bg-[#ebe7e0]/20 mb-16"></div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-32">
            {finalOthers.map((p, idx) => (
               <a href={p.href} key={idx} className="group cursor-pointer block">
                  <div className="w-full aspect-[4/3] bg-neutral-800 overflow-hidden mb-6 relative rounded-sm">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="flex justify-between items-start font-mono text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                      <span>{p.Tags && p.Tags.length > 0 ? p.Tags[0] : 'Project'}</span>
                      <div className="flex items-center gap-3">
                         {p.Logo && <img src={p.Logo} alt={p.title + " Logo"} className="h-4 object-contain brightness-0 invert" />}
                         <span className="font-bold">{p.title}</span>
                      </div>
                  </div>
               </a>
            ))}
         </div>

         <div className="w-full flex justify-center text-center">
             <a href="/" className="text-6xl sm:text-7xl md:text-[10rem] font-bold uppercase tracking-tighter hover:text-white transition-all duration-500 opacity-60 hover:opacity-100 block transform hover:scale-[1.02]" 
                style={{ fontFamily: 'var(--font-instrument-serif), serif', lineHeight: 0.9 }}>
                See All Work
             </a>
         </div>
      </footer>
   );
}
