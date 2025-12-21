"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { name: "Generative AI", href: "/services/generative-ai", description: "LLM integration & custom AI" },
  { name: "Agentic AI", href: "/services/agentic-ai", description: "Autonomous AI agents" },
  { name: "RAG Systems", href: "/services/rag", description: "Knowledge-powered AI" },
  { name: "AI Chatbots", href: "/services/chatbots", description: "Conversational AI solutions" },
  { name: "Flutter Apps", href: "/services/flutter", description: "Cross-platform mobile apps" },
  { name: "Computer Vision", href: "/services/computer-vision", description: "Image & video AI" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="SachiAI Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold">
              <span className="text-white">Sachi</span>
              <span className="gradient-text">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
                      {item.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        servicesOpen && "rotate-180"
                      )} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-2 w-72"
                        >
                          <div className="glass rounded-xl p-2 shadow-2xl border border-slate-700/50">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block px-4 py-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                              >
                                <div className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-xs text-slate-400 mt-0.5">
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                            <div className="border-t border-slate-700/50 mt-2 pt-2">
                              <Link
                                href="/services"
                                className="block px-4 py-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                              >
                                View All Services →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="relative group px-6 py-2.5 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 transition-all duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <span className="relative text-sm font-semibold text-white">
                Get Started
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex items-center justify-between w-full px-4 py-2 text-slate-300 hover:text-white transition-colors"
                        >
                          {item.name}
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform",
                            servicesOpen && "rotate-180"
                          )} />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4"
                            >
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-slate-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 mx-4 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 text-white text-center font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
