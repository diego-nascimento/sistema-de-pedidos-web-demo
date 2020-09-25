import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #999999;
  display: flex;
  align-items: center;
  padding-top: 20px;
  flex-direction: column;
`;

export const Lista = styled.ul`
  display: grid;
  box-sizing: border-box;
  padding: 0px 0px;
  list-style: none;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
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

  h2 {
    margin-top: 15px;
  }

  img {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid black;
  }

  div.botoes {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Botao = styled.button`
  margin-top: 20px;
  width: ${(props) => props.size};
  height: 50px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  align-self: center;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 15px;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.hover};
  }
`;
