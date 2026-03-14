import { PROJECTS_DATA } from "../lib/content_data";

export default function ProjectListView() {
   const totalProjects = PROJECTS_DATA.reduce((acc, yearData) => acc + yearData.projects.length, 0);

   return (
      <div className="w-full min-h-screen bg-black text-white pt-40 px-6 sm:px-10 pb-32 overflow-y-auto font-mono">
         {/* Header */}
         <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-16 mb-20 pb-10 border-b border-[#333]">
            <h1 className="text-4xl sm:text-[56px] font-medium tracking-tight whitespace-nowrap">All projects</h1>
            <span className="text-2xl sm:text-[32px] text-[#666] tracking-tight">{totalProjects} projects</span>
         </div>

         {/* Project List */}
         <div className="flex flex-col gap-10">
            {PROJECTS_DATA.map((yearData) => (
               <div key={yearData.year} className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0 pb-10 border-b border-[#222] last:border-0">
                  {/* Year Column */}
                  <div className="md:w-1/4">
                     <h2 className="text-2xl font-bold">{yearData.year}</h2>
                  </div>

                  {/* Projects Column */}
                  <div className="md:w-3/4 flex flex-col gap-4">
                     {yearData.projects.map((project, idx) => (
                        <div key={idx} className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-4 group cursor-pointer hover:bg-[#111] transition-colors -mx-4 px-4 rounded-xl">
                           {/* Title */}
                           <div className="lg:w-1/2">
                              <h3 className="text-lg sm:text-[22px] font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2">{project.title}</h3>
                           </div>
                           
                           {/* Tags */}
                           <div className="flex flex-wrap items-center gap-2 lg:w-1/3">
                              {project.tags.map((tag, tagIdx) => (
                                 <span key={tagIdx} className="text-[10px] sm:text-[11px] border border-[#333] tracking-[0.05em] px-3 sm:px-4 py-1.5 rounded-full uppercase text-[#aaa] group-hover:text-white group-hover:border-[#555] transition-colors bg-black">
                                    {tag}
                                 </span>
                              ))}
                           </div>

                           {/* Company */}
                           <div className="lg:w-1/6 text-left lg:text-right">
                              <span className="text-sm sm:text-base font-medium group-hover:text-white text-[#ccc] transition-colors">{project.company}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
