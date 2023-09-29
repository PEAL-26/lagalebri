import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { PiInstagramLogo } from "react-icons/pi";

import { RedeSocial } from "./rede-social";

export function Footer() {
  return (
    <footer className="bg-primary ">
      <div className="mx-auto h-full w-full max-w-screen-xl px-4 pb-4 pt-7 lg:px-16 lg:pb-16">
        <hr className="bg-white/50" />

        <div className="mt-12 mb-16 flex gap-3">
          <RedeSocial icon={SlSocialFacebook} url="https://facebook.com/" />
          <RedeSocial icon={PiInstagramLogo} url="https://instagram.com/" />
          <RedeSocial icon={CiTwitter} url="https://twitter.com/" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-normal text-white ">
            © 2023 Lagalebri | Todos direitos reservados | Desenvolvido por
            PEALSystems
          </span>
          <span className="text-sm font-normal text-white ">
            Termos e Privacidade
          </span>
        </div>
      </div>
    </footer>
  );
}
