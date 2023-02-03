import styled from "styled-components";

export const ContainerRodape = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContainerNav = styled.div`
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: center;
  background-color: #292929;
  color: white;
  @media (max-width: 600px) {
    height: 18rem;
  }
`
export const ContainerLista = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  flex-wrap: wrap;
  font-size: 18px;
  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 15px;
  }
`
export const Link = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #444444;
    color: white;
    padding: 2px 30px ;
    border-radius: 10px;
  }
`
export const ContainerRedes = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #111111;
  height: 23rem;
  @media (max-width: 600px) {
    height: 25rem;
  }
  @media (max-width: 400px) {
    height: 26rem;
  }
`
export const ContainerListaRedes = styled.ul`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  list-style: none;
  color: white;
  gap: 20px;

`
export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
`
export const Imagem = styled.img`
  height: 190px;
  width: 190px;
`
export const Text = styled.p`
  text-align: center;
  color:gray;
  margin: 0 10px;
`
export const ContainerCop = styled.div`
  display: flex;
  justify-content: center;
`
