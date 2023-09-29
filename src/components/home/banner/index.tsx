import Image from "next/image";
import Link from "next/link";
import { BarraPesquisa } from "./barra-pesquisa";

export function Banner() {
  return (
    <div className="relative flex flex-col px-4 lg:px-16 lg:pt-16 pb-10 bg-background">
      <div className="lg:max-w-md flex flex-col">
        <h1 className="text-black lg:text-6xl font-bold text-2xl">
          ENCONTRE A CASA DOS SEUS{" "}
          <span className="text-primary font-bold">SONHOS</span>
        </h1>
        <span className="text-black text-lg font-normal mt-1 max-w-2xl">
          Concretize seus projetos e tenha a casa dos seus sonhos com a
          Lagalebri, sua parceira confiável em construção e tecnologia.
        </span>
        <Link
          href="/contacto"
          className="mt-4 py-3 rounded-lg font-bold text-primary border border-primary w-40 transition-all hover:bg-white hover:text-primary hover:border-primary text-center"
        >
          Contacte-nos
        </Link>
      </div>
      <BarraPesquisa />
      <div className="absolute left-[512px] right-16 top-16">
        <div className="relative h-96 ">
          <Image
            // width={726}
            // height={560}
            alt="house-searching"
            src="/images/house-searching.svg"
            className="object-contain w-full h-full"
            fill
          />
        </div>
      </div>
    </div>
  );
}
