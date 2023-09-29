import { TfiTwitter } from "react-icons/tfi";
import { SlSocialFacebook } from "react-icons/sl";
import { PiInstagramLogo } from "react-icons/pi";

import { RedeSocial } from "./rede-social";
import { Logo } from "@/components/shared/logo";
import { FooterContactos } from "./contactos";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary ">
      <div className="mx-auto h-full w-full max-w-screen-xl px-4 pb-4 pt-7 lg:px-16 lg:pb-16">
        <Logo color="white" />
        <FooterContactos />
        <hr className="bg-white/50" />
        <div className="mb-16 mt-12 flex gap-3">
          <RedeSocial icon={SlSocialFacebook} url="https://facebook.com/" />
          <RedeSocial icon={PiInstagramLogo} url="https://instagram.com/" />
          <RedeSocial icon={TfiTwitter} url="https://twitter.com/" />
        </div>
        <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-3">
          <span className="text-sm font-normal text-white max-sm:text-center">
            © 2023 Lagalebri | Todos direitos reservados | Desenvolvido por{" "}
            <Link
              href="https://www.pealsystems.com"
              target="_black"
              className="font-bold"
            >
              PEALSystems
            </Link>
          </span>
          <Link
            href="/termos-privacidade"
            className="text-sm font-normal text-white hover:underline"
          >
            Termos e Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
