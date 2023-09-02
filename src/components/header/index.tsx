"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = {
  home: "/",
  servicos: "/servicos",
  sobreNos: "/sobre-nos",
  contacto: "/contacto",
};

export function Header() {
  const pathname = usePathname();

  const getClassName = (url: string) => {
    const active = url === pathname;

    return {
      true: "text-center text-sky-600 text-base font-bold",
      false:
        "text-center text-black text-base hover:text-sky-600  transition-all",
    }[active ? "true" : "false"];
  };

  return (
    <header className="fixed left-0 top-0 w-full h-14 bg-white shadow flex items-center justify-between px-16">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <nav className="flex gap-6">
        <Link className={getClassName(LINKS.home)} href={LINKS.home}>
          Página Principal
        </Link>
        <Link className={getClassName(LINKS.servicos)} href={LINKS.servicos}>
          Serviços
        </Link>
        <Link className={getClassName(LINKS.sobreNos)} href={LINKS.sobreNos}>
          Sobre nós
        </Link>
        <Link className={getClassName(LINKS.contacto)} href={LINKS.contacto}>
          Contacto
        </Link>
      </nav>
    </header>
  );
}
