import { useEffect } from "react";
import linkedinIcon from "../../../assets/icons/linkedin.svg";
import githubIcon from "../../../assets/icons/github.svg";
import {
  Code2,
  BrainCircuit,
  Smartphone,
  BarChart3,
  Monitor,
  Code,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "./Footer.css";

/**
 * Footer — STACK Pvt Ltd
 * Same design tokens as the rest of the page (About / What We Do /
 * Projects / Team / Contact). Uses plain CSS (Footer.css) instead of
 * inline styles or Tailwind, so it drops into any React + Vite project.
 */

const SERVICES = [
  {
    label: "Web App Development",
    icon: Code2,
  },
  {
    label: "AI Integration & Automation",
    icon: BrainCircuit,
  },
  {
    label: "Mobile App Development",
    icon: Smartphone,
  },
  {
    label: "Data Analytics through Power BI",
    icon: BarChart3,
  },
  {
    label: "Data Analytics",
    icon: Monitor,
  },
  {
    label: "Custom Software Development",
    icon: Code,
  },
];
const COMPANY_LINKS = [
  { label: "Founders", href: "/founders" },
  { label: "What We Do", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];
const SOCIALS = [
  {
    icon: linkedinIcon,
    href: "https://www.linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: githubIcon,
    href: "https://github.com",
    label: "GitHub",
  },
];
function useBrandFonts() {
  useEffect(() => {
    const id = "stack-brand-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}

/** The stacked-triangle mark from the STACK logo, reused as a brand accent. */

export default function Footer() {
  useBrandFonts();
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer glass">
      {" "}
      <div className="footer-inner">
        {" "}
        {/* top: brand + newsletter */}
        <div className="footer-top">
          {" "}
          <div className="footer-brand">
            {" "}
            <div className="footer-logo-row">
              {" "}
              <a
                href="#"
                className="footer-logo-link"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <span className="footer-logo-text">AutoStack AI</span>
              </a>
            </div>{" "}
            <p className="footer-tagline">
              {" "}
              Trust <span className="dot">·</span> Build{" "}
              <span className="dot">·</span> Innovate{" "}
            </p>{" "}
            <p className="footer-blurb">
              {" "}
              A software house working across six disciplines — one team, end to
              end, from first sketch to production support.{" "}
            </p>{" "}
            <div className="footer-socials">
              {" "}
              {SOCIALS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`social-link ${label === "LinkedIn" ? "social-link--linkedin" : ""}`}
                >
                  <img
                    src={icon}
                    alt={`${label} icon`}
                    className="footer-social-icon"
                  />
                </a>
              ))}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="footer-divider" /> {/* middle: link columns */}
        <div className="footer-columns">
          {" "}
          <div className="footer-col">
            {" "}
            <h4 className="footer-heading">Services</h4>{" "}
            <ul className="footer-list">
              {" "}
              {SERVICES.map(({ label, icon: Icon }) => (
                <li key={label}>
                  {" "}
                  <a href="/services" className="footer-link">
                    {" "}
                    <Icon
                      size={14}
                      strokeWidth={1.8}
                      className="footer-link-icon"
                    />{" "}
                    {label}
                  </a>{" "}
                </li>
              ))}
            </ul>{" "}
          </div>{" "}
          <div className="footer-col">
            {" "}
            <h4 className="footer-heading">Company</h4>{" "}
            <ul className="footer-list">
              {" "}
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  {" "}
                  <a href={href} className="footer-link">
                    {" "}
                    {label}
                  </a>{" "}
                </li>
              ))}
            </ul>{" "}
          </div>{" "}
          <div className="footer-col">
            {" "}
            <h4 className="footer-heading">Contact</h4>{" "}
            <ul className="footer-list">
              {" "}
              <li>
                {" "}
                <a href="mailto:info@stack.pk" className="footer-link">
                  {" "}
                  <Mail
                    size={14}
                    strokeWidth={1.8}
                    className="footer-link-icon"
                  />{" "}
                  info@stack.pk{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="tel:+923390086967" className="footer-link">
                  {" "}
                  <Phone
                    size={14}
                    strokeWidth={1.8}
                    className="footer-link-icon"
                  />{" "}
                  +92 339 0086967{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <span className="footer-link footer-link--static">
                  {" "}
                  <MapPin
                    size={14}
                    strokeWidth={1.8}
                    className="footer-link-icon"
                  />{" "}
                  DHA Residencia DHA 2, Islamabad{" "}
                </span>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className="footer-divider" /> {/* bottom bar */}
        <div className="footer-bottom">
          {" "}
          <span className="footer-copy">
            {" "}
            © {year}
            AUTOSTACK AI Pvt Ltd. All rights reserved.{" "}
          </span>{" "}
          <div className="footer-legal">
            {" "}
            <a href="#" className="footer-legal-link">
              {" "}
              Privacy Policy{" "}
            </a>{" "}
            <span className="footer-legal-sep">•</span>{" "}
            <a href="#" className="footer-legal-link">
              {" "}
              Terms of Service{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
