import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider/TheamProvider";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Starter with shadcn/ui",
  description: "A modern Next.js starter with shadcn/ui and theme support",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div className="w-[1024px] mx-auto"> */}
          <NavigationBar />
          {children}
          {/* </div> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
