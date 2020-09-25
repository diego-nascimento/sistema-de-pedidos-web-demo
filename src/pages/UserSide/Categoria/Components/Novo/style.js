import styled, { keyframes } from 'styled-components';

const animacaoImagem = keyframes`
  from{
    opacity: 0
  }to{
    opacity: 1
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;

  input[type='file'] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }

  label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: black;
    display: inline-block;
    padding: 30px 100px;
    margin-top: 30px;

    &:hover {
      cursor: pointer;
    }
  }

  input[type='text'] {
    width: 70%;
    height: 40px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 20px 0px;
    padding: 20px;
    font-size: 1.2rem;
  }

  textarea {
    width: 70%;
    height: 100px;
    padding: 10px;
    resize: none;
    font-size: 1.2rem;
  }
`;

export const Formulario = styled.form`
  width: 100%;
  max-width: 500px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 10px;
`;

export const Preview = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    border-radius: 25px;
    animation: ${animacaoImagem} 0.5s ease-in-out forwards;
  }

  .BotaoRemover {
    background: #000;
    padding: 10px 40px;
    border-radius: 15px;
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
  }

  strong {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
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
