import { useState } from "react";
import "./TeamSection.css";
import BorderGlow from "../common/BorderGlow";
import zainImage from "../../assets/zain.jpeg";
import aseefImage from "../../assets/aseef.jpeg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import asadImage from "../../assets/Passport.png";

const TEAM = [
  {
    name: "Muhammad Zain Maqbool",
    role: "Full Stack Developer",
    domain: "Web Development",
    image: zainImage,
    bio: "Architects the systems the rest of the stack is built on.",
    links: {
      linkedin: "https://www.linkedin.com/in/muhammad-zain-maqbool-7b7127320",
      github: "https://github.com/chzain2005",
    },
  },
  {
    name: "Aseef Ahmed Khawaja",
    role: "Full Stack Developer & Graphic Designer",
    domain: "Web Development & Design",
    image: aseefImage,
    bio: "Turns machine learning research into production-ready tools.",
    links: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
  {
    name: "Asad Tariq",
    role: "Social Media Manager",
    domain: "Social Media Management",
    image: asadImage,
    bio: "Shapes visual identity across every client engagement.",
    links: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
];

function Avatar({ name, image }) {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  if (!image || failed) {
    return <div className="avatar-fallback">{initials}</div>;
  }

  return (
    <div className="avatar">
      <img src={image} alt={name} onError={() => setFailed(true)} />
    </div>
  );
}

function TeamCard({ member }) {
  return (
    <BorderGlow
      className="w-full"
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor="#0c0c11"
      borderRadius={14}
      glowRadius={28}
      glowIntensity={0.9}
      coneSpread={28}
    >
      <div className="team-card">
        <div className="domain-badge">
          <span>{member.domain}</span>
        </div>

        <div className="member-info">
          <Avatar name={member.name} image={member.image} />

          <div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        </div>

        <p className="member-bio">{member.bio}</p>

        <div className="social-links">
          <a
            href={member.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
          <a
            href={member.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub icon" />
          </a>
        </div>
      </div>
    </BorderGlow>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="team-label">
          <span className="team-line"></span>
          <span>The Team</span>
          <span className="team-line"></span>
        </div>

        <h2 className="team-title">Meet the People Behind the Build</h2>

        <p className="team-subtitle">
          Design <span className="dot">•</span> Code{" "}
          <span className="dot">•</span> Ship
        </p>

        <div className="team-grid">
          {TEAM.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        <div className="team-footer">
          <p>Want to build with us?</p>
        </div>
      </div>
    </section>
  );
}
