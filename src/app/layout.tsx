import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Illia Voitenko",
  description: "Portfolio of Illia Voitenko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
