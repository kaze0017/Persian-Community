import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import StoreProvider from "./StoreProvider";
import MobileNav from "./components/navs/mainNavs/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
  // themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128.png" },
    { rel: "icon", url: "icons/icon-128.png" },
  ],
};
// export const viewport: Viewport = {
//   themeColor: "black",
//   colorScheme: "light dark",
//   initialScale: 1,
//   width: "device-width",
//   viewportFit: "cover",
//   minimumScale: 1,
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <StoreProvider>
            <ThemeProvider theme={theme}>
              {children}
              {/* <MobileNav /> */}
              </ThemeProvider>
          </StoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
