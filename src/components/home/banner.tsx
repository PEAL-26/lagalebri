import Link from "next/link";

export function Banner() {
  return (
    <div className="h-screen-calc flex flex-col justify-center items-center px-4 lg:px-0">
      <h1 className="text-black lg:text-3xl font-bold text-center text-2xl">
        ENCONTRE A CASA DOS SEUS SONHOS
      </h1>
      <span className="text-center text-black text-sm font-normal mt-1 max-w-2xl">
        Concretize seus projetos e tenha a casa dos seus sonhos com a Lagalebri
        - sua parceira confiável em construção e tecnologia.
      </span>
      <Link
        href="/contacto"
        className="mt-4 py-3 bg-sky-600 rounded-full text-white w-40 transition-all hover:bg-white hover:text-sky-600 hover:border-sky-600 border text-center"
      >
        Fale connosco
      </Link>
    </div>
  );
}
