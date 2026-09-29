import { Helmet } from "react-helmet-async";

import { clinic } from "../../data/clinic";
import { getAbsoluteImageUrl } from "../../utils/seo";

export default function ServiceSchema({ service }) {
  if (!service) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",

    "@type": "MedicalProcedure",

    name: service.title,

    description:
      service.description ||
      service.shortDescription,

    provider: {
      "@type": "Dentist",

      name: clinic.name,

      url: clinic.website,
    },
  };

  if (service.image) {
    schema.image = getAbsoluteImageUrl(
      service.image
    );
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}