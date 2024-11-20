import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ligaSFMono = localFont({
  src: "./fonts/LigaSFMonoNerdFont-Regular.otf",
  variable: "--font-liga-sf-mono",
});

export const metadata: Metadata = {
  title: "shel soloa",
  description: "...",
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
