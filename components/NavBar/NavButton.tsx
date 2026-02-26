import Link from "next/link";

interface NavButtonProps {
   label: string;
   href: string;
}

export default function NavButton({ label, href }: NavButtonProps) {
   return (
      <Link
         href={href}
         className="bg-[#f0f0f0] text-black font-semibold rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base hover:bg-white transition-colors pointer-events-auto"
      >
         {label}
      </Link>
   );
}
