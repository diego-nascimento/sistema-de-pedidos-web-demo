import styled, { keyframes } from 'styled-components';

const animacaoLogo = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`;

export const Login = styled.main`
  background: linear-gradient(
    0.1turn,
    #2ee440,
    #ebf8e1,
    #ebf8e1,
    #ebf8e1,
    #2ee440
  );
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: #262b27;
  padding: 50px;
  border-radius: 25px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  box-sizing: border-box;

  img {
    opacity: 0;
    animation: ${animacaoLogo} 1s ease-in forwards;
  }
`;

export const Mensagem = styled.p`
  color: red;
  font-size: 20px;
  margin: 20px auto;
`;

export const Formulario = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Campo = styled.div`
  margin-top: 20px;
`;

export const Entrada = styled.input`
  height: 30px;
  width: 100%;
  border-radius: 3px;
  margin-top: 5px;

  &[type='password'],
  &[type='email'] {
    padding: 20px;
    font-size: 20px;
  }
`;

export const Botao = styled.button`
  width: 50%;
  align-self: center;
  height: 50px;
  border-radius: 5px;
  color: black;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 50px;
  font-weight: bold;
  background: #2ee440;
`;
