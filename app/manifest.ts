import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GeoFence Guardian",
    short_name: "GeoFence",
    description: "Privacy-first geofence protection for Android.",
    start_url: "/",
    display: "standalone",
    background_color: "#101617",
    theme_color: "#101617",
    icons: [{ src: "/favicon.png", sizes: "512x512", type: "image/png" }],
    shortcuts: [
      { name: "Safety tools", short_name: "Tools", url: "/tools", icons: [{ src: "/favicon.png", sizes: "512x512", type: "image/png" }] },
      { name: "Security guides", short_name: "Guides", url: "/guides", icons: [{ src: "/favicon.png", sizes: "512x512", type: "image/png" }] },
    ],
  };
}
