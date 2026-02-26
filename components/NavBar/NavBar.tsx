import NavText from "./NavText";
import TimeDisplay from "./TimeDisplay";
import NavButton from "./NavButton";

export default function NavBar() {
   return (
      <nav className="fixed top-0 right-0 w-full px-6 py-8 sm:px-10 sm:py-10 flex flex-col md:flex-row justify-end items-start md:items-center z-50 pointer-events-none font-mono bg-transparent gap-8 md:gap-16">

         <div className="flex flex-col md:flex-row justify-end items-start md:items-center pointer-events-auto mt-2 gap-8 md:gap-14">
            <NavText />

            <div className="flex flex-col gap-[2px]">
               <TimeDisplay
                  location="INDIA, IN"
                  timeZone="Asia/Kolkata"
                  label="IST"
                  icon={<span className="text-[10px] transform scale-x-[-1] inline-block">☾</span>}
               />
               <TimeDisplay
                  location="NEW YORK, NY"
                  timeZone="America/New_York"
                  label="EST"
                  icon={<span className="text-[10px] text-[#666]">●</span>}
               />
            </div>
         </div>

         <div className="pointer-events-auto md:-mt-1">
            <NavButton label="Let's Talk" href="#" />
         </div>

      </nav>
   );
}
