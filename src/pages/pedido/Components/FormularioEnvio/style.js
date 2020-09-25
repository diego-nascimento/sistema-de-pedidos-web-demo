import styled from 'styled-components'

export const Formulario = styled.form`
  max-width: 100%;
  position: relative;
  margin-top: 24px;
  min-width: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2{
    text-align: center;
    margin-bottom: 13px;
    display: flex;
    align-items: center;
    justify-content: center
  }

  h2::after {
    content: "";
    background: black;
    width: 90%;
    height: 1px;
    position: absolute;
    top: 36px;
    display:block;
  }

  input {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #000;
    border-radius: 4px;
    padding-left:10px;
  }

  input::placeholder {
    color: rgba(0,0,0, 0.8);
  }

  input.outside{
    width: 85%;
    border: 1px solid black;
    height: 30px;
    margin-bottom: 10px;
  }

  textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #000;
    border-radius: 4px;
    padding-left:10px;
    width: 85%;
    border: 1px solid black;
    height: 100px;
    margin-bottom: 10px;
    padding-top: 5px;
  }

  textarea::placeholder {
    color: rgba(0,0,0, 0.8);
  }

  div{
    width: 85%;
    display: grid;
    grid-template-columns: 3fr 80px;
    grid-gap: 15px; 
  }

  div input.inside:first-child {
    border: 1px solid black;
    height: 30px;
    margin-bottom: 10px;
  }

  div input.inside:last-child {
    border: 1px solid black;
    height: 30px;
    margin-bottom: 10px;
    flex: 1;
  }

  .tamanho-botao {
    margin-top: 10px;
    width: 85%;
  }
`;


