import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

import "./globals.css";
import styles from "./layout.module.css";
import ProviderWrapper from "@/components/ProviderWrapper";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MySide Desafio",
  description:
    "Esse desafio é proposto pela MySide para a vaga de Desenvolvedor Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${roboto.className}`}>
        <ProviderWrapper>
          <Navbar />
          <main className={styles.main}>{children}</main>
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
