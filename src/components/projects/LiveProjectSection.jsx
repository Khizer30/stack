import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const LiveProjectButton = ({ label = "Live Product", href = "#", className = "" }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={`group inline-flex min-w-58 items-center justify-center gap-3 rounded-full border border-[rgba(157,92,255,0.35)] bg-[linear-gradient(135deg,rgba(123,46,255,0.95),rgba(73,23,200,0.95))] px-7 py-3.5 text-[0.92rem] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_20px_45px_rgba(123,46,255,0.32)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(123,46,255,0.38)] ${className}`}
    >
      <span className="relative z-10 whitespace-pre-line leading-tight">{label}</span>
      <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="absolute inset-0 pointer-events-none rounded-full -z-10" />
    </motion.a>
  );
};

export default LiveProjectButton;
