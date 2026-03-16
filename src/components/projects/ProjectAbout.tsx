import React from 'react';
import { Project } from '../../lib/asset_data';

export default function ProjectAbout({ project, borderColor }: { project: Project, borderColor: string }) {
   if (!project.aboutText && (!project.features || project.features.length === 0)) return null;

   return (
      <section className="w-full py-16 md:py-32 border-t" style={{ borderTopColor: 'currentColor', opacity: 0.9 }}>
         <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
            <div className="md:col-span-8 pr-0 md:pr-24">
               <h3 className="text-sm font-medium tracking-widest uppercase mb-6 flex items-center gap-2 font-mono opacity-60">
                  <span className="w-2 h-2 rounded-full bg-current inline-block"></span>
                  About Project
               </h3>
               <p className="text-xl sm:text-2xl md:text-[1.75rem] leading-[1.4] tracking-tight" 
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  {project.aboutText}
               </p>
            </div>
            <div className="md:col-span-4">
               <h3 className="text-sm font-medium tracking-widest uppercase mb-6 flex items-center gap-2 font-mono opacity-60">
                  <span className="w-2 h-2 rounded-full bg-current inline-block"></span>
                  Features
               </h3>
               <div className="flex flex-col text-xs sm:text-sm uppercase font-mono mt-4">
                  {project.features?.map((f, i) => (
                     <div key={i} className={`flex justify-end py-4 border-b last:border-0 opacity-80 ${f.isLink ? 'hover:opacity-100' : ''}`} style={{ borderBottomColor: 'currentColor' }}>
                        {f.isLink ? (
                           <a href={f.link ?? project.href} target="_blank" rel="noopener noreferrer" className="font-bold flex justify-between items-center w-full group">
                              <span></span>
                              <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                 {f.label} ↗
                              </span>
                           </a>
                        ) : (
                           <span className="text-right w-full">{f.label}</span>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
