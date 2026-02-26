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
      <div className="flex items-center justify-between text-[9px] sm:text-[10px] w-[200px]">
         <div className="flex items-center gap-2 text-[#888]">
            {icon && <span className="opacity-80 text-[10px] sm:text-[10px]">{icon}</span>}
            <span className="uppercase tracking-[0.1em] font-medium">{location}</span>
         </div>
         <span className="text-[#bbb] uppercase tracking-[0.1em] font-medium">
            {time ? `${time} ${label}` : ""}
         </span>
      </div>
   );
}
