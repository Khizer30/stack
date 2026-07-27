import { useEffect, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { sendTrainingInquiry } from "../lib/emailjs";
import "./EnrollmentModal.css";

const DEFAULT_MODE = "Online";

function Field({ label, error, children }) {
  return (
    <div className="enrollment-field">
      <label className="tp-field-label">{label}</label>
      {children}
      {error ? <span className="tp-field-error">{error}</span> : null}
    </div>
  );
}

export default function EnrollmentModal({ open, course, onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    courseName: course || "",
    education: "",
    learningMode: DEFAULT_MODE,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!open) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm((prev) => ({
      ...prev,
      courseName: course || prev.courseName || "",
      learningMode: prev.learningMode || DEFAULT_MODE,
    }));
    setErrors({});
    setStatus("idle");
    setSubmitError("");
  }, [open, course]);

  const update = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.fullName.trim())
      nextErrors.fullName = "Please enter your full name.";
    if (!form.email.trim())
      nextErrors.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      nextErrors.email = "Please enter a valid email.";
    if (!form.phoneNumber.trim())
      nextErrors.phoneNumber = "Please enter your phone number.";
    if (!form.courseName.trim())
      nextErrors.courseName = "Please select a course.";
    if (!form.education.trim())
      nextErrors.education = "Please share your education level.";
    if (!form.message.trim())
      nextErrors.message = "Please share a short note about your goals.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    setStatus("submitting");
    setSubmitError("");

    try {
      await sendTrainingInquiry({
        full_name: form.fullName,
        sender_name: form.fullName,
        name: form.fullName,
        email: form.email,
        sender_email: form.email,
        phone_number: form.phoneNumber,
        sender_phone: form.phoneNumber,
        course_name: form.courseName,
        course: form.courseName,
        education: form.education,
        learning_mode: form.learningMode,
        message: form.message,
        project_details: form.message,
        submitted_at: new Date().toLocaleString(),
      });

      setStatus("success");
      setForm({
        fullName: "",
        email: "",
        phoneNumber: "",
        courseName: course || "",
        education: "",
        learningMode: DEFAULT_MODE,
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setSubmitError(
        error?.message ||
          "We couldn't send your enrollment request. Please try again later.",
      );
    }
  };

  if (!open) return null;

  return (
    <div className="enrollment-modal-backdrop is-open" onClick={onClose}>
      <div
        className="enrollment-modal-card is-open"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-enrollment-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close enrollment form"
        >
          ×
        </button>

        <div className="modal-heading-wrap">
          <span className="tp-eyebrow-label">Enrollment request</span>
          <h2
            id="course-enrollment-title"
            className="tp-heading tp-heading--modal"
          >
            Reserve your seat
          </h2>
          <p className="tp-subheading tp-subheading--modal">
            Complete the form below and we will contact you with the next intake
            details.
          </p>
        </div>

        {status === "success" ? (
          <div className="tp-success-state">
            <CheckCircle2
              size={38}
              strokeWidth={1.6}
              className="tp-success-icon"
            />
            <h3 className="tp-success-title">Enrollment request sent</h3>
            <p className="tp-success-desc">
              Thanks for your interest. We will reach out shortly with course
              details and scheduling.
            </p>
            <button
              type="button"
              className="tp-success-retry"
              onClick={() => {
                setStatus("idle");
                setSubmitError("");
              }}
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form className="enrollment-form" onSubmit={handleSubmit} noValidate>
            <div className="enrollment-form-grid">
              <Field label="Full Name" error={errors.fullName}>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={update("fullName")}
                  placeholder="Your full name"
                  className={`tp-field-input${errors.fullName ? " tp-field-input--error" : ""}`}
                />
              </Field>

              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  className={`tp-field-input${errors.email ? " tp-field-input--error" : ""}`}
                />
              </Field>
            </div>

            <div className="enrollment-form-grid">
              <Field label="Phone Number" error={errors.phoneNumber}>
                <input
                  type="tel"
                  value={form.phoneNumber}
                  onChange={update("phoneNumber")}
                  placeholder="+92 3XX XXXXXXX"
                  className={`tp-field-input${errors.phoneNumber ? " tp-field-input--error" : ""}`}
                />
              </Field>

              <Field label="Course Name" error={errors.courseName}>
                <input
                  type="text"
                  value={form.courseName}
                  onChange={update("courseName")}
                  className={`tp-field-input${errors.courseName ? " tp-field-input--error" : ""}`}
                />
              </Field>
            </div>

            <div className="enrollment-form-grid">
              <Field label="Education" error={errors.education}>
                <input
                  type="text"
                  value={form.education}
                  onChange={update("education")}
                  placeholder="e.g. Bachelor in Computer Science"
                  className={`tp-field-input${errors.education ? " tp-field-input--error" : ""}`}
                />
              </Field>

              <Field label="Learning Mode">
                <select
                  value={form.learningMode}
                  onChange={update("learningMode")}
                  className="tp-field-input"
                >
                  <option value="Online">Online</option>
                  <option value="Physical">Physical</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </Field>
            </div>

            <Field label="Message" error={errors.message}>
              <textarea
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Tell us about your learning goals or experience level"
                className={`tp-field-input${errors.message ? " tp-field-input--error" : ""}`}
              />
            </Field>

            <button
              type="submit"
              className="tp-submit-btn"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Sending..."
                : "Send enrollment request"}
              {status !== "submitting" ? (
                <Send size={15} strokeWidth={2.2} />
              ) : null}
            </button>

            {status === "error" ? (
              <p className="tp-submit-error">{submitError}</p>
            ) : null}
          </form>
        )}
      </div>
    </div>
  );
}
