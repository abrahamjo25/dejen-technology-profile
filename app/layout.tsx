import type { Metadata } from "next";
import Script from "next/script";
import Providers from "./_providers/Providers";
import Background from "./_components/Background";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nitro.com"),
  title: {
    default: "nitro — Software Development & ERP Solutions | Addis Ababa, Ethiopia",
    template: "%s | nitro",
  },
  description:
    "nitro builds ERP systems, custom software, SaaS products, and mobile apps for organizations in every sector. Trusted since 2019. Based in Addis Ababa, Ethiopia.",
  keywords: [
    "ERP systems Ethiopia",
    "custom software development",
    "SaaS products",
    "web development Addis Ababa",
    "mobile app development",
    "IT consulting Ethiopia",
    "business software solutions",
    "nitro",
    "software company Ethiopia",
    "ERP implementation",
  ],
  authors: [{ name: "nitro", url: "https://nitro.com" }],
  creator: "nitro",
  publisher: "nitro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/assets/img/favicon.ico",
    shortcut: "/assets/img/favicon.ico",
    apple: "/assets/img/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nitro.com",
    siteName: "nitro",
    title: "nitro — Software Development & ERP Solutions",
    description:
      "We design and build ERP systems, custom software, SaaS products and apps — for organizations in every sector. Based in Addis Ababa, Ethiopia.",
    images: [
      {
        url: "/assets/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "nitro - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "nitro — Software Development & ERP Solutions",
    description:
      "We design and build ERP systems, custom software, SaaS products and apps. Based in Addis Ababa, Ethiopia.",
    images: ["/assets/img/og-image.png"],
    creator: "@nitro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nitro.com",
    languages: {
      "en-US": "https://nitro.com",
      "am-ET": "https://nitro.com/am",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const noFlashScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.dataset.theme=t;var l=localStorage.getItem('locale');if(l!=='am'){l='en';}document.documentElement.lang=l;}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "nitro",
              url: "https://nitro.com",
              logo: "https://nitro.com/assets/img/nitro-logo.png",
              description:
                "nitro builds ERP systems, custom software, SaaS products and apps for organizations in every sector.",
              foundingDate: "2019",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Addis Ababa",
                addressCountry: "ET",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+251-920-223-703",
                contactType: "customer service",
                email: "info@dejentech.com",
              },
              sameAs: [],
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                category: "Software Development Services",
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600&family=Noto+Sans+Ethiopic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {process.env.NODE_ENV === "production" && (
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5470334806639013"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>
        <Providers>
          <Background />
          {children}
        </Providers>
      </body>
    </html>
  );
}
