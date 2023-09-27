"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useMediaQuery from "@/hooks/use-media-query";

const LINKS = {
  home: "/",
  procurar: "/procurar",
  servicos: "/servicos",
  sobreNos: "/sobre-nos",
  contacto: "/contacto",
};

export function Header() {
  const pathname = usePathname();

  const isDevice = useMediaQuery("(max-width: 1023px)");
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => setIsOpenMenu(true);
  const closeMenu = () => setIsOpenMenu(false);

  useEffect(() => {
    closeMenu();
  }, [isDevice]);

  const getClassName = (url: string) => {
    const active = url === pathname;

    return {
      true: "text-center lg:text-sky-600 text-base font-bold max-lg:bg-sky-600 text-white py-2 lg:py-2",
      false:
        "text-center lg:text-black text-base hover:text-sky-600 transition-all py-2 lg:py-2",
    }[active ? "true" : "false"];
  };

  return (
    <header className="fixed left-0 top-0 w-full h-14 bg-white shadow flex items-center justify-between lg:px-16 px-4">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <button onClick={openMenu} className="lg:hidden block">
        menu
      </button>
      <div
        data-open={isOpenMenu}
        className="transition-all max-lg:fixed data-[open=true]:max-lg:right-0 data-[open=false]:max-lg:-right-full  inset-y-0 w-72 max-lg:bg-white max-lg:border-l max-lg:shadow lg:w-fit"
      >
        <nav className="flex lg:flex-row lg:gap-6 relative w-full h-full flex-col pt-16 lg:pt-0">
          <button
            onClick={closeMenu}
            className="w-10 h-10 rounded absolute lg:hidden block right-3 top-3 "
          >
            close
          </button>
          <Link className={"" + getClassName(LINKS.home)} href={LINKS.home}>
            Página Principal
          </Link>
          <Link className={getClassName(LINKS.procurar)} href={LINKS.procurar}>
            Procurar
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
      </div>
    </header>
  );
}
