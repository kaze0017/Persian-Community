import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Persian Community",
  description:
    "Introduces the Persian Business, Communities, and Events in Ottawa",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Persian", "Community", "Ottawa", "Business", "Events"],
  authors: [
    {
      name: "Keivan Kazemi",
      url: "https://www.linkedin.com/in/keivankazemi/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128.png" },
    { rel: "icon", url: "icons/icon-128.png" },
  ],
 
};
export const viewport: Viewport = {
  themeColor: "black",
  colorScheme: "light dark",
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="generator" content={metadata.generator} />
        <link rel="manifest" href={metadata.manifest} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />

        {metadata.authors.map(({ name, url }, index) => (
          <meta
            key={index}
            name="author"
            content={name}
            {...(url && { href: url })}
          />
        ))}
        <meta name="viewport" content={Object.entries(viewport).join(", ")} />
        {metadata.icons.map(({ rel, url }, index) => (
          <link key={index} rel={rel} href={url} />
        ))}
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <StoreProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </StoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
