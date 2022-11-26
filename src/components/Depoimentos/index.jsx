import CardDepoimento from "../CardDepoimento";
import { ContainerDepo, ContainerDepoimentos } from "./style";
import imagem1 from "../../assets/depoimento1.webp";
import imagem2 from "../../assets/depoimento2.webp";
import imagem3 from "../../assets/depoimento3.webp";

function Depoimentos() {
  const depoimentos = [
    {
      id: 1,
      nome: "Roberta",
      depoimento:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut unde nam alias atque fugit totam obcaecati voluptates, ullam accusamus facilis et corrupti. Illum iure quibusdam dignissimos! Unde, cum totam! Fuga!",
      foto: imagem1,
    },
    {
      id: 2,
      nome: "Roberto",
      depoimento:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut unde nam alias atque fugit totam obcaecati voluptates, ullam accusamus facilis et corrupti. Illum iure quibusdam dignissimos! Unde, cum totam! Fuga!",
      foto: imagem2,
    },
    {
      id: 3,
      nome: "Ronaldo",
      depoimento:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut unde nam alias atque fugit totam obcaecati voluptates, ullam accusamus facilis et corrupti. Illum iure quibusdam dignissimos! Unde, cum totam! Fuga!",
      foto: imagem3,
    },
  ];
  return (
    <ContainerDepo>
      <h1 className="mt-5">Depoimentos</h1>
      <ContainerDepoimentos>
        {depoimentos.map((post) => (
          <CardDepoimento
            key={post.id}
            nome={post.nome}
            depoimento={post.depoimento}
            foto={post.foto}
          />
        ))}
      </ContainerDepoimentos>
      <button
        className="mb-5 align-self-center btn btn-primary btn-lg mt-5"
        style={{ width: "18rem" }}
      >
        Ver mais depoimentos
      </button>
    </ContainerDepo>
  );
}
export default Depoimentos;
