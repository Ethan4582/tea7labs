import React from 'react';
import { Project } from '../../lib/asset_data';

export default function ProjectAssets({ project }: { project: Project }) {
   if (!project.assets || project.assets.length === 0) return null;

   const rows = [];
   let i = 0;
   let isFullWidth = true;
   
   while (i < project.assets.length) {
      if (isFullWidth) {
         rows.push({ type: 'full', items: [project.assets[i]] });
         i += 1;
      } else {
         const items = [project.assets[i]];
         if (i + 1 < project.assets.length) {
            items.push(project.assets[i+1]);
            i += 2;
         } else {
            i += 1;
         }
         rows.push({ type: 'half', items });
      }
      isFullWidth = !isFullWidth;
   }

   return (
      <section className="w-full flex flex-col gap-6 md:gap-10 py-12 md:py-24">
         {rows.map((row, idx) => (
            <div key={idx} className={`w-full grid ${row.type === 'half' && row.items.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-6 md:gap-10`}>
               {row.items.map((asset, aIdx) => (
                  <div key={aIdx} className="w-full bg-neutral-800/20 aspect-video md:aspect-auto md:h-[60vh] overflow-hidden rounded-sm relative group">
                     {asset.endsWith('.mp4') || asset.endsWith('.webm') ? (
                        <video src={asset} loop muted autoPlay playsInline className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-in-out" />
                     ) : (
                        <img src={asset} alt="Project asset" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-in-out" />
                     )}
                  </div>
               ))}
            </div>
         ))}
      </section>
   );
}
