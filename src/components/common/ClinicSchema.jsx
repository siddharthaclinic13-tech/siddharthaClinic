import { Helmet } from "react-helmet-async";

import { createClinicSchema } from "../../utils/schema";

export default function ClinicSchema() {
  const schema = createClinicSchema();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}