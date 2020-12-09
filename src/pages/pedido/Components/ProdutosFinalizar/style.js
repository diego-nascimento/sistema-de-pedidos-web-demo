import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
    width: 99%;
    padding: 5px 10px;    
    margin: 5px;
    margin-top: 20px;
    overflow: auto; 
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    
    ${media.lessThan("medium")`
        max-width: 98.5%;
        width: 100%;
        padding: 5px 0px;      
    `}

     ul {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        padding-bottom: 10px;
        margin-bottom: 10px;
        position: relative;
    }

    

    h2 {
        text-align: center;
    }

    h3.total {
        margin-top: 10px;
        text-align: right;
        margin-right: 15px;
    }
`;

export const Produto = styled.li`
    padding: 20px 0px;
    width: 98%;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .container-dados {
        height: 100px;
        width: 98%;
       
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        padding: 5px 10px;
        margin: 10px 5px 0px 5px;
        
    }

    

    .imagem {
      width: 90px;
      height: 100%;
      display: flex;
      align-items: center;
      border-radius: 15px;
      margin-left: 10px;
      margin-right: 10px;
    }

    .imagem img {
            width: 100%;
            border-radius: 15px;
            
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


