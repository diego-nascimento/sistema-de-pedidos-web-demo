import styled from 'styled-components'

export const Pagina = styled.div`
  min-height: 100vh;
  display: flex;
  min-width: 100%;
  flex-direction: column;
  justify-content: space-between;

  h2 {
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
  }

  h3{
    font-family: 'Roboto Slab', serif;
  }
`;

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items:center;
    

  svg {
    width: 300px;
    height: 200px;
    color: green;

    @media (max-width: 500px){
      width: 100px;
      height: 100px;
    }
  }

  .numeroPedido{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    background: black;
    width: 100%;
    height: 100px;
    color: white;
  }
`;