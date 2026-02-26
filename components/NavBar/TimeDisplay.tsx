"use client";

import { useState, useEffect } from "react";

interface TimeDisplayProps {
   location: string;
   timeZone: string;
   label: string;
   icon?: React.ReactNode;
}

export default function TimeDisplay({ location, timeZone, label, icon }: TimeDisplayProps) {
   const [time, setTime] = useState("");

   useEffect(() => {
      const update = () => {
         const now = new Date();
         try {
            const formatter = new Intl.DateTimeFormat("en-GB", {
               timeZone,
               hour: "2-digit",
               minute: "2-digit",
               hour12: false,
            });
            setTime(formatter.format(now));
         } catch (e) {
            setTime("--:--");
         }
      };

      update();
      const interval = setInterval(update, 1000);
      return () => clearInterval(interval);
   }, [timeZone]);

   return (
      <div className="flex items-center gap-x-6 text-[11px] sm:text-xs">
         <div className="flex items-center gap-2 text-[#999] w-[140px]">
            {icon && <span className="opacity-80 text-[10px] sm:text-xs">{icon}</span>}
            <span className="uppercase tracking-widest">{location}</span>
         </div>
         <span className="text-white uppercase tracking-wider font-semibold">
            {time ? `${time} ${label}` : ""}
         </span>
      </div>
   );
}
