import NavText from "./NavText";
import TimeDisplay from "./TimeDisplay";
import NavButton from "./NavButton";

export default function NavBar() {
   return (
      <nav className="fixed top-0 left-0 w-full px-6 py-8 sm:px-10 sm:py-10 flex border-none flex-col md:flex-row justify-between items-start z-50 pointer-events-none font-mono bg-transparent">

         <div className="flex w-full md:w-auto justify-between md:justify-start gap-12 lg:gap-40 items-start pointer-events-auto mt-2">
            <NavText />

            <div className="flex flex-col gap-1.5">
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

         <div className="pointer-events-auto mt-6 md:mt-0 self-end md:self-auto">
            <NavButton label="Let's Talk" href="#" />
         </div>

      </nav>
   );
}
