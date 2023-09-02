import "../styles/globals.css";

import { Inter } from "next/font/google";
import { Head } from "./head";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "Lagalebri", template: "%s | Lagalebri" },
  description:
    "LAGALEBRI - Tecnologia & Imobiliária: Inovação em Construção Civil e Tecnologia para o Desenvolvimento de Angola. Desde TIC a Casas",
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
        <main className="mt-14">{children}</main>
      </body>
    </html>
  );
}
