import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/shared/section";
import { Card } from "./card";

export function HomeImobiliariaConfianca() {
  return (
    <Section>
      <div className="relative h-[412px] w-[577px] rounded-2xl">
        <Image
          src={"/images/house-car.png"}
          fill
          alt="house-car"
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="ml-12 flex flex-col">
        <h3 className="relative w-80 text-4xl font-bold text-black">
          Sua imobiliária de confiança
          <Link
            href="/contacto"
            className="absolute right-0 top-10 h-10 w-10 rounded-full bg-primary"
          >
            <Image
              src="/images/contactar-nos.png"
              alt="contactar-nos"
              fill
              className="rounded-full bg-primary object-cover"
            />
          </Link>
        </h3>

        <span className="mt-10 w-96 text-lg font-light text-black">
          Nós testemunhamos a evolução do cenário imobiliário e nos tornamos um
          parceiro confiável por muitos clientes.
        </span>
        <div className="mt-11 grid grid-cols-2 gap-5">
          <Card title="Propriedade" value="6K+" />
          <Card title="Clientes Satisfeitos" value="18K+" primary />
          <Card title="Serviços" value="2+" />
          <Card title="Anos de Experiência" value="3+" />
        </div>
      </div>
    </Section>
  );
}
