import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyen Ngoc Minh Anh — Software Engineer",
  description:
    "Backend-focused software engineer with experience building enterprise applications using NestJS, React Native, and scalable backend architectures.",
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "NestJS",
    "React Native",
    "Vietnam",
    "Ho Chi Minh City",
  ],
  authors: [{ name: "Nguyen Ngoc Minh Anh", url: "https://nnma.id.vn" }],
  metadataBase: new URL("https://nnma.id.vn"),
  openGraph: {
    title: "Nguyen Ngoc Minh Anh — Software Engineer",
    description:
      "Backend-focused software engineer with experience in NestJS, React Native, and distributed systems.",
    url: "https://nnma.id.vn",
    siteName: "Nguyen Ngoc Minh Anh",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nguyen Ngoc Minh Anh — Software Engineer",
    description:
      "Backend-focused software engineer with experience in NestJS, React Native, and distributed systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
