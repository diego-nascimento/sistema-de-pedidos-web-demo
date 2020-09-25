import styled, {keyframes} from 'styled-components'
import media from 'styled-media-query'

const aparecer = keyframes`
  from: {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Modal = styled.div.attrs(props=>({
    mostrar: props.mostrar
}))`
     ${media.lessThan("medium")`
        display: ${props => props.mostrar === 1 ? "flex" : "none"};
        position: fixed;
        top: 0;
        height:100vh;
        width: 100vw;
        background: green;
    `}
    
` 

export const Container = styled.div.attrs(props=>({
    scroll: props.scroll,
    mostrar: props.mostrar
}))`
    width: 98%;
    max-width: 600px;
    min-height: 350px; 
    padding: 5px 10px;    
    border: 1px solid black;
    margin-top: 20px;
    overflow: auto;
    max-height: 80%;
    box-sizing: border-box;
    position: fixed;
    display: ${props => props.mostrar === 1 ? "flex" : "none"};
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    background: white;
    top: 20px;
    right: 0px;
    border-radius: 25px;
    
    ${media.lessThan("medium")`
        max-width: 98%;
        height: 100%;
        padding: 5px 0px;   
        margin: 3px;  
        margin-top: 20px 
        
    `}


     ul {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        padding-bottom: 10px;
        margin-bottom: 10px;
        position: relative;
        max-height: 600px;
        overflow: hidden;
        overflow-y: ${props => props.scroll === 1 ? "scroll" : "none"}; 
    }

    h2 {
        text-align: center;
        -webkit-touch-callout: none; 
        -webkit-user-select: none; 
        -khtml-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
         user-select: none; 
    }

    h3 {
        padding: 5px 0px 0px 5px;
        text-align: center;
        -webkit-touch-callout: none; 
        -webkit-user-select: none; 
        -khtml-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
         user-select: none; 
                            
    }
    .nome-descricao {
        display: flex;
        flex-direction: column;
        align-items: left;
    }

`;

export const Produto = styled.li`
    height: 90px;
    width: 98%;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    padding: 5px 10px;
    margin: 10px 5px 0px 5px;
    box-sizing: border-box;
    opacity: 0;
    animation: ${aparecer} forwards 1s;

    ${media.lessThan("medium")`
        max-width: 98.5%;
        width: 98%;
        height: 100%;
    `}

    & img {
        width: 100px;
        padding: 5px 10px;
        max-height: 77px;
        -webkit-touch-callout: none; 
        -webkit-user-select: none; 
        -khtml-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
         user-select: none; 
    }

    & button {
        position: absolute;
        right: 10px;
        top: 22px;
        cursor: pointer;
        height: 50%;
        width: 70px;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        background-color: white;
        border: 1px solid black;
        color: black;
        border-radius: 10px;
    }

    
`;


export const BotaoFinalizar = styled.button.attrs(props=>({
    disabled: props.disabled
}))`
        margin-top: 1px;
        margin-bottom: 10px;
        width: 90%;
        align-self: center;
        height: 40px;
        width: 90%;
        font-family: 'Roboto', sans-serif;
        border: 1px solid black;
        font-weight: bold;
        background-color: ${props => props.disabled === 1 ? "#cccccc" : "green"}; 
        color: ${props => props.disabled === 1 ? "black" : "white"}; 
        border-radius: 10px;
        cursor: ${props => props.disabled === 1 ? "default" : "pointer"};
        transition: background-color 0.5s; 
`;

export const BotaoCarrinho = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 10;
    background: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    transition: 0.5s;
    cursor: pointer;
    outline: none;

  :hover {
    transform: scale(1.1);
    outline: none;
  }

   svg {
    color: black;
    height: 25px;
    width: 25px;
    outline: none;
  }

  div .numeroProdutos {
    position: absolute;
      bottom: -5px;  
      right: 3px;
      background: green;
      color: white;
      border-radius: 50%;
      height: 23px;
      width: 23px;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
  }
   p {
    font-weight: bold;
    font-size: 16px;
   }

`;