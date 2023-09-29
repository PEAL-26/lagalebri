import Image from "next/image";
import Link from "next/link";
import { BarraPesquisa } from "./barra-pesquisa";

export function Banner() {
  return (
    <div className="w-full bg-background">
      <div className="relative mx-auto flex max-w-screen-xl flex-col px-4 pb-10 lg:px-16 lg:pt-16">
        <div className="flex flex-col lg:max-w-md">
          <h1 className="text-2xl font-bold text-black lg:text-6xl">
            ENCONTRE A CASA DOS SEUS{" "}
            <span className="font-bold text-primary">SONHOS</span>
          </h1>
          <span className="mt-1 max-w-2xl text-lg font-normal text-black">
            Concretize seus projetos e tenha a casa dos seus sonhos com a
            Lagalebri, sua parceira confiável em construção e tecnologia.
          </span>
          <Link
            href="/contacto"
            className="mt-4 w-40 rounded-lg border border-primary py-3 text-center font-bold text-primary transition-all hover:border-primary hover:bg-white hover:text-primary"
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
              className="h-full w-full object-contain"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
