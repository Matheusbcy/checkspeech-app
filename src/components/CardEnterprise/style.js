import styled from "styled-components";

export const ContainerCardPreco = styled.div`
  height: 500px;
  width: 350px;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
export const Button = styled.button`
  height: 43px;
  width: 300px;
  align-self: center;
  background-color: orange;
  color: black;
  border: none;
  margin-top: 30px;
`
export const Titulo = styled.h3`
  align-self: center;
  margin-bottom: 30px;
`
export const Paragrafo = styled.p`
  font-weight: bold;
  font-size: 14px;
`
export const Preço = styled.span`
  font-weight: bold;
  font-size: 30px;
  margin: 0 0 0 15px;
`
