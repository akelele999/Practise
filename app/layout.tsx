import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNC Network | Underground Infrastructure & HDD",
  description:
    "UNC Network — Horizontal Directional Drilling and underground infrastructure contractor in Thailand.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
