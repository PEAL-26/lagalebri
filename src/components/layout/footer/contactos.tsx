import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

import { appConfig } from "@/config/app-config";

export function FooterContactos() {
  const { contactos } = appConfig;
  return (
    <div className="mt-16 flex flex-col gap-7">
      <span className="text-xl font-bold text-white">Contactos</span>

      <div className="mb-4 flex flex-col gap-2">
        <Link
          href={`geo:${contactos.endereco.geo}`}
          className="flex items-center gap-1 text-white hover:underline"
        >
          <IoHomeOutline size={16} />
          {contactos.endereco.display}
        </Link>
        <Link
          href={`mailto:${contactos.email}`}
          className="flex items-center gap-1 text-white hover:underline"
        >
          <CiMail size={16} />
          {contactos.email}
        </Link>
        <Link
          href={`tel:${contactos.telefone}`}
          className="flex items-center gap-1 text-white hover:underline"
        >
          <HiOutlineDevicePhoneMobile size={16} />
          {contactos.telefone}
        </Link>
      </div>
    </div>
  );
}
