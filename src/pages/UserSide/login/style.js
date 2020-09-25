import styled from 'styled-components';

export const Container = styled.main`
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(
    0.1turn,
    #2ee440,
    #ebf8e1,
    #ebf8e1,
    #ebf8e1,
    #2ee440
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
    width: 100%;
    max-width: 400px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    background: #fff;
    align-items: center;
    margin: 0 20px;
    box-sizing: border-box;
    border-radius: 15px;

`;

export const Formulario = styled.form`
    margin-top: 50px;
    width: 100%;
    max-width: 380px;
    padding: 0px 50px;
    display: flex;
    align-items: center;
    flex-direction: column;

    input[type="text"], input[type="password"]{
        width: 300px;
        border: 1px solid black;
        margin-left: 10px;
        height: 30px;
        border-radius: 5px;
        padding-left: 20px;
        font-size: 16px;
    }

    label{
        font-weight: bold;
    }
`;

export const Campo = styled.div`
   
    margin-top: 20px;
`;

export const Botao = styled.button`
    align-self: center;
    margin: 50px 0;
    height: 40px;
    width: 70%;
    border: 1px solid black;
    border-radius: 15px;
    font-size: 16px;
    background: #2ee440;
    font-weight: bold;
    color: black;

`;