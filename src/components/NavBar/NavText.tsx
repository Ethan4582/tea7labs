import { NAVBAR_CONTENT } from "../../lib/content_data";

export default function NavText() {
   return (
      <div className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.1em] text-[#e0e0e0] leading-snug hidden md:block">
         {NAVBAR_CONTENT.brand}<br />
         {NAVBAR_CONTENT.slogan[0]}<br />
         {NAVBAR_CONTENT.slogan[1]}
      </div>
   );
}