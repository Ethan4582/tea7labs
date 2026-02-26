import { notFound } from "next/navigation";
import { projects } from "@/components/data";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
   params: Promise<{
      slug: string;
   }>;
}

export default async function ProjectPage({ params }: PageProps) {
   const { slug } = await params;
   const project = projects.find((p) => p.slug === slug);

   if (!project) {
      notFound();
   }

   return (
      <div
         className="min-h-screen text-white flex flex-col p-8 transition-colors duration-500 ease-in-out"
         style={{ backgroundColor: project.bgColor }}
      >
         <nav className="mb-12">
            <Link
               href="/"
               className="text-white/60 hover:text-white transition-colors duration-300 font-mono text-lg"
            >
               &larr; Back to Gallery
            </Link>
         </nav>

         <main className="max-w-4xl mx-auto w-full flex-grow flex flex-col">
            <header className="mb-12 border-b border-white/10 pb-8">
               <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 font-mono">
                  {project.title}
               </h1>
               <p className="text-white/50 text-xl font-mono">
                  Year // {project.year}
               </p>
            </header>

            <section className="mt-8 flex-grow flex flex-col items-center">
               <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                     src={project.image}
                     alt={project.title}
                     fill
                     className="object-cover"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                     priority
                  />
               </div>

               <div className="w-full max-w-2xl mt-16 leading-relaxed text-white/80 font-mono text-lg flex flex-col gap-6">
                  <p>
                     This is the page for <strong>{project.title}</strong>. The background color of this page is distinct to the project, set to <code>{project.bgColor}</code>.
                  </p>
                  <p>
                     This content area can be used to describe the project, write a case study, or embed more details about the concept. The design uses standard Next.js App Router dynamic routing capabilities, receiving the <code>slug</code> from the URL path.
                  </p>
               </div>
            </section>
         </main>

         <footer className="mt-24 pt-8 border-t border-white/10 text-center text-white/40 font-mono text-sm">
            tae7labs - {project.title}
         </footer>
      </div>
   );
}
