import { projects } from "../../../lib/asset_data";
import { notFound } from "next/navigation";
import ProjectHero from "../../../components/projects/ProjectHero";
import ProjectAbout from "../../../components/projects/ProjectAbout";
import ProjectAssets from "../../../components/projects/ProjectAssets";
import ProjectFooter from "../../../components/projects/ProjectFooter";
import React from "react";

export function generateStaticParams() {
   return projects.map((p) => ({
      slug: p.slug,
   }));
}

function getLuminance(hex: string) {
   hex = hex.replace('#', '');
   if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
   const r = parseInt(hex.substring(0, 2), 16) / 255;
   const g = parseInt(hex.substring(2, 4), 16) / 255;
   const b = parseInt(hex.substring(4, 6), 16) / 255;
   const a = [r, g, b].map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
   return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
   const resolvedParams = await params;
   const project = projects.find(p => p.slug === resolvedParams.slug);
   if (!project) return notFound();

   const isDark = getLuminance(project.bgColor) < 0.5;
   const textColor = isDark ? "text-white" : "text-[#111]";
   // currentColor works nicely for transparent dividers using opacity in child components

   return (
      <main className={`min-h-[100dvh] w-full transition-colors duration-500`} style={{ backgroundColor: project.bgColor }}>
         <div className={`pt-32 pb-24 md:pt-48 md:pb-32 px-6 sm:px-10 max-w-[1920px] mx-auto ${textColor}`}>
            <ProjectHero project={project} borderColor="" />
            <ProjectAbout project={project} borderColor="" />
            <ProjectAssets project={project} />
         </div>
         <ProjectFooter currentSlug={project.slug} />
      </main>
   );
}
