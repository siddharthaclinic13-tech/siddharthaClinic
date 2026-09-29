import { Helmet } from "react-helmet-async";

import { clinic } from "../../data/clinic";
import { getCanonicalUrl, getAbsoluteImageUrl } from "../../utils/seo";

export default function SEO({
  title,
  description,
  path = "/",
  image = clinic.logo,
  noIndex = false,
}) {
  const canonicalUrl = getCanonicalUrl(path);

  const absoluteImageUrl = getAbsoluteImageUrl(image);

  return (
    <Helmet>

      {/* =================================================
          BASIC SEO
          ================================================= */}

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content={
          noIndex
            ? "noindex,nofollow"
            : "index,follow"
        }
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* =================================================
          OPEN GRAPH
          ================================================= */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      {absoluteImageUrl && (
        <meta
          property="og:image"
          content={absoluteImageUrl}
        />
      )}

      <meta
        property="og:site_name"
        content={clinic.name}
      />

      <meta
        property="og:locale"
        content="en_IN"
      />

      {/* =================================================
          TWITTER
          ================================================= */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      {absoluteImageUrl && (
        <meta
          name="twitter:image"
          content={absoluteImageUrl}
        />
      )}

    </Helmet>
  );
}