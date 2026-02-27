import Link from "next/link";

interface NavButtonProps {
   label: string;
   href?: string;
   onClick?: () => void;
}

export default function NavButton({ label, href, onClick }: NavButtonProps) {
   const className = "bg-[#fff] text-black font-semibold rounded-[40px] px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-[15px] hover:bg-white transition-colors pointer-events-auto inline-flex items-center justify-center leading-none tracking-tight";

   if (onClick) {
      return (
         <button onClick={onClick} className={className}>
            {label}
         </button>
      );
   }

   return (
      <Link href={href || "#"} className={className}>
         {label}
      </Link>
   );
}
