import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";

export const metadata: Metadata = {
  title: "The Gold Standard of Secure Transactions.",
  description: "XMARR is more than an escrow—it’s your ultimate financial shield. From everyday transactions to high-value deals, we eliminate risks, protect your payments, and guarantee trust at every step.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="Hairstheme">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
