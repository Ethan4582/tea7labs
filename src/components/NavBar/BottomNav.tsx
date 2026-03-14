"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOTTOM_NAV_LINKS } from "../../lib/content_data";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function BottomNav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-[90] flex items-center bg-[#8c8c8c] rounded-[40px] p-1 shadow-lg font-sans">
      {BOTTOM_NAV_LINKS.map((link) => {
        // Assume '/' is the same as '/work' since work is the main view (or list view)
        const isActive = pathname === link.href || (pathname === "/" && link.href === "/work");
        
        return (
          <Link
            key={link.label}
            href={link.href}
            className={`relative px-4 py-2 sm:px-6 sm:py-2.5 rounded-[36px] text-[14px] sm:text-[15px] font-medium transition-colors z-10 flex items-center justify-center tracking-tight ${isActive ? "text-black" : "text-black hover:bg-black/5"}`}
          >
            {isActive && (
              <motion.div
                layoutId="bottom-nav-active"
                className="absolute inset-0 bg-white rounded-[36px] shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{ zIndex: -1 }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

