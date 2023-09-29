import "../styles/globals.css";

import { Inter } from "next/font/google";
import { Head } from "./head";
import { Header } from "@/components/layout/header";
import { Metadata } from "next";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Página Principal",
  description:
    "Concretize seus projetos e tenha a casa dos seus sonhos com a Lagalebri - sua parceira confiável em construção e tecnologia.",
  manifest: "/manifest.json",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-pt">
      <Head />
      <body className={inter.className}>
        <Header />
        <main className="mt-14 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
