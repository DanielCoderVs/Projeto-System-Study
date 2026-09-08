import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudyFlow",
  description: "Organize seus estudos com foco.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
