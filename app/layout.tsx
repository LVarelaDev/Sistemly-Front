import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Toaster } from "sonner";
import PageManager from "./pageManager";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-slate-100 font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <PageManager>{children}</PageManager>

          <Toaster
            richColors
            position="top-right"
            pauseWhenPageIsHidden={false}
          />
        </Providers>
      </body>
    </html>
  );
}
