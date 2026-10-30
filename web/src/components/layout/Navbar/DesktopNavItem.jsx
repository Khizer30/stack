import { motion } from "framer-motion";

const DesktopNavItem = ({ href, title, active, onClick }) => {
  const handleClick = (event) => {
    if (onClick) {
      onClick(href, event);
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="navbar-link-item group relative rounded-full py-1.25 font-medium tracking-[0.18em] text-white/68 transition-colors duration-300 hover:text-white"
      aria-current={active ? "page" : undefined}
    >
      <span className="relative z-10 uppercase">{title}</span>

      {active && (
        <motion.span
          layoutId="nav-active-indicator"
          className="absolute inset-x-0 -bottom-2 h-0.5 rounded-full bg-linear-to-r from-transparent via-(--primary-light) to-transparent shadow-[0_0_18px_rgba(157,92,255,0.75)]"
        />
      )}
    </motion.a>
  );
};

export default DesktopNavItem;
