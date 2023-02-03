import styled from "styled-components";

export const ContainerDepoimentos = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 1200px) {
    height: 62rem;
    margin-right: 5%;
  }
  @media (max-width: 800px) {
    height: 88rem;
    margin-right: 12%;
  }
`
export const ContainerDepo = styled.div`
  display: flex;
  background: #212529;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid black;

`
export const Button = styled.button`
  align-self: center;
`
