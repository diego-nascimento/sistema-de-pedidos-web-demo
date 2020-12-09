import styled from 'styled-components';

export const ListaProdutos = styled.ul.attrs((props) => ({
  mostrar: props.mostrar,
}))`
  list-style: none;
  transition: 1s;
  display: flex;
  width: 100%;
  background-color: blue;

  p {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  h3 {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export const Produto = styled.li`
  background: rgba(0, 255, 0, .7);
  display: flex;
  border: 1px solid black;
  position: relative;
  cursor: pointer;
  padding: 20px 0px;
  overflow: hidden;
  width: 100%;

  .imagem {
    width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 15px;
    margin-left: 10px;
    margin-right: 10px;

    @media(max-width: 500px){
      width: 120px;
    }
  }

  .imagem img {
    width: 100%;
    border-radius: 15px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .nome-descricao {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
