import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from "react";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: 'K. Dushyant Reddy - Porfolio',
  description: 'Aspiring Software Engineer and AWS Cloud Intern, presently at CloudplusAI. Learning new sets of softwares and skills.',
  colorScheme: "dark"
}

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#091a28] scrollbar-thumb-[#0e2233]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}