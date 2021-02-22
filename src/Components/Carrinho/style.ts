import styled, {keyframes} from 'styled-components'
import media from 'styled-media-query'

interface ModalProps{
    mostrar: boolean
}

const aparecer = keyframes`
  from: {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Modal = styled.div<ModalProps>`
     @media(max-width: 750px){
        display:  ${(props: ModalProps) => props.mostrar === true ? "flex" : "none"};
        position: fixed;
        top: 0;
        height:100vh;
        width: 100vw;
        background: green;
     }
            
    
`; 

interface ContainerProps{
    scroll: boolean
    mostrar: boolean
}

export const Container = styled.div<ContainerProps>`
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
    display: ${(props: ContainerProps) => props.mostrar === true ? "flex" : "none"};
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
        overflow-y: ${(props: ContainerProps) => props.scroll === true ? "scroll" : "none"}; 
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
        font-size: 1.3rem;
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
    width: 98%;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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

    div{
        display: flex;
        align-items: center;
    }

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
        cursor: pointer;
        align-self: center;
        width: 70px;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        background-color: white;
        color: black;
        border-radius: 10px;
        font-size: .9   rem;
    }

    
`;

interface BotaoFinalizarProps{
    disabled: boolean
}

export const BotaoFinalizar = styled.button<BotaoFinalizarProps>`
        margin-top: 1px;
        margin-bottom: 10px;
        width: 90%;
        align-self: center;
        height: 40px;
        width: 90%;
        font-family: 'Roboto', sans-serif;
        border: 1px solid black;
        font-weight: bold;
        background-color: ${(props:BotaoFinalizarProps) => props.disabled === true ? "#cccccc" : "green"}; 
        color: ${(props: BotaoFinalizarProps) => props.disabled === true ? "black" : "white"}; 
        border-radius: 10px;
        cursor: ${(props: BotaoFinalizarProps) => props.disabled === true ? "default" : "pointer"};
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
      bottom: 0px;  
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
    position: relative;
    top: 7px;
   }

`;