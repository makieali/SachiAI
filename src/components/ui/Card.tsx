"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({ children, className, hover = true, gradient = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative rounded-2xl p-6 bg-slate-900/50 border border-slate-800",
        hover && "cursor-pointer",
        gradient && "gradient-border",
        className
      )}
    >
      {gradient && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
