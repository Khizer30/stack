import { useEffect, useState } from "react";
import {
  Code2,
  BrainCircuit,
  PenTool,
  Clapperboard,
  Monitor,
  Sofa,
  SplinePointer,
  Layers,
  Wifi,
  Computer,
  ParkingCircle,
  ShieldCheck,
  Mail,
  TvMinimalPlay,
  Phone,
  Terminal,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import "./TrainingsAndWorkshops.css";
import EnrollmentModal from "./components/EnrollmentModal";
import { sendTrainingInquiry } from "./lib/emailjs";
import mubeenImg from "../../src/assets/1.png";
import hamzaImg from "../../src/assets/2.png";
import khizerImg from "../../src/assets/khizer.webp";
import meesumImg from "../../src/assets/meesum.jpeg";
/**
 * TrainingPage — STACK Pvt Ltd
 * A single-page "Training & Workshops" experience: Hero -> Course Catalog
 * -> Faculty -> Campus Experience -> Get In Touch. Same brand tokens as
 * the rest of the site (see TrainingPage.css). Plain CSS, no Tailwind
 * dependency — just drop the two files in and render <TrainingPage />.
 */

const COURSES = [
  {
    icon: Terminal,
    level: "6 Months",
    title: "AI Mastery Program",
    description:
      "Learn programming from the fundamentals to advanced concepts and build real-world AI models and intelligent applications.",
  },
  {
    icon: Layers,
    level: "6 Months",
    title: "Full Stack Web Development",
    description:
      "Master frontend, backend, databases, APIs, and modern development tools to build complete professional web applications.",
  },
  {
    icon: BrainCircuit,
    level: "2 Months",
    title: "AI Prompt Engineering",
    description:
      "Learn to write powerful prompts, use advanced AI tools, and create reliable outputs for real-world tasks.",
  },
  {
    icon: Clapperboard,
    level: "4 Months",
    title: "Video Editing & Content Creation ",
    description:
      "Master CapCut, Premiere Pro, After Effects, scripting, recording, storytelling, and content creation for social media.",
  },
  {
    icon: TvMinimalPlay,
    level: "3 Months",
    title: "Digital Marketing",
    description:
      "Learn social media marketing, SEO, content strategy, advertising, audience growth, and digital campaigns for businesses.",
  },
  {
    icon: Code2,
    level: "3 Months",
    title: "Advanced Python Programming",
    description:
      " Master advanced Python programming, automation, problem-solving, and real-world application development through practical projects.",
  },
  {
    icon: Computer,
    level: "3 Months",
    title: "Professional IT Skills",
    description:
      "Master typing, Microsoft Word, Excel, PowerPoint, essential computer skills, and practical AI tools for work.",
  },
  {
    icon: PenTool,
    level: "2 Months",
    title: "Client Acquisition & Freelancing",
    description:
      "Learn LinkedIn outreach, lead generation, freelancing, client communication, proposals, follow-ups, and strategies to win clients.",
  },
];

const FACULTY = [
  {
    name: "Mubeen Tariq",
    designation: "Motion Animations & Marketing Trainer",
    experience: "4+ years experience",
    image: mubeenImg,
  },
  {
    name: "Muhammad Hamza",
    designation: "AI & Data Science/Data Analytics Trainer",
    experience: "4+ years experience",
    image: hamzaImg,
  },
  {
    name: "Muhammad Khizer",
    designation: "Machine Learning & Web Development Trainer",
    experience: "4+ years experience",
    image: khizerImg,
  },
  {
    name: "Meesum Raza",
    designation: "IT & Freelancing Trainer",
    experience: "4+ years experience",
    image: meesumImg,
  },
];

const AMENITIES = [
  {
    icon: Sofa,
    title: "Student Lounge",
    description:
      "A comfortable space to relax, collaborate, or review notes between sessions.",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description:
      "Reliable, fast connectivity across the whole campus for labs and live projects.",
  },
  {
    icon: ParkingCircle,
    title: "Free Parking",
    description:
      "Dedicated, secure parking available at no extra cost for every student.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description:
      "Round-the-clock on-site security so you can focus on learning, not worrying.",
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
function StackMark({ size = 34 }) {
  const bar = (w, y, opacity) => (
    <rect
      x={(64 - w) / 2}
      y={y}
      width={w}
      height={9}
      rx={1.5}
      fill="#7c3aed"
      opacity={opacity}
    />
  );
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bar(18, 8, 1)}
      {bar(30, 22, 0.85)}
      {bar(42, 36, 0.7)}
      {bar(54, 50, 0.55)}
    </svg>
  );
}

function SectionHeader({ eyebrow, heading, subheading, tagline }) {
  return (
    <>
      <div className="tp-eyebrow">
        <span className="tp-eyebrow-line" />
        <span className="tp-eyebrow-label">{eyebrow}</span>
        <span className="tp-eyebrow-line" />
      </div>
      <h2 className="tp-heading">{heading}</h2>
      {subheading && <p className="tp-subheading">{subheading}</p>}
      {tagline && (
        <p className="tp-tagline">
          Learn <span className="dot">·</span> Build{" "}
          <span className="dot">·</span> Innovate
        </p>
      )}
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="tp-hero" id="top">
      <div className="tp-hero-mark">
        <StackMark size={40} />
      </div>
      <h1 className="tp-hero-title">Training &amp; Workshops</h1>
      <p className="tp-hero-subtitle">
        Enjoy the STACK experience in every training section.
      </p>
      <a href="#course-catalog" className="tp-hero-cta">
        Explore Courses
        <ArrowRight size={15} strokeWidth={2.2} />
      </a>
    </section>
  );
}

/* ---------------- Course Catalog ---------------- */
function CourseCatalog({ onEnroll }) {
  return (
    <section className="tp-section" id="course-catalog">
      <div className="tp-inner">
        <SectionHeader
          eyebrow="Course Catalog"
          heading="Pick your track"
          subheading="Five disciplines, structured into real courses — built and taught by the same people who do this work daily."
        />
        <div className="tp-grid tp-grid--3">
          {COURSES.map((course, index) => {
            const Icon = course.icon;
            const isLastCard = index === COURSES.length - 1;
            return (
              <div
                className={`tp-card tp-course-card${isLastCard ? " course-card--last" : ""}`}
                key={course.title}
              >
                <div className="course-icon-wrap">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <span className="course-level">{course.level}</span>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.description}</p>
                <div className="course-meta">
                  <span>
                    <strong>{course.duration}</strong>
                  </span>
                  <span>{course.format}</span>
                </div>
                <div className="course-actions">
                  <button
                    type="button"
                    className="course-enroll-btn"
                    onClick={() => onEnroll(course.title)}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Faculty ---------------- */
function FacultyAvatar({ name, image }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="faculty-avatar-wrap">
      {!failed ? (
        <img
          src={image}
          alt={name}
          className="faculty-avatar"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="faculty-avatar-fallback">{initials}</div>
      )}
    </div>
  );
}

function Faculty() {
  return (
    <section className="tp-section tp-section--alt" id="faculty">
      <div className="tp-inner">
        <SectionHeader
          eyebrow="Faculty"
          heading="Learn from people who've shipped"
          subheading="Every instructor teaches the same discipline they work in day to day."
        />
        <div className="tp-grid tp-grid--4">
          {FACULTY.map((member) => (
            <div className="tp-card faculty-card" key={member.name}>
              <FacultyAvatar name={member.name} image={member.image} />
              <h3 className="faculty-name">{member.name}</h3>
              <p className="faculty-role">{member.designation}</p>
              <span className="faculty-exp">{member.experience}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Campus Experience ---------------- */
function CampusExperience() {
  return (
    <section className="tp-section" id="campus-experience">
      <div className="tp-inner">
        <SectionHeader
          eyebrow="Student Amenities"
          heading="Built for focused, comfortable learning"
        />
        <div className="tp-grid tp-grid--4">
          {AMENITIES.map((item) => {
            const Icon = item.icon;
            return (
              <div className="tp-card amenity-card" key={item.title}>
                <div className="amenity-icon-wrap">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="amenity-title">{item.title}</h3>
                <p className="amenity-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Get In Touch ---------------- */
function Field({ label, error, children }) {
  return (
    <div className="tp-field">
      <label className="tp-field-label">{label}</label>
      {children}
      {error && <span className="tp-field-error">{error}</span>}
    </div>
  );
}

function GetInTouch({ initialCourse, sectionRef }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: initialCourse || COURSES[0].title,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [submitError, setSubmitError] = useState("");

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "That email doesn't look right.";
    if (!form.message.trim())
      next.message = "Tell us a little about what you're looking for.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setSubmitError("");

    try {
      await sendTrainingInquiry({
        sender_name: form.name,
        sender_email: form.email,
        sender_phone: form.phone,
        phone: form.phone,
        name: form.name,
        from_name: form.name,
        email: form.email,
        from_email: form.email,
        reply_to: form.email,
        course_name: form.course,
        course: form.course,
        service: form.course,
        service_name: form.course,
        message: form.message,
        project_details: form.message,
        submitted_at: new Date().toLocaleString(),
      });

      setStatus("success");
      setErrors({});
      setForm({
        name: "",
        phone: "",
        email: "",
        course: COURSES[0].title,
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setSubmitError(
        error?.message || "Unable to send inquiry. Please try again later.",
      );
    }
  };

  return (
    <section
      className="tp-section tp-section--alt"
      id="get-in-touch"
      ref={sectionRef}
    >
      <div className="tp-inner">
        <SectionHeader
          eyebrow="Get In Touch"
          heading="Ready to start learning?"
          subheading="Tell us which course you're interested in and we'll get back to you with the next intake date."
        />

        <div className="contact-grid">
          {/* left: contact info + map */}
          <div className="contact-info-card">
            <h3 className="contact-info-heading">Contact info</h3>
            <p className="contact-info-blurb">
              Reach out directly, or visit the campus — we're happy to walk you
              through the course that fits best.
            </p>

            <div className="contact-info-list">
              <a href="mailto:info@stack.pk" className="contact-info-item">
                <span className="contact-info-icon">
                  <Mail size={16} strokeWidth={1.8} />
                </span>
                <span>
                  <span
                    className="contact-info-label"
                    style={{ display: "block" }}
                  >
                    Email
                  </span>
                  <span className="contact-info-value">info@stack.pk</span>
                </span>
              </a>
              <a href="tel:+923390086967" className="contact-info-item">
                <span className="contact-info-icon">
                  <Phone size={16} strokeWidth={1.8} />
                </span>
                <span>
                  <span
                    className="contact-info-label"
                    style={{ display: "block" }}
                  >
                    Phone
                  </span>
                  <span className="contact-info-value">+92 339 0086967</span>
                </span>
              </a>
              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <MapPin size={16} strokeWidth={1.8} />
                </span>
                <span>
                  <span
                    className="contact-info-label"
                    style={{ display: "block" }}
                  >
                    Campus
                  </span>
                  <span className="contact-info-value">
                    DHA Residencia DHA 2, Islamabad
                  </span>
                </span>
              </div>
            </div>

            <div className="contact-map-wrap">
              <iframe
                title="STACK Pvt Ltd"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3326.191587723866!2d73.1541659!3d33.5224041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed34f99ca26f%3A0xc48e9050df6fb11!2sSTACK%20PVT%20LTD!5e0!3m2!1sen!2s!4v1784790260571!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          {/* right: form */}
          <div className="contact-form-card">
            {status === "success" ? (
              <div className="tp-success-state">
                <CheckCircle2
                  size={38}
                  strokeWidth={1.6}
                  className="tp-success-icon"
                />
                <h3 className="tp-success-title">Inquiry sent</h3>
                <p className="tp-success-desc">
                  Thanks for reaching out — we'll follow up with course details
                  and the next intake date shortly.
                </p>
                <button
                  className="tp-success-retry"
                  onClick={() => setStatus("idle")}
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="contact-form-row">
                  <Field label="Name" error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      className={`tp-field-input${errors.name ? " tp-field-input--error" : ""}`}
                    />
                  </Field>
                  <Field label="Phone number" error={errors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+92 3XX XXXXXXX"
                      className={`tp-field-input${errors.phone ? " tp-field-input--error" : ""}`}
                    />
                  </Field>
                </div>

                <div className="contact-form-row">
                  <Field label="Email" error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                      className={`tp-field-input${errors.email ? " tp-field-input--error" : ""}`}
                    />
                  </Field>
                  <Field label="Course of interest">
                    <select
                      value={form.course}
                      onChange={update("course")}
                      className="tp-field-input"
                    >
                      {COURSES.map((c) => (
                        <option key={c.title} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <Field label="Message" error={errors.message}>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="What would you like to know?"
                      className={`tp-field-input${errors.message ? " tp-field-input--error" : ""}`}
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="tp-submit-btn"
                >
                  {status === "submitting" ? "Sending..." : "Send inquiry"}
                  {status !== "submitting" && (
                    <Send size={15} strokeWidth={2.2} />
                  )}
                </button>
                {status === "error" && (
                  <p className="tp-submit-error">{submitError}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
export default function TrainingPage() {
  useBrandFonts();
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "LEARN WITH STACK";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const [selectedCourse, setSelectedCourse] = useState(COURSES[0].title);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEnrollment = (courseTitle) => {
    setSelectedCourse(courseTitle);
    setIsModalOpen(true);
  };

  const closeEnrollment = () => setIsModalOpen(false);

  return (
    <div className="training-page">
      <Hero />
      <CourseCatalog onEnroll={openEnrollment} />
      <Faculty />
      <CampusExperience />
      <GetInTouch />
      <EnrollmentModal
        open={isModalOpen}
        course={selectedCourse}
        onClose={closeEnrollment}
      />
    </div>
  );
}
