"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full overflow-hidden";

    const variants = {
      primary: "text-white",
      secondary: "bg-slate-800 text-white hover:bg-slate-700",
      outline:
        "border border-slate-700 text-slate-300 hover:border-indigo-500 hover:text-white",
      ghost: "text-slate-300 hover:text-white hover:bg-slate-800/50",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {variant === "primary" && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
          </>
        )}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
