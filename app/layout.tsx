import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hlink Travel",
  description: "Welcome to Hlink Travel, the best travel agency in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
