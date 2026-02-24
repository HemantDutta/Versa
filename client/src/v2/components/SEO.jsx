import { Helmet } from "react-helmet-async";

const SITE_NAME = "Versa";
const SITE_URL = "https://versacarousel.vercel.app"; // update when domain changes
const DEFAULT_IMAGE = `${SITE_URL}/og-cover.png`;

/**
 * SEO — drop-in Helmet wrapper for per-page meta, OG, Twitter, canonical, and JSON-LD.
 *
 * Usage:
 *   <SEO
 *     title="My Page"
 *     description="Short description"
 *     path="/my-page"
 *     type="article"             // optional, default "website"
 *     image="/og-my-page.png"    // optional, default og-cover.png
 *     jsonLd={{ ... }}           // optional JSON-LD object
 *   />
 */
const SEO = ({
  title,
  description,
  path = "/",
  type = "website",
  image,
  jsonLd,
}) => {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Free LinkedIn Carousel Generator from Markdown`;
  const url = `${SITE_URL}${path}`;
  const img = image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : DEFAULT_IMAGE;

  return (
    <Helmet>
      {/* base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {/* JSON-LD structured data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
