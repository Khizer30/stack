import emailjs from "@emailjs/browser";

// Load EmailJS once when the module is imported.
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
};

export const sendContactEmail = async (payload) => {
  if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId) {
    throw new Error("EmailJS is not configured yet.");
  }

  // Send only to the owner inbox using the configured EmailJS template.
  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    payload,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  );
};
