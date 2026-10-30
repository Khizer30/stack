import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";

const SearchButton = ({ open, onClick }) => {
  return (
    <motion.button
      type="button"
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className="
				grid
				ml-auto
				h-12
				w-12
				place-items-center
				rounded-full
				border
				border-white/10
				bg-white/5
				text-white
				shadow-[0_14px_34px_rgba(0,0,0,0.22)]
				transition-colors
				duration-300
				hover:bg-white/7
				lg:hidden
			"
    >
      <FiMenu className="text-xl" />
    </motion.button>
  );
};

export default SearchButton;
