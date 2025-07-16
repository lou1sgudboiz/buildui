import { JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "buildUI",
  description: "a shadcn terminal theme",
  metadataBase: new URL("https://www.buildui.org"),
  openGraph: {
    title: "buildUI",
    description: "a shadcn terminal theme",
    url: "https://www.buildui.org",
    siteName: "buildUI",
    images: [
      {
        url: "/buildui-tbn.png",
        width: 1200,
        height: 630,
        alt: "og-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "buildUI",
    description: "a shadcn terminal theme",
    creator: "@zxstim",
    images: ["/buildui-tbn.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetBrainsMono.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
