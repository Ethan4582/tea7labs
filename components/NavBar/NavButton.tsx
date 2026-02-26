import Link from "next/link";

interface NavButtonProps {
   label: string;
   href: string;
}

export default function NavButton({ label, href }: NavButtonProps) {
   return (
      <Link
         href={href}
         className="bg-[#fff] text-black font-semibold rounded-[40px] px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-[15px] hover:bg-white transition-colors pointer-events-auto inline-flex items-center justify-center leading-none tracking-tight"
      >
         {label}
      </Link>
   );
}
