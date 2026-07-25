import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevSecOps Academy | Learn DevOps, Cloud & Security",
  description: "Modern DevSecOps documentation platform with comprehensive modules, hands-on labs, and real-world projects.",
  keywords: ["DevOps", "DevSecOps", "Cloud", "AWS", "Kubernetes", "Docker", "CI/CD", "Security"],
  authors: [{ name: "DevSecOps Academy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devsecops-academy.vercel.app",
    siteName: "DevSecOps Academy",
    title: "DevSecOps Academy | Learn DevOps, Cloud & Security",
    description: "Modern DevSecOps documentation platform",
  },
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
