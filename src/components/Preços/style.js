import styled from "styled-components";

export const ContainerPrecos = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
  @media (max-width: 1110px) {
    height: 70rem;
    margin: 20px 10px 10px 0px;
  }
  @media (max-width: 738px) {
    height: 100rem;
  }
`
