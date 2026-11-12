import type { Metadata } from "next";

export const siteUrl = "https://geofenceguardians.co.za";
export const siteName = "GeoFence Guardian";
export const playStoreUrl = "https://play.google.com/store/apps/details?id=com.geox.geofence";
export const rateAppUrl = `${playStoreUrl}&showAllReviews=true`;
export const repositoryUrl = "https://github.com/lvnhopendlovu-ctrl/GeoFence-Guardian-Website";
export const supportUrl = `${repositoryUrl}/issues/new`;
export const currentVersion = "8.1";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, siteUrl).href;
  const socialTitle = `${title} | ${siteName}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_ZA",
      images: [{
        url: `${siteUrl}/social-card.png`,
        width: 1734,
        height: 907,
        alt: `${siteName} — your safe zone, always on`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [`${siteUrl}/social-card.png`],
    },
  };
}
