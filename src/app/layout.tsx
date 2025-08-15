import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chit Chat - AI Persona",
  description:
    "Chit Chat Persona is an AI-powered virtual companion designed for natural, engaging conversations in the style of Hitesh Choudhary and Piyush Garg. Talk, brainstorm, and have fun with an AI that feels human-like.",
  keywords: [
    "AI Chatbot",
    "Virtual Assistant",
    "AI Persona",
    "Hitesh Choudhary",
    "Piyush Garg",
    "AI Conversations",
    "Next.js AI App",
    "OpenAI",
  ],
  authors: [{ name: "Vivek Pramanik" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-new-gr-c-s-check-loaded="14.1248.0"
        data-gr-ext-installed=""
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
