import { clinic } from "../data/clinic";

export function getCanonicalUrl(
  path = "/"
) {
  const baseUrl =
    clinic.website.replace(/\/$/, "");

  if (path === "/") {
    return `${baseUrl}/`;
  }

  return `${baseUrl}${path}`;
}

export function getAbsoluteImageUrl(
  imagePath
) {
  if (!imagePath) {
    return "";
  }

  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  return `${clinic.website.replace(
    /\/$/,
    ""
  )}${imagePath}`;
}