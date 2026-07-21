import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urban Sync | Creative Media & Digital Solutions",
  description:
    "Urban Sync provides Website Development, Video Production, Branding and WhatsApp Automation.",
  keywords: [
    "Urban Sync",
    "Website Development",
    "Video Editing",
    "WhatsApp Automation",
    "Creative Agency",
    "Branding"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
