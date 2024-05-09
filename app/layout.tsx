import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord - NEXT",
  description: "Created by Tiger with Love ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="discord-theme">
          <body className={openSans.className}>{children}</body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
