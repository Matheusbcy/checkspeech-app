import styled from "styled-components";
import background from '../../assets/image2.jpg'

export const Title = styled.h1`
  margin-bottom: 4vh;
  width: 400px;
  color: white;
  margin-top: 100px;
  font-size: 2.5em;
  font-family: Lucida Console;
  @media (max-width: 800px) {
    width: 400px;
    font-size: 1.5em;
  }
  @media (max-width: 400px) {
    width: 300px;
    font-size: 1.5em;
    text-align: center;
    margin-left: 20px;
  }
`;



export const Paragrafo = styled.p`
  color: white;
  font-family: Bahnschrift;
  width: 500px;
  @media (max-width: 800px) {
    width: 400px;
    margin-right: 10%;
  }
  @media (max-width: 400px) {
    width: 300px;
    text-align: center;
    margin-left: 20px;
  }
`;
export const MainPageC = styled.div`
  background-image: url(${background});
`
