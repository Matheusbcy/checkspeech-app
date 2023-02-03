import {
  ContainerLista,
  ContainerListaRedes,
  ContainerLogo,
  ContainerNav,
  ContainerRedes,
  ContainerRodape,
  Link, Text, ContainerCop
} from "./style";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import logoFooter from "../../assets/logo.png";
import { Imagem } from "./style";

function Rodape() {
  return (
    <ContainerRodape>
      <ContainerNav>
        <ContainerLista>
          <li>
            <Link href="#soluções">Soluções</Link>
          </li>
          <li>
            <Link href="#clientes">Clientes</Link>
          </li>
          <li>
            <Link href="#preços">Preços</Link>
          </li>
          <li>
            <Link href="#formulario">Contato</Link>
          </li>
        </ContainerLista>
      </ContainerNav>
      <ContainerRedes>
        <ContainerListaRedes>
          <li>
            <a
              className="text-light"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube className="" />
            </a>
          </li>
          <li>
            <a
              className="text-light"
              href="https://pt-br.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
          </li>
          <li>
            <a
              className="text-light"
              href="https://twitter.com/i/flow/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter />
            </a>
          </li>
          <li>
            <a
              className="text-light"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
          </li>
          <li>
            <a
              className="text-light"
              href="https://www.reddit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsReddit />
            </a>
          </li>
        </ContainerListaRedes>
        <ContainerLogo>
          <a href="#home">
            <Imagem src={logoFooter} alt="" />
          </a>
        </ContainerLogo>
        <ContainerCop>
          <Text>
            Copyright (c) 2003 Company Name All Rights Reserved This product is
            <br></br>
            protected by copyright and distributed under licenses
            <br /> restricting
            copying, distribution, and decompilation.
          </Text>
        </ContainerCop>
      </ContainerRedes>
    </ContainerRodape>
  );
}
export default Rodape;
