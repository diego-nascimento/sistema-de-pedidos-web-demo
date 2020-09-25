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