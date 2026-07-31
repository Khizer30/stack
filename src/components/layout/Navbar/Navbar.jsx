import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useNavbar from "../../../hooks/useNavbar";
import CTAButton from "./CTAButton";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import SearchButton from "./SearchButton";
import navLinks, { trainingSectionLinks } from "./navLinksData";

const Navbar = () => {
  const scrolled = useNavbar();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#top");
  const navigate = useNavigate();
  const location = useLocation();
  const isTrainingPage = location.pathname === "/training";
  const activeHref = isTrainingPage ? activeSection : location.pathname;
  const visibleLinks = isTrainingPage ? trainingSectionLinks : navLinks;

  useEffect(() => {
    if (!isTrainingPage) {
      return undefined;
    }

    const updateActiveSection = () => {
      const sections = ["#top", "#course-catalog", "#faculty", "#campus-experience", "#get-in-touch"];
      const offset = window.scrollY + 180;
      let currentSection = "#top";

      sections.forEach((sectionId) => {
        const section = document.querySelector(sectionId);
        if (section && section.offsetTop <= offset) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isTrainingPage]);

  const handleNavigate = (href, event) => {
    if (event) {
      event.preventDefault();
    }

    if (typeof href === "string" && href.startsWith("#")) {
      setActiveSection(href);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMobileOpen(false);
      return;
    }

    if (typeof href === "string" && href.startsWith("/")) {
      if (href === location.pathname) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(href);
      }
    }

    setMobileOpen(false);
  };

  return (
    <header className="navbar-shell navbar-shell__header fixed left-0 top-0 z-50 w-full">
      <motion.div
        initial={{ y: -28, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="navbar-shell__inner"
      >
        <div className="navbar-shell__row grid grid-cols-[auto_minmax(0,1fr)_auto] items-center">
          <div className="navbar-logo flex items-center">
            <Logo />
          </div>

          <motion.div
            animate={{
              borderRadius: scrolled ? 999 : 34,
              paddingBlock: scrolled ? 14 : 18,
              paddingInline: scrolled ? 18 : 24,
              scale: scrolled ? 0.994 : 1,
              y: scrolled ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="
              navbar-center
              navbar-center__pill
              glass
              relative
              hidden
              min-w-0
              items-center
              justify-center
              overflow-visible
              border-white/10
              bg-[linear-gradient(180deg,rgba(18,18,26,0.84),rgba(8,8,12,0.7))]
              shadow-[0_20px_65px_rgba(0,0,0,0.34)]
              lg:flex
            "
          >
            <NavLinks links={visibleLinks} activeHref={activeHref} onNavigate={handleNavigate} />
          </motion.div>

          <div className="navbar-actions flex items-center justify-self-end min-w-0">
            <div className="hidden lg:flex min-w-0">
              <CTAButton href="/training" label={"Trainings &\nWorkshops"} variant="desktop" target="_blank" rel="noopener noreferrer" />
            </div>

            <SearchButton open={mobileOpen} onClick={() => setMobileOpen((current) => !current)} />
          </div>
        </div>

        <MobileMenu open={mobileOpen} activeHref={activeHref} links={visibleLinks} onNavigate={handleNavigate} onClose={() => setMobileOpen(false)} />
      </motion.div>
    </header>
  );
};

export default Navbar;
