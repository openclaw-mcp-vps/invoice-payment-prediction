import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoiceAI — Predict Which Invoices Will Be Paid Late",
  description: "AI analyzes client payment history to predict late payments and suggest collection strategies for freelancers and small agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b2229493-fe8b-4c60-810b-62fcd7720207"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
