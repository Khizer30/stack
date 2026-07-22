import { useRef } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const CTAButton = ({
  href = "#contact",
  label = "Start a Project",
  onClick,
  target,
  rel,
  variant = "desktop",
}) => {
  const isMobileVariant = variant === "mobile";
  const buttonRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.3 });

  const handleMouseMove = (event) => {
    if (isMobileVariant) {
      return;
    }

    if (!buttonRef.current) {
      return;
    }

    const rect = buttonRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.22);
    y.set(offsetY * 0.22);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={isMobileVariant ? undefined : handleMouseMove}
      onMouseLeave={isMobileVariant ? undefined : resetPosition}
      style={isMobileVariant ? undefined : { x: springX, y: springY }}
      whileHover={isMobileVariant ? undefined : { scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={
        isMobileVariant
          ? "navbar-cta-button--mobile group inline-flex w-full max-w-40 items-center translate-y-5 justify-center rounded-full border border-[rgba(157,92,255,0.35)] bg-[linear-gradient(135deg,rgba(123,46,255,0.95),rgba(73,23,200,0.95))] px-6 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_20px_45px_rgba(123,46,255,0.32)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(123,46,255,0.38)]"
          : "navbar-cta-button group inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(157,92,255,0.35)] bg-[linear-gradient(135deg,rgba(123,46,255,0.95),rgba(73,23,200,0.95))] px-7 py-4 text-[0.92rem] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_20px_45px_rgba(123,46,255,0.32)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(123,46,255,0.38)]"
      }
    >
      <span className="whitespace-pre-line text-center leading-tight">
        {label}
      </span>
      <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
};

export default CTAButton;
