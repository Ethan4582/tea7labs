import Link from "next/link";

interface NavButtonProps {
   label: string;
   href?: string;
   onClick?: () => void;
}

export default function NavButton({ label, href, onClick }: NavButtonProps) {
   const className = "bg-[#fff] text-black font-semibold rounded-full px-2 py-5 text-sm sm:text-[14px] hover:bg-white transition-colors pointer-events-auto pl-4 pr-4 inline-flex items-center justify-center leading-none tracking-tight";

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
