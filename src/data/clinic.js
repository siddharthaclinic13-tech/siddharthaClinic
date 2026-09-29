export const clinic = {
  /*
   * =====================================================
   * BASIC CLINIC INFORMATION
   * =====================================================
   */

  name: "Siddhartha Super Speciality Dental Hospital",

  shortName: "Siddhartha Dental Hospital",

  description: "",

  /*
   * =====================================================
   * CONTACT INFORMATION
   * =====================================================
   *
   * Add only client-verified information.
   * Do not use placeholder phone numbers or emails.
   */

  phone: import.meta.env.VITE_CLINIC_PHONE || "",

  whatsapp: import.meta.env.VITE_CLINIC_WHATSAPP || "",

  email: import.meta.env.VITE_CLINIC_EMAIL || "",

  /*
   * =====================================================
   * WEBSITE
   * =====================================================
   *
   * Replace with the actual deployed website URL
   * before production.
   */

  website: "https://example.com",

  /*
   * =====================================================
   * ADDRESS
   * =====================================================
   */

  address: {
    street: "Beside Gemini Plaza, Opp. Sono Vision, Main Road",
    city: "Kakinada",
    state: "Andhra Pradesh",
    postalCode: "",
    country: "India",
    full: "Beside Gemini Plaza, Opp. Sono Vision, Main Road, Kakinada, Andhra Pradesh, India",
  },

  /*
   * =====================================================
   * BRAND ASSETS
   * =====================================================
   */

  logo: "/images/brand/logo.svg",

  favicon: "/favicon.svg",

  /*
   * =====================================================
   * HERO
   * =====================================================
   */

  hero: {
    eyebrow: "Siddhartha Super Speciality Dental Hospital",
    title: "Advanced Dental Care for a Healthy, Confident Smile",
    description: "",
    image: "/images/brand/clinic-hero.webp",
    imageAlt: "Siddhartha Super Speciality Dental Hospital in Kakinada",
  },

  /*
   * =====================================================
   * ABOUT
   * =====================================================
   */

  about: {
    introduction: "",
    mission: "",
    approach: "",
    patientCare: "",
    environment: "",
  },

  /*
   * =====================================================
   * GOOGLE MAPS
   * =====================================================
   */

  mapsUrl:
    "https://www.google.com/maps/search/Siddartha%20Super%20Speciality%20Dental%20Hospital/@16.959178924560547,82.2349853515625,17z?hl=en",

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.959178924560547!2d82.2349853515625!3d16.959178924560547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU3JzMzLjAiTiA4MsKwMTQnMDYuMCJF!5e0!3m2!1sen!2sin!4v1660000000000!5m2!1sen!2sin",

  /*
   * =====================================================
   * OPENING HOURS
   * =====================================================
   */

  hours: [],

  /*
   * =====================================================
   * SOCIAL MEDIA
   * =====================================================
   */

  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
};
