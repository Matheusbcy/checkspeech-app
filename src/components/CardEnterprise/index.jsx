import { NavLink } from "react-bootstrap";
import {
  Button,
  ContainerCard,
  ContainerCardPreco,
  Paragrafo,
  Titulo,
} from "./style";

function CardEnterprise({ enterprise }) {
  return (
    <>
      <ContainerCardPreco>
        <ContainerCard>
          <Titulo>{enterprise.nome}</Titulo>
          <p>{enterprise.preco}</p>
          <p>Preço sob consulta</p>
          <Button><NavLink href="#formulario">Contate-nos</NavLink></Button>
          <hr />
          <Paragrafo>{enterprise.beneficio1}</Paragrafo>
          <Paragrafo>{enterprise.beneficio2}</Paragrafo>
        </ContainerCard>
      </ContainerCardPreco>
    </>
  );
}
export default CardEnterprise;
