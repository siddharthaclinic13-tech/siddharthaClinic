import { clinic } from "../data/clinic";
import { getAbsoluteImageUrl } from "./seo";

export function createClinicSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",

    name: clinic.name,

    url: clinic.website,

    address: {
      "@type": "PostalAddress",

      streetAddress: clinic.address.street,

      addressLocality: clinic.address.city,

      addressRegion: clinic.address.state,

      addressCountry: clinic.address.country,
    },
  };

  /* =====================================================
     DESCRIPTION
     ===================================================== */

  if (clinic.description) {
    schema.description = clinic.description;
  }

  /* =====================================================
     PHONE
     ===================================================== */

  if (clinic.phone) {
    schema.telephone = clinic.phone;
  }

  /* =====================================================
     EMAIL
     ===================================================== */

  if (clinic.email) {
    schema.email = clinic.email;
  }

  /* =====================================================
     LOGO
     ===================================================== */

  if (clinic.logo) {
    schema.logo = getAbsoluteImageUrl(
      clinic.logo
    );
  }

  /* =====================================================
     POSTAL CODE
     ===================================================== */

  if (clinic.address.postalCode) {
    schema.address.postalCode =
      clinic.address.postalCode;
  }

  /* =====================================================
     GOOGLE MAPS
     ===================================================== */

  if (clinic.mapsUrl) {
    schema.hasMap = clinic.mapsUrl;
  }

  /* =====================================================
     OPENING HOURS
     ===================================================== */

  if (clinic.hours?.length) {
    schema.openingHoursSpecification =
      clinic.hours.map((item) => ({
        "@type": "OpeningHoursSpecification",

        dayOfWeek: item.dayOfWeek,

        opens: item.opens,

        closes: item.closes,
      }));
  }

  /* =====================================================
     SOCIAL PROFILES
     ===================================================== */

  const sameAs = Object.values(
    clinic.social || {}
  ).filter(Boolean);

  if (sameAs.length) {
    schema.sameAs = sameAs;
  }

  return schema;
}