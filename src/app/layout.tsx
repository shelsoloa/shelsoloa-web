import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ligaSFMono = localFont({
  src: "./fonts/LigaSFMonoNerdFont-Regular.otf",
  variable: "--font-liga-sf-mono",
});

export const metadata: Metadata = {
  title: "Sheldon Soloa",
  description: "...",
  keywords: [
    "Software Engineer",
    "Marketing Tech",
    "Social Media Tools",
    "Social Media Tech",
    "Influencer Marketing",
    "Promoexchange",
    "Sheldon Soloa",
    "shelsoloa",
    "Sheldon Allen",
    "Social Media Marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ligaSFMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
