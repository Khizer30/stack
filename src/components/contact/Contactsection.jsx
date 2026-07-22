import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Globe,
  Mail as MailIcon,
  Phone as PhoneIcon,
} from "lucide-react";
import { sendContactEmail } from "@/lib/emailjs";
import "./Contactsection.css";

const SERVICES = [
  "Web App Development",
  "AI Integration & Automation",
  "Mobile App Development",
  "Data Analytics through Power BI",
  "Data Analytics",
  "Custom Software Development",
  "Something else",
];

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "info@stack.pk",
    href: "mailto:info@stack.pk",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 339 0086967",
    href: "tel:+923390086967",
  },
  {
    icon: MapPin,
    label: "Studio",
    value: "DHA Residencia DHA 2, Islamabad",
    href: null,
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

function Field({ label, error, children, className }) {
  return (
    <div className={`contact-field ${className || ""}`}>
      <label className="contact-field-label">{label}</label>
      {children}
      {error && <span className="contact-field-error">{error}</span>}
    </div>
  );
}

export default function ContactSection() {
  useBrandFonts();

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: SERVICES[0],
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "That email doesn't look right.";
    if (!form.message.trim())
      next.message = "Tell us a little about the project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions while the request is in flight.
    if (isSubmitting || status === "submitting") return;

    // Validate the required fields before sending anything.
    if (!validate()) return;

    setErrorMessage("");
    setStatus("submitting");
    setIsSubmitting(true);

    try {
      // Prepare the payload for EmailJS.
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        service: form.service,
        message: form.message,
        submitted_at: new Date().toLocaleString(),
        // Keep the honeypot field out of the email payload.
        website: form.website,
      };

      // Send the form data to EmailJS.
      await sendContactEmail(templateParams);

      // Reset the form after a successful submission.
      setStatus("success");
      setErrors({});
      setForm({
        name: "",
        email: "",
        service: SERVICES[0],
        message: "",
        website: "",
      });
    } catch (error) {
      // Keep the existing UI intact while surfacing a clear error.
      setStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-eyebrow">
          <span className="contact-divider" />
          <span className="contact-eyebrow-text">Get In Touch</span>
          <span className="contact-divider" />
        </div>

        <h2 className="contact-title">Let's build something together</h2>

        <p className="contact-subtitle">
          Connect<span className="contact-accent">·</span> Collaborate{" "}
          <span className="contact-accent">·</span> Create
        </p>

        <div className="contact-panel-wrap">
          <div className="contact-info-panel">
            <div className="contact-info-glow" />
            <div>
              <h3 className="contact-info-title">Talk to the team</h3>
              <p className="contact-info-copy">
                Tell us what you're building and which discipline it needs —
                we'll reply within one business day with next steps.
              </p>

              <div className="contact-contact-list">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="contact-info-item">
                      <div className="contact-icon-wrapper">
                        <Icon size={17} strokeWidth={1.8} />
                      </div>
                      <div className="contact-info-text">
                        <div className="contact-info-label">{item.label}</div>
                        <div className="contact-info-value">{item.value}</div>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="contact-info-link"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="contact-info-link">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="contact-social-links">
              {[
                {
                  icon: Globe,
                  href: "https://stack.pk",
                  ariaLabel: "Website",
                },
                {
                  icon: MailIcon,
                  href: "mailto:info@stack.pk",
                  ariaLabel: "Email",
                },
                {
                  icon: PhoneIcon,
                  href: "tel:+923390086967",
                  ariaLabel: "Phone",
                },
              ].map(({ icon: SocialIcon, href, ariaLabel }) => (
                <a
                  key={ariaLabel}
                  href={href}
                  className="contact-social-link"
                  aria-label={ariaLabel}
                >
                  <SocialIcon size={18} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-panel">
            {status === "success" ? (
              <div className="contact-success-state">
                <CheckCircle2 size={40} strokeWidth={1.6} className="mb-4" />
                <h3 className="contact-success-title">Message sent</h3>
                <p className="contact-success-copy">
                  Thanks for reaching out — we'll get back to you within one
                  business day.
                </p>
                <button
                  className="contact-secondary-button"
                  onClick={() => setStatus("idle")}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-row">
                  <Field label="Name" error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      className={`contact-input ${errors.name ? "input-error" : ""}`}
                    />
                  </Field>

                  <Field label="Email" error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@company.com"
                      className={`contact-input ${errors.email ? "input-error" : ""}`}
                    />
                  </Field>
                </div>

                <div className="mb-5">
                  <Field label="Which service do you need?">
                    <select
                      value={form.service}
                      onChange={update("service")}
                      className="contact-select"
                    >
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="mb-7">
                  <Field
                    label="Project details"
                    error={errors.message}
                    className="project-field"
                  >
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="What are you building? What's the timeline?"
                      className={`contact-textarea ${errors.message ? "input-error" : ""}`}
                    />
                  </Field>
                </div>

                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={update("website")}
                  autoComplete="off"
                  tabIndex={-1}
                  style={{ display: "none" }}
                />

                {status === "error" && errorMessage ? (
                  <div className="contact-form-error">{errorMessage}</div>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "submitting" || isSubmitting}
                  className="contact-submit"
                >
                  {status === "submitting" || isSubmitting
                    ? "Sending..."
                    : "Send message"}
                  <Send size={15} strokeWidth={2.2} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
