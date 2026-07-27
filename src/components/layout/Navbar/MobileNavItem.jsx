import { motion } from "framer-motion";

const MobileNavItem = ({ href, title, active, onClick }) => {
  const handleClick = (event) => {
    if (onClick) {
      onClick(href, event);
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      whileTap={{ scale: 0.98 }}
      className="
				flex
				items-center 
				justify-center
				rounded-[1.15rem]
				border
				border-white/10
				bg-white/4
				px-[1.1rem]
				py-[0.95rem]
				text-[0.92rem]
				font-semibold
				uppercase
				tracking-[0.26em]
				text-white
				text-center
				transition-colors
				duration-300
				hover:border-white/20
				hover:bg-white/5
				w-full
				max-w-88
				relative
			"
      aria-current={active ? "page" : undefined}
    >
      <span className="w-full text-center">{title}</span>
      <span
        className={
          active
            ? "absolute right-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-(--primary-light) shadow-[0_0_16px_rgba(157,92,255,0.9)]"
            : "absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-white/20"
        }
      />
    </motion.a>
  );
};

export default MobileNavItem;
