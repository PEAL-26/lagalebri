"use client";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import useMediaQuery from "@/hooks/use-media-query";
import { Logo } from "@/components/shared/logo";

const LINKS = [
  { titulo: "Página Principal", href: "/" },
  { titulo: "Procurar", href: "/procurar" },
  { titulo: "Serviços", href: "/servicos" },
  { titulo: "Sobre Nós", href: "/sobre-nos" },
  { titulo: "Contacto", href: "/contacto" },
];

export function Header() {
  const pathname = usePathname();

  const isDevice = useMediaQuery("(max-width: 1023px)");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const openMenu = () => setIsOpenMenu(true);
  const closeMenu = () => setIsOpenMenu(false);

  useEffect(() => {
    closeMenu();
  }, [isDevice]);

  useEffect(() => {
    closeMenu();

    const handleClickBackDrop = (e: Event) => {
      // if (e.currentTarget === navRef.current?.) {
      //   closeMenu();
      // }
    };

    document.body.addEventListener("click", handleClickBackDrop);

    return () => {
      document.body.removeEventListener("click", handleClickBackDrop);
    };
  }, []);

  const getClassName = (url: string) => {
    const active = url === pathname;

    return {
      true: "text-center lg:text-primary text-base font-bold max-lg:bg-primary text-white py-2 lg:py-2",
      false:
        "text-center lg:text-black text-base hover:text-primary transition-all py-2 lg:py-2",
    }[active ? "true" : "false"];
  };

  return (
    <header className="fixed left-0 top-0 z-50 flex h-14 w-full bg-white shadow">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 lg:px-16">
        <div>
          <Logo />
        </div>
        <button
          onClick={openMenu}
          className="flex items-center justify-center lg:hidden"
        >
          <BiMenu size={40} />
        </button>
        <div
          data-open={isOpenMenu}
          className="inset-y-0 w-72 transition-all max-lg:fixed  max-lg:border-l max-lg:bg-white max-lg:shadow data-[open=false]:max-lg:-right-full data-[open=true]:max-lg:right-0 lg:w-fit"
        >
          <nav
            ref={navRef}
            className="relative flex h-full w-full flex-col pt-16 lg:flex-row lg:gap-6 lg:pt-0"
          >
            <button
              onClick={closeMenu}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded lg:hidden "
            >
              <GrClose size={30} />
            </button>
            {LINKS.map((link, index) => (
              <Link
                key={index}
                className={getClassName(link.href)}
                href={link.href}
              >
                {link.titulo}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
