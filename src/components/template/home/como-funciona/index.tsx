import { Section } from "@/components/shared/section";
import { Card } from "./card";
import { ComoFunctionCircle } from "./como-funciona-circle";

export function HomeComoFunciona() {
  return (
    <Section className="justify-around">
      <div className="flex flex-col justify-between">
        <Card
          title="Pesquisar"
          description="Explore as áreas para sua próxima casa com uma pesquisa abrangente
            de propriedades. Encontre o bairro, comodidades e valores de
            propriedade perfeitos."
        />
        <Card
          title="Rastrear"
          description="Monitorar valores de propriedades, tendências de mercado e
            oportunidades de investimento. Mantenha-se informado, tome decisões
            mais inteligentes e garanta seu futuro financeiro."
          className="mt-28"
        />
      </div>
      <div className="flex items-center justify-center">
        <ComoFunctionCircle />
      
      </div>
      <div className="flex items-center ">
        <Card
          title="Avaliar"
          description="Obtenha a avaliação instantânea do seu imóvel online. Descubra o
            valor da sua casa em segundos. Serviços de avaliação precisos,
            descomplicados e confidenciais disponíveis agora."
        />
      </div>
    </Section>
  );
}
