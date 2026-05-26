import type { Metadata } from "next";
import Script from "next/script";
import Providers from "./_providers/Providers";
import Background from "./_components/Background";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dejen Technologies — ERP & Custom Software Development",
  description:
    "Dejen Technology Solutions builds ERP systems, custom software, SaaS products and apps for organizations in every sector — from education and agriculture to finance and government. Based in Addis Ababa, Ethiopia.",
  icons: {
    icon: "/assets/img/favicon.ico",
    apple: "/assets/img/apple-touch-icon.png",
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
