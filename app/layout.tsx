import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WooCommerce Upsell Optimizer – AI-Powered Upsell Recommendations",
  description: "Analyze purchase patterns and generate AI-powered upsell recommendations for your WooCommerce store. Boost revenue with smart product suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c4ca4e06-298a-488f-b74c-0dd0db390001"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
