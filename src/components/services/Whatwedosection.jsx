import {
  Code2,
  BrainCircuit,
  Smartphone,
  BarChart3,
  Monitor,
  Code,
  Check,
} from "lucide-react";
import BorderGlow from "../common/BorderGlow";
import "./Whatwedosection.css";

/**
 * WhatWeDoSection — STACK Pvt Ltd
 * Uses external CSS (WhatWeDoSection.css)
 */

const SERVICES = [
  {
    title: "Web App Development",
    icon: Code2,
    description:
      "From concept to launch, we build web applications that are fast, scalable, and user-friendly.",
    points: [
      "React / Next.js front-ends",
      "Node & API architecture",
      "Performance & SEO tuning",
    ],
  },
  {
    title: "AI Integration & Automation",
    icon: BrainCircuit,
    description:
      "Automation, AI, and machine learning solutions that streamline operations and unlock new capabilities.",
    points: [
      "Custom AI & ML models",
      "Process automation & optimization",
      "Data-driven insights & analytics",
    ],
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description:
      "We create mobile applications that deliver seamless experiences across iOS and Android platforms.",
    points: [
      "Cross-platform mobile apps",
      "Native iOS & Android development",
      "App store deployment & maintenance",
    ],
  },
  {
    title: "Data Analytics through Power BI",
    icon: BarChart3,
    description:
      "Data visualization and analytics workflows built with Power BI for actionable business intelligence.",
    points: [
      "Dashboard design & insights",
      "Data modeling & transformation",
      "Report publishing & automation",
    ],
  },
  {
    title: "Data Analytics",
    icon: Monitor,
    description:
      "We provide comprehensive data analytics services to help businesses make informed decisions and drive growth.",
    points: [
      "Data collection & cleaning",
      "Statistical analysis & reporting",
      "Business intelligence & insights",
    ],
  },
  {
    title: "Custom Software Development",
    icon: Code,
    description:
      "Bespoke software solutions tailored to your business goals, from enterprise systems to SaaS platforms.",
    points: [
      "Full-stack application development",
      "API design & integration",
      "Scalable system architecture",
    ],
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <BorderGlow
      className="w-full"
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor="#0c0c11"
      borderRadius={18}
      glowRadius={30}
      glowIntensity={0.9}
      coneSpread={28}
    >
      <div className="service-card">
        <div className="service-icon-box">
          <Icon size={22} strokeWidth={1.8} color="#a78bfa" />
        </div>

        <h3 className="service-title">{service.title}</h3>

        <p className="service-description">{service.description}</p>

        <ul className="service-list">
          {service.points.map((point) => (
            <li key={point} className="service-item">
              <Check size={14} strokeWidth={2.5} className="service-check" />

              <span className="service-text">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </BorderGlow>
  );
}

export default function WhatWeDoSection() {
  return (
    <section id="services" className="what-we-do">
      <div className="what-we-do-container">
        {/* Eyebrow */}
        <div className="what-we-do-eyebrow">
          <span className="what-we-do-line"></span>

          <span className="what-we-do-label">What We Do</span>

          <span className="what-we-do-line"></span>
        </div>

        {/* Heading */}
        <h2 className="what-we-do-title">Six Disciplines, One Stack</h2>

        <p className="what-we-do-subtitle">
          Trust <span className="what-we-do-dot">·</span> Build{" "}
          <span className="what-we-do-dot">·</span> Innovate
        </p>

        {/* Services */}
        <div className="what-we-do-grid">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
