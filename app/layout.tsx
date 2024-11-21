import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import { ChildProps } from "@/types";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Image generator",
  description: "image generator app",
  icons: { icon: "/icon.webp" },
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
