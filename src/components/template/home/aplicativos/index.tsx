import { Section } from "@/components/shared/section";
import { MdPhoneIphone } from "react-icons/md";
import { BiLogoPlayStore, BiLogoApple } from "react-icons/bi";
import Link from "next/link";

export function HomeAplicativos() {
  return (
    <Section
      backgroundColor="#A5A5A5"
      className="items-center justify-between lg:py-6"
    >
      <div className="flex items-center justify-center">
        <MdPhoneIphone className="text-white" size={96} />
        <h3 className="relative text-left text-3xl font-bold leading-none text-white">
          <span className="text-lg">Aplicativos para</span>
          <br />
          Android e iOS
          <br />
          <span className="text-lg">Baixe e veja nossos conteúdos</span>
        </h3>
      </div>
      <div className="flex h-16 gap-4">
        <Link
          href="#android"
          className="flex items-center gap-2 rounded-lg bg-white p-6 shadow transition-all hover:scale-105"
        >
          <BiLogoPlayStore size={32} />
          <span className="text-xl font-bold text-stone-900 ">Google Play</span>
        </Link>
        <Link
          href="#apple"
          className="flex items-center gap-2 rounded-lg bg-white p-6 shadow transition-all hover:scale-105"
        >
          <BiLogoApple size={32} />
          <span className="text-xl font-bold text-stone-900 ">Apple Store</span>
        </Link>
      </div>
    </Section>
  );
}
