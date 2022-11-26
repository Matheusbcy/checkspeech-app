import styled from "styled-components";

export const ContainerDepoimentos = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-wrap: wrap;

  align-items: flex-end;
  justify-content: center;
  @media (max-width: 1200px) {
    height: 92vh;
  }
  @media (max-width: 800px) {
    height: 138vh;
    margin-right: 10%;
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
