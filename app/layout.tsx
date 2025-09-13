import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NavbarDemo } from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer",
  description: "Personal portfolio showcasing creative development work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased lg:mx-50`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="relative w-full">
            <NavbarDemo />
            <main className="">{children}</main>

          </div>
        </ThemeProvider>
        <Toaster position="bottom-right" />
        <Analytics />
      </body>
    </html>
  );
}
