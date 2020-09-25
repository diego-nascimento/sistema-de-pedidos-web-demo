import styled from 'styled-components';

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
  }

  .BotaoRemover {
    background: #000;
    padding: 10px 40px;
    border-radius: 15px;
    color: #fff;
    cursor: pointer;
  }

  strong {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
