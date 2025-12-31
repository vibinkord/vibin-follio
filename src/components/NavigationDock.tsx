"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationDockProps {
  sections: {
    id: string;
    label: string;
    icon: string;
  }[];
}

export const NavigationDock = ({ sections }: NavigationDockProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl">{isOpen ? "✕" : "≡"}</span>
      </motion.button>

      {/* Sliding Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />

            {/* Sliding Window */}
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-slate-900 to-slate-800 z-40 shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">
                  Navigation
                </h2>

                <div className="space-y-3">
                  {sections.map(({ id, label, icon }) => (
                    <motion.button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`w-full py-3 px-4 rounded-lg transition-all text-left font-semibold flex items-center gap-3 ${
                        activeSection === id
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                          : "bg-slate-700 text-gray-200 hover:bg-slate-600"
                      }`}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xl">{icon}</span>
                      <span>{label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Footer Info */}
                <div className="mt-12 pt-6 border-t border-slate-700">
                  <p className="text-gray-400 text-sm text-center">
                    Made with ❤️ by Vibin Richard
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Section Indicators - Horizontal Box */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden lg:flex flex-row gap-2 bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-3 rounded-full border border-slate-700 shadow-2xl backdrop-blur-md"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {sections.map(({ id, label, icon }) => (
          <motion.button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all group relative ${
              activeSection === id
                ? "bg-cyan-500 text-white shadow-lg scale-110"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            title={label}
          >
            <span className="text-lg">{icon}</span>
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: -40 }}
              className="absolute bg-black/90 text-white px-3 py-1 rounded text-sm pointer-events-none whitespace-nowrap"
            >
              {label}
            </motion.div>
          </motion.button>
        ))}
      </motion.div>
    </>
  );
};
