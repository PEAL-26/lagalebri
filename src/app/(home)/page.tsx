import {
  Banner,
  HomeAplicativos,
  HomeComoFunciona,
  HomeImobiliariaConfianca,
  HomeMelhoresImoveis,
  HomePorqueEscolherNos,
} from "@/components/template/home";

export const metadata = {
  title: "Página Principal",
  description:
    "Concretize seus projetos e tenha a casa dos seus sonhos com a Lagalebri - sua parceira confiável em construção e tecnologia.",
};

export default function HomePage() {
  return (
    <>
      <Banner />
      <HomeImobiliariaConfianca />
      <HomeComoFunciona />
      <HomeMelhoresImoveis />
      <HomePorqueEscolherNos />
      <HomeAplicativos />
    </>
  );
}
