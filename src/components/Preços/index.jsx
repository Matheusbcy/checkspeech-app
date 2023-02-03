import CardEnterprise from "../CardEnterprise";
import CardPrecos from "../CardPrecos";
import { ContainerPrecos } from "./style";

function Preços() {
  const precos = [
    {
      id: 1,
      nome: "Beginner",
      precoMes: 29,
      precoAno: 328,
      tranAudioAssync: 120,
      transTempoReal: 90,
      indenficacaoIdioma: 200,
      AnaliseDeAudio: 120,
    },
    {
      id: 2,
      nome: "Business",
      precoMes: 44,
      precoAno: 499,
      tranAudioAssync: 200,
      transTempoReal: 120,
      indenficacaoIdioma: 500,
      AnaliseDeAudio: 200,
    },

  ];
  const enterprise = {
    nome: "Enterprise",
    preco: "Preços especiais para grandes vôlumes",
    beneficio1: "Prioridade no suporte técnico",
    beneficio2: "Gesto de conta dedicado",
  };
  return (
    <ContainerPrecos id="preços">
      {precos.map((post) => {
        return <CardPrecos post={post} />;
      })}
      <CardEnterprise enterprise={enterprise}/>
    </ContainerPrecos>
  );
}

export default Preços;
