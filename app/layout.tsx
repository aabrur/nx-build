import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nx-build.vercel.app"),

  title: "0xTanda — One Entity // Dual Existence",
  description:
    "0xTanda is a Jakarta-based phygital streetwear brand merging tangible craftsmanship with provable digital ownership.",
  keywords: [
    "0xTanda",
    "Phygital Fashion",
    "NFT Streetwear",
    "Digital Twin Clothing",
    "Web3 Fashion",
    "NFC Apparel",
  ],

  openGraph: {
    title: "0xTanda — Phygital Streetwear",
    description:
      "Tangible craftsmanship you can feel, secured by digital ownership you can prove.",
    url: "https://nx-build.vercel.app",
    siteName: "0xTanda",
    images: [
      {
        url: "/branding/logo-0xtanda.png",
        width: 1200,
        height: 630,
        alt: "0xTanda Official",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "0xTanda — Phygital Streetwear",
    description:
      "Tangible craftsmanship you can feel, secured by digital ownership you can prove.",
    images: ["/branding/logo-0xtanda.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
