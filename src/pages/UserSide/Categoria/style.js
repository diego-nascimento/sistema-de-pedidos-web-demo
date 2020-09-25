import styled, { keyframes } from 'styled-components';

const animacaoLogo = keyframes`
  0%{
    opacity: 0;
    transform: translateY(20px);
  }100%{
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #999999;
  display: flex;
  align-items: center;
  padding-top: 20px;
  flex-direction: column;

  h1 {
    font-size: 2.2rem;
  }
`;

export const Lista = styled.ul`
  display: grid;
  box-sizing: border-box;
  padding: 0px 0px;
  list-style: none;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  margin-bottom: 50px;
  grid-gap: 20px;
  box-sizing: border-box;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  max-width: 350px;
  border-radius: 25px;
  padding: 20px;
  box-sizing: border-box;

  animation: ${animacaoLogo} 0.5s forwards;
  h2 {
    margin-top: 15px;
    font-size: 1.4rem;
  }

  img {
    width: 100%;
    border: 1px solid black;
  }

  div.botoes {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media (max-width: 300px) {
    max-width: 200px;

    h2 {
      margin-top: 15px;
      font-size: 1.1rem;
      width: 100%;
    }
  }
`;

export const Botao = styled.button`
  margin-top: 20px;
  width: ${(props) => props.size};
  height: 50px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  align-self: center;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 15px;
  transition: 0.3s;
  box-sizing: border-box;

  @media (max-width: 300px) {
    font-size: 0.5rem;
  }

  &:hover {
    background-color: ${(props) => props.hover};
  }
`;
