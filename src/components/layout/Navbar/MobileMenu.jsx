import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

import navLinks from "./navLinksData";
import MobileNavItem from "./MobileNavItem";
import CTAButton from "./CTAButton";

const MobileMenu = ({ open, activeHref, onNavigate, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden"
          />

          <motion.div
            initial={{ opacity: 0, y: -22, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="
              absolute
              left-1
              right-1
              top-[calc(100%+0.5rem)]
              min-h-80
              z-50
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-[linear-gradient(180deg,rgba(12,12,18,0.98),rgba(6,6,9,0.96))]
              p-5
              shadow-[0_34px_120px_rgba(0,0,0,0.6)]
              backdrop-blur-2xl
              lg:hidden
            "
          >
            <div className="mb-4 flex items-start translate-x-10 translate-y-2 justify-between gap-4 pb-4">
              <div>
                <p className="mt-2 text-[1.1rem] font-black uppercase tracking-[0.32em] text-white">
                  STACK
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/4 text-white transition-colors duration-300 hover:bg-white/7"
                aria-label="Close menu"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="flex max-h-96 flex-col items-center gap-3.5 overflow-auto pr-1 no-scrollbar">
              {navLinks.map((item) => (
                <MobileNavItem
                  key={item.title}
                  href={item.href}
                  title={item.title}
                  active={activeHref === item.href}
                  onClick={onNavigate}
                />
              ))}
            </div>

            <div className="mt-7 flex justify-center">
              <CTAButton
                href="/training"
                label={"Trainings &\nWorkshops"}
                variant="mobile"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
