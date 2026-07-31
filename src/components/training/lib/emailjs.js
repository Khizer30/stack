import emailjs from "@emailjs/browser";

const trainingPublicKey = import.meta.env.VITE_TRAINING_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

emailjs.init(trainingPublicKey);

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_TRAINING_EMAILJS_SERVICE_ID || import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_TRAINING_EMAILJS_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  toEmail: import.meta.env.VITE_TRAINING_EMAILJS_TO_EMAIL || import.meta.env.VITE_EMAILJS_TO_EMAIL || "arzain.maqboolse@gmail.com"
};

export const sendTrainingInquiry = async (payload) => {
  if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId) {
    throw new Error("EmailJS is not configured yet.");
  }

  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    {
      ...payload,
      to_email: EMAILJS_CONFIG.toEmail
    },
    trainingPublicKey
  );
};
