import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectSection";
import "./ProjectsSection.css";

const PROJECTS = [
  {
    number: "01",
    category: "Personal",
    name: "Forge",
    liveUrl: "https://forge-pink-seven.vercel.app/",
    col1Image1: "/Forge.png",
    col1Image2: "/Forge1.png",
    col2Image: "/Forge2.png",
  },
  {
    number: "02",
    category: "Personal",
    name: "LawLab",
    liveUrl: "https://lawlab-self.vercel.app",
    col1Image1: "/lawlab.png",
    col1Image2: "/lawlab1.png",
    col2Image: "/lawlab2.png",
  },
  {
    number: "03",
    category: "Personal · GenAI",
    name: "ResumeIQ",
    liveUrl: "https://resumeiq-harsh.vercel.app/",
    col1Image1: "/resumeiq-hero.png",
    col1Image2: "/resumeiq-feedback.png",
    col2Image: "/resumeiq-score.png",
  },
  {
    number: "04",
    category: "Personal · Design",
    name: "Notch",
    liveUrl: "https://notch-zeta.vercel.app/",
    col1Image1: "/notch-hero.png",
    col1Image2: "/notch-pricing.png",
    col2Image: "/notch-mockup.png",
  },
];

const ProjectCard = ({ project, index, total }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  return (
    <div
      ref={cardRef}
      className="project-card-wrapper"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.article style={{ scale }} className="project-card">
        <div className="project-header">
          <div className="project-info">
            <div className="project-number">{project.number}</div>
            <div className="project-text">
              <span className="project-category">{project.category}</span>
              <h3 className="project-name">{project.name}</h3>
            </div>
          </div>
          <div className="project-button">
            <LiveProjectButton href={project.liveUrl} />
          </div>
        </div>

        <div className="project-grid">
          <div className="project-left">
            <div className="project-image-small">
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="project-image-large">
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
          <div className="project-image-tall">
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default function ProjectsSection() {
  const containerRef = useRef(null);
  return (
    <section
      id="projects"
      className="projects-section"
      style={{ scrollMarginTop: "120px" }}
    >
      <FadeIn y={40}>
        <h2 className="projects-title">Products</h2>
      </FadeIn>
      <div ref={containerRef} className="projects-container">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}
