import { Banner } from "@/components/home/banner";
import { QuemSomos } from "@/components/home/quem-somos";

export const metadata = {
  title: "Página Principal",
  description:
    "Concretize seus projetos e tenha a casa dos seus sonhos com a Lagalebri - sua parceira confiável em construção e tecnologia.",
};

export default function HomePage() {
  return (
    <>
      <Banner />
      <QuemSomos />
    </>
  );
}
