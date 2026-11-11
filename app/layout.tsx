import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { currentVersion, playStoreUrl, repositoryUrl, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Android Geofence Alarm App | GeoFence Guardian",
    template: "%s | GeoFence Guardian",
  },
  description: "Protect your Android device with a 10–500 metre geofence alarm. GeoFence Guardian monitors your boundary and processes location data on your device.",
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName,
    images: [{
      url: "/social-card.png",
      width: 1734,
      height: 907,
      alt: "GeoFence Guardian — your safe zone, always on",
    }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/social-card.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101617",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
        },
        sameAs: [playStoreUrl, repositoryUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: "Official website for the GeoFence Guardian Android geofence alarm app.",
        inLanguage: "en-ZA",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#app`,
        name: siteName,
        applicationCategory: "SecurityApplication",
        operatingSystem: "Android 7.0 and later",
        softwareVersion: currentVersion,
        url: siteUrl,
        installUrl: playStoreUrl,
        downloadUrl: playStoreUrl,
        sameAs: [playStoreUrl, repositoryUrl],
        author: { "@id": `${siteUrl}/#organization` },
        mainEntityOfPage: { "@id": `${siteUrl}/#website` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "ZAR",
        },
        description: "A privacy-first Android geofence alarm with saved zones, schedules, custom alerts, and local event history.",
      },
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
