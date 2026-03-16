import React from 'react';
import { Project } from '../../lib/asset_data';

export default function ProjectHero({ project, borderColor }: { project: Project, borderColor: string }) {
   return (
      <section className="w-full">
         <h1 className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.9] font-bold uppercase tracking-tighter w-full"
             style={{ fontFamily: 'var(--font-instrument-serif), serif', wordBreak: 'break-word' }}>
            {project.title}
         </h1>
         
         <div className="w-full h-px my-10 md:my-16" style={{ backgroundColor: 'currentColor', opacity: 0.2 }} />

         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <div className="flex flex-wrap items-center gap-2">
               {project.Tags?.map((tag, idx) => (
                  <span 
                     key={idx} 
                     className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider ${
                        idx === 0 
                           ? "" 
                           : "bg-white/10 backdrop-blur-md border border-white/10 shadow-sm"
                     }`}
                  >
                     {tag}
                  </span>
               ))}
               {/* Automatically append blogpost tag to tags array just in case it doesn't already have one */}
               {!project.Tags?.map(t => t.toLowerCase()).includes('blogpost') && (
                  <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
                     BLOGPOST
                  </span>
               )}
            </div>

            <div className="flex gap-4">
               {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                     className="px-6 py-2.5 rounded-full border border-current hover:opacity-60 transition-opacity font-mono text-xs sm:text-sm tracking-widest uppercase">
                     See Live ↗
                  </a>
               )}
               {project.codeLink && (
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" 
                     className="px-6 py-2.5 rounded-full border border-current hover:opacity-60 transition-opacity font-mono text-xs sm:text-sm tracking-widest uppercase">
                     Code ↗
                  </a>
               )}
            </div>
         </div>

         <div className="w-full aspect-video sm:aspect-[21/9] bg-neutral-900 overflow-hidden mb-12 rounded-sm relative">
            {project.Video ? (
               <video src={project.Video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            ) : (
               <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            )}
         </div>

         {project.subHeading && (
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-8 max-w-[85%]" 
                style={{ fontFamily: 'var(--font-instrument-serif), serif', lineHeight: 1.1 }}>
               {project.subHeading}
            </h2>
         )}
      </section>
   );
}
