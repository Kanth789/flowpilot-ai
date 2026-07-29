import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://flowpilot.ai"),
  title: { default: "FlowPilot AI | Enterprise Workflow Automation", template: "%s | FlowPilot AI" },
  description: "Automate business workflows using AI-powered document processing and intelligent agents.",
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: "FlowPilot AI", locale: "en_US" },
  twitter: { card: "summary" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
