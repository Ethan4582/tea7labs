import { PROJECTS_DATA } from "../lib/content_data";

export default function ProjectListView() {
   const totalProjects = PROJECTS_DATA.reduce((acc, yearData) => acc + yearData.projects.length, 0);

   return (
      <div className="w-full min-h-screen bg-black text-white pt-40 px-6 sm:px-10 pb-32 overflow-y-auto font-mono">
         {/* Header */}
         <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-16 mb-12 pb-4 border-b border-[#333]">
            <h1 className="text-3xl sm:text-[40px] font-medium tracking-tight whitespace-nowrap">All projects</h1>
            <span className="text-xl sm:text-[28px] text-[#666] tracking-tight">{totalProjects} projects</span>
         </div>

         {/* Project List */}
         <div className="flex flex-col gap-10">
            {PROJECTS_DATA.map((yearData) => (
               <div key={yearData.year} className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0 pb-10">
                  {/* Year Column */}
                  <div className="md:w-1/4">
                     <h2 className="text-lg sm:text-xl font-bold">{yearData.year}</h2>
                  </div>

                  {/* Projects Column */}
                  <div className="md:w-3/4 flex flex-col">
                     {yearData.projects.map((project, idx) => (
                        <div key={idx} className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-4 group cursor-pointer hover:bg-white/10 backdrop-blur-md transition-all duration-300 border-b border-[#222] -mx-4 px-4 rounded-lg">
                           {/* Title */}
                           <div className="lg:w-1/2">
                              <h3 className="text-base sm:text-lg font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 text-white">{project.title}</h3>
                           </div>

                           {/* Tags */}
                           <div className="flex flex-wrap items-center gap-2 lg:w-1/3">
                              {project.tags.map((tag, tagIdx) => {
                                 const isFocus = tagIdx === 0;
                                 return (
                                    <span key={tagIdx} className={`text-[9px] sm:text-[10px] tracking-[0.05em] px-3 sm:px-4 py-1.5 rounded-full uppercase transition-colors font-semibold text-white ${isFocus
                                          ? "border border-[#555] bg-black group-hover:border-white"
                                          : "bg-[#333] border border-transparent group-hover:bg-[#444]"
                                       }`}>
                                       {tag}
                                    </span>
                                 );
                              })}
                           </div>

                           {/* Company */}
                           <div className="lg:w-1/6 text-left lg:text-right">
                              <span className="text-sm font-medium group-hover:text-white text-[#ccc] transition-colors">{project.company}</span>
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
